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
FRONTEND_URL=https://built4you.in
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-app-password
EMAIL_TO=contact-recipient@example.com
```

Use origins without a trailing slash. `FRONTEND_URL` also accepts a
comma-separated list when both local and production frontends need access.

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
