# Built4You Next.js App

## Setup

```bash
npm install
npm run dev
```

## Deployment

Frontend environment variable:

```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

Backend environment variables:

```env
FRONTEND_URL=https://built4you.in,https://www.built4you.in
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=your-gmail-address@gmail.com
```

Use origins without a trailing slash. `FRONTEND_URL` also accepts a
comma-separated list when both local and production frontends need access.
Use a Gmail App Password for `EMAIL_PASS`, not your normal Gmail password.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion

## Architecture

- components/
- sections/
- layouts/
- hooks/
- lib/
- data/
