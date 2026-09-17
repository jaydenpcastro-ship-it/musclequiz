# Muscle Physio Live

A live, Kahoot-style multiplayer quiz on skeletal muscle physiology and biomechanics.
Students join from their own phones — **no account, no sign-in, no app**. They open a
link (or scan a QR code), type their name, and answer.

- 10 multiple-choice questions at moderate difficulty
- 20-second timer per question (configurable, 10–60s)
- Speed-weighted scoring: faster correct answers earn more
- Live leaderboard, final podium, automatic winner (handles ties)
- Host screen shows the question, live answer tallies, and the controls

---

## Setup (about five minutes, once)

The quiz needs a free Supabase project (a hosted Postgres database with realtime
sync built in) to sync everyone's answers.

### 1. Create a Supabase project

1. Go to <https://supabase.com/dashboard> → **New project**
2. Name it anything (e.g. `muscle-quiz`), pick any region, and set a database
   password (you won't need it again — the app never connects directly to Postgres).

### 2. Run the schema

1. In the left sidebar: **SQL Editor → New query**
2. Open **`schema.sql`** in this repo, copy its entire contents, paste into the
   editor, and click **Run**.

This creates a `rooms` table (one row per game, holding all its live state) with
row-level security policies that allow anyone to read and write it, and turns on
Realtime sync for that table.

> **What "anyone can read and write" means:** the same tradeoff as Firebase's test
> mode — anyone with your project's URL and anon key can write to the `rooms`
> table. That's fine for a classroom activity. See
> [Locking it down](#locking-it-down-optional) below if you want it tighter.

### 3. Copy the API credentials

1. Left sidebar: **Project settings → API**
2. Copy the **Project URL** and the **anon public** key into **`config.js`** in
   this repo, replacing each `PASTE_..._HERE` placeholder, and save.

### 4. Turn on GitHub Pages

1. In this repo: **Settings → Pages**
2. Under "Build and deployment", set **Source** to *Deploy from a branch*,
   **Branch** to `main` and folder to `/ (root)` → **Save**
3. After a minute your quiz is live at:
   `https://<your-username>.github.io/musclequiz/`

---

## Running a game

1. Open the site on the screen you're presenting from and click **Host a new game**.
2. A four-letter game code appears, along with a join link and a QR code.
3. Students open the link (or go to the site and type the code), enter their name,
   and appear in your player list.
4. Use the tabs to change the timer or shuffle the question order before you start.
5. Hit **Start game**. Then drive the round with the buttons at the bottom:
   **Reveal answer** → **Next question** → … → **Show final results**.

Whoever clicks "Host a new game" becomes the host on that device; everyone else
who opens the link is a player. Host status is remembered per game code in that
browser, so refreshing your screen mid-game is safe.

### Add players tab

If someone can't open the link — no phone, dead battery — add their name from the
**Add players** tab. They'll show up in the player list immediately, and if they
do get a device later they can claim that name by tapping it on the join screen.

---

## Editing the questions

Open **`questions.js`**. Each entry looks like:

```js
{
  q: "Question text?",
  options: ["First", "Second", "Third", "Fourth"],
  correct: 1   // zero-based: 0 = first option
}
```

Add or remove questions freely — the game adapts to however many there are.
Four options per question is expected, since the answer tiles are the four
Kahoot-style colors/shapes.

---

## Locking it down (optional)

The RLS policies from `schema.sql` allow anyone with your project's URL and anon
key to read and write any room. For a one-off class session that's a non-issue. If
you want to keep using the same project, you could tighten the insert/update
policies — e.g. require `jsonb_array_length` / key checks so writes can only touch
a room's `players` or `settings` paths, never arbitrary tables. Genuine
tamper-proofing would need Supabase Auth and server-side score validation, which is
well beyond what a classroom quiz warrants.

---

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app — UI, game logic, styling |
| `config.js` | Your Supabase credentials (the only file you must edit) |
| `schema.sql` | Database schema — run once in the Supabase SQL Editor |
| `questions.js` | The question bank |

No build step, no dependencies to install. It's four static files.

---

## Cost

Supabase's free tier covers this comfortably — a classroom game moves a few
kilobytes and a couple thousand realtime messages at most. You do not need to
enter a credit card.
