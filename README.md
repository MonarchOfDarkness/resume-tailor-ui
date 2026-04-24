# RoleForge AI UI

A modern Next.js frontend for an agentic application workflow.

This app is designed to help users upload a resume, target a role with a job description or job URL, review fit insights, generate application materials, and export a tailored version in a cleaner, more polished interface.

## Features

- Resume upload flow
- Job description / role targeting input
- Fit insights and scoring UI
- ATS-oriented review sections
- Cover letter and interview prep views
- Export-ready workflow
- Responsive layout optimized for desktop and mobile
- Clean SaaS-style landing page and dashboard experience

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS / global styling
- Vercel-friendly frontend structure

## Project Structure

```text
app/
  app/page.tsx      # Main app workflow UI
  page.tsx          # Landing page
  globals.css       # Global styles
  layout.tsx        # Root layout
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MonarchOfDarkness/resume-tailor-ui.git
cd resume-tailor-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is set up well for Vercel deployment.

### Deploy on Vercel

1. Push this repository to GitHub
2. Import the repo into Vercel
3. Add any required environment variables
4. Deploy

## Backend Connection

This repository is the frontend/UI portion of the RoleForge AI project.

If you are using a separate backend, configure the frontend environment variable as needed:

```env
NEXT_PUBLIC_BACKEND_URL=your-backend-url
```

Example:

```env
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000
```

## Notes

- This repo is focused on the UI/frontend experience
- Backend logic, document processing, and resume export can live in a separate API repo
- For full functionality, make sure the backend is running and the frontend is pointed at the correct API URL

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Roadmap

- More advanced dashboard polish
- Better analytics and scoring visuals
- Improved export flow feedback
- More resume templates and formatting options
- Authentication / saved sessions

