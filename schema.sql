-- ---------------------------------------------------------------
-- Muscle Physio Live — Supabase schema
--
-- Run this once: Supabase dashboard -> SQL Editor -> New query ->
-- paste this whole file -> Run.
--
-- Each game room is stored as a single JSONB blob (state, settings,
-- players), synced live to every client via Supabase Realtime. The
-- room_set/room_merge functions let the client write to a nested
-- sub-path (e.g. "players.<id>") without clobbering sibling keys.
-- ---------------------------------------------------------------

create table if not exists rooms (
  code text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table rooms enable row level security;

drop policy if exists "anyone can read rooms" on rooms;
create policy "anyone can read rooms" on rooms
  for select using (true);

drop policy if exists "anyone can insert rooms" on rooms;
create policy "anyone can insert rooms" on rooms
  for insert with check (true);

drop policy if exists "anyone can update rooms" on rooms;
create policy "anyone can update rooms" on rooms
  for update using (true);

alter publication supabase_realtime add table rooms;

create or replace function room_now_ms()
returns bigint
language sql
as $$
  select (extract(epoch from clock_timestamp()) * 1000)::bigint;
$$;

create or replace function room_create(p_code text, p_data jsonb)
returns void
language sql
as $$
  insert into rooms (code, data) values (p_code, p_data)
  on conflict (code) do update set data = excluded.data, updated_at = now();
$$;

create or replace function room_set(p_code text, p_path text[], p_value jsonb)
returns void
language sql
as $$
  update rooms
  set data = jsonb_set(coalesce(data, '{}'::jsonb), p_path, p_value, true),
      updated_at = now()
  where code = p_code;
$$;

create or replace function room_merge(p_code text, p_path text[], p_patch jsonb)
returns void
language sql
as $$
  update rooms
  set data = jsonb_set(
        coalesce(data, '{}'::jsonb),
        p_path,
        coalesce(data #> p_path, '{}'::jsonb) || p_patch,
        true
      ),
      updated_at = now()
  where code = p_code;
$$;

create or replace function room_restart(p_code text)
returns void
language plpgsql
as $$
declare
  d jsonb;
  k text;
begin
  select data into d from rooms where code = p_code;
  if d is null then return; end if;
  for k in select jsonb_object_keys(coalesce(d->'players', '{}'::jsonb)) loop
    d := jsonb_set(d, array['players', k, 'totalScore'], '0'::jsonb, true);
    d := jsonb_set(d, array['players', k, 'answers'], '{}'::jsonb, true);
  end loop;
  d := jsonb_set(d, '{state}', '{"status":"lobby","qIndex":0,"questionStartedAt":null,"order":null}'::jsonb, true);
  update rooms set data = d, updated_at = now() where code = p_code;
end;
$$;

grant execute on function room_now_ms() to anon, authenticated;
grant execute on function room_create(text, jsonb) to anon, authenticated;
grant execute on function room_set(text, text[], jsonb) to anon, authenticated;
grant execute on function room_merge(text, text[], jsonb) to anon, authenticated;
grant execute on function room_restart(text) to anon, authenticated;
