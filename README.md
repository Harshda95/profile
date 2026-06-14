# Portfolio — React + Node

A premium, dark-themed personal portfolio for a CS student. Apple/Linear-inspired,
glassmorphism cards, purple accents, animated gradients, scroll reveals.

## Structure

```
portfolio/
├── client/   React (Vite) + Tailwind + Framer Motion frontend
└── server/   Express backend (contact form email handler)
```

## 1. Frontend setup

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:5173

### Customize content
All text content lives in **one file**: `client/src/data/content.js`
- `profile` — name, role, tagline, resume link, social URLs
- `about` — bio paragraphs + stats
- `skills` — categories and tags
- `projects` — project cards (title, description, tags, image, links)
- `experience` — timeline entries
- `achievements` — certificates/badges

### Add your images
- Profile photo → `client/public/profile.jpg`
- Project screenshots → `client/public/projects/project-1.png` etc. (paths referenced in `content.js`)
- Resume → `client/public/resume.pdf`
- Favicon → `client/public/favicon.svg`

If an image file doesn't exist, it just hides gracefully — site still looks fine.

## 2. Backend setup (contact form)

```bash
cd server
npm install
cp .env.example .env
```

Edit `.env`:
- `SMTP_USER` / `SMTP_PASS` — for Gmail, generate an **App Password** (not your real password): https://myaccount.google.com/apppasswords
- `CONTACT_RECEIVER` — where contact form messages get sent
- `CLIENT_URL` — your frontend URL (for CORS)

```bash
npm run dev
```

Server runs on http://localhost:5000. Health check: `GET /api/health`

## 3. Connect frontend to backend

In `client/.env`, set:
```
VITE_API_URL=http://localhost:5000
```

For production, point this at your deployed backend URL.

## Tech stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, Lucide icons
- **Backend:** Node.js, Express, Nodemailer, express-rate-limit

## Deployment

- **Frontend:** Vercel / Netlify (build command: `npm run build`, output: `dist`)
- **Backend:** Render / Railway / Fly.io — set the same env vars from `.env.example`
- Update `VITE_API_URL` (frontend) and `CLIENT_URL` (backend) to your deployed URLs.

## Next steps / TODO

- [ ] Replace all placeholder text in `content.js` with your real info
- [ ] Add profile photo, project screenshots, resume PDF
- [ ] Update social links
- [ ] Set up SMTP credentials for contact form
- [ ] (Optional) Add a "DSA Progress" section if you want a calendar heatmap of your 160-day streak
