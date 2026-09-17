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

The quiz needs a free Firebase Realtime Database to sync everyone's answers.

### 1. Create a Firebase project

1. Go to <https://console.firebase.google.com> → **Add project**
2. Name it anything (e.g. `muscle-quiz`). You can skip Google Analytics.

### 2. Turn on the Realtime Database

1. In the left sidebar: **Build → Realtime Database → Create Database**
2. Pick any location, then choose **Start in test mode** → Enable

> **What test mode means:** anyone who knows your database URL can read and write it,
> and the rules auto-expire after 30 days. That's fine for a classroom activity. See
> [Locking it down](#locking-it-down-optional) below if you want it tighter.

### 3. Register a web app and copy the config

1. Click the gear icon → **Project settings**
2. Scroll to **Your apps** → click the web icon `</>`
3. Give it any nickname → **Register app**
4. It shows you a `firebaseConfig` object. Copy those values into **`config.js`** in
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

Test-mode rules expire after 30 days, and while they're live anyone with the
database URL can write to it. For a one-off class session that's a non-issue. If
you want to keep using it, replace the rules in **Realtime Database → Rules** with
something scoped to this app:

```json
{
  "rules": {
    "rooms": {
      "$room": {
        ".read": true,
        ".write": true,
        ".validate": "$room.length <= 8"
      }
    }
  }
}
```

That still allows anonymous play (which is the point) but confines writes to the
`rooms` subtree. Genuine tamper-proofing would need Firebase Auth and server-side
score validation, which is well beyond what a classroom quiz warrants.

---

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app — UI, game logic, styling |
| `config.js` | Your Firebase credentials (the only file you must edit) |
| `questions.js` | The question bank |

No build step, no dependencies to install. It's three static files.

---

## Cost

Firebase's free Spark tier covers this comfortably — a classroom game moves a few
kilobytes. You do not need to enter a credit card.
