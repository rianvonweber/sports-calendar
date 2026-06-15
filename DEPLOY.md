# Matchday PWA — Deployment Guide
## How to get this app on your phone via Vercel (free, ~10 minutes)

---

## What you need
- A free GitHub account → https://github.com
- A free Vercel account → https://vercel.com (sign up with GitHub)

---

## Step 1: Create a GitHub repository

1. Go to https://github.com/new
2. Repository name: `matchday` (or anything you like)
3. Set it to **Private** (recommended)
4. Click **Create repository**

---

## Step 2: Upload the files

You have two options:

### Option A — Upload via GitHub web UI (easiest, no coding needed)
1. On your new repo page, click **"uploading an existing file"**
2. Drag and drop ALL these files/folders:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `css/` folder (with `style.css` inside)
   - `js/` folder (with `data.js` and `app.js` inside)
   - `icons/` folder (with `icon-192.png` and `icon-512.png` inside)
3. Scroll down, click **Commit changes**

### Option B — Use GitHub Desktop (if you prefer)
1. Download GitHub Desktop from https://desktop.github.com
2. Clone your new repo
3. Copy all files into the folder
4. Commit and push

---

## Step 3: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Find your `matchday` repo and click **Import**
4. Leave all settings as default (Vercel auto-detects static HTML)
5. Click **Deploy**
6. Wait ~30 seconds → you'll get a URL like `https://matchday-abc123.vercel.app`

That's it! Your app is live.

---

## Step 4: Install on your phone (Add to Home Screen)

### Android (Chrome)
1. Open your Vercel URL in Chrome
2. Tap the **3-dot menu** → "Add to Home screen"
3. Tap **Add** → the app icon appears on your home screen
4. It now works like a native app (fullscreen, offline, etc.)

### iPhone (Safari)
1. Open your Vercel URL in **Safari** (must be Safari for PWA)
2. Tap the **Share button** (box with arrow)
3. Scroll down → tap **"Add to Home Screen"**
4. Tap **Add** → done!

---

## Step 5: Enable push notifications
1. Open the app from your home screen
2. Tap **"Enable"** on the notification banner at the top
3. Tap any event → tap **"Set reminder"**
4. You'll get a push notification 60 min, 30 min, and 5 min before the event

---

## Updating the schedule
Whenever you want to add new events or update the data:
1. Edit `js/data.js` in your GitHub repo (click the file → pencil icon → edit → commit)
2. Vercel automatically redeploys within ~30 seconds
3. Open the app and pull down to refresh

---

## Your file structure
```
matchday/
├── index.html          ← Main app
├── manifest.json       ← PWA config (name, icon, theme)
├── sw.js               ← Service worker (offline + notifications)
├── css/
│   └── style.css       ← All styling
├── js/
│   ├── data.js         ← All event data (edit this to update schedule)
│   └── app.js          ← App logic (filters, countdowns, etc.)
└── icons/
    ├── icon-192.png    ← App icon (small)
    └── icon-512.png    ← App icon (large)
```

---

## Tips
- **Custom domain**: In Vercel settings you can add a free `.vercel.app` subdomain or connect your own domain
- **Updating events**: Just edit `js/data.js` on GitHub — no coding knowledge needed, the format is clear
- **Private**: Keep the repo private so only you can edit it; the deployed URL is still accessible to you
