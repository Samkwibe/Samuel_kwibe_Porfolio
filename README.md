# Samuel Kwibe — Portfolio

Modern React portfolio for Samuel Kwibe with project cards, skills, education, experience, contact links, and an AI-powered portfolio terminal.

## Quick Start

```bash
npm install
npm run dev
```

Use `npm run dev:full` when you want to test the AI terminal locally, because it starts Vite with the protected `/api/chat` endpoint.

## AI Terminal

The AI terminal uses a protected `/api/chat` serverless endpoint so the OpenRouter key is not exposed in browser code.

Create a local `.env` from `.env.example` and set:

```bash
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_MODEL=openai/gpt-4o-mini
SITE_URL=http://localhost:5173
```

For production, set the same environment variables in Vercel or Netlify.

## Build

```bash
npm run build
npm run preview
```

## Customize

- Edit `src/data/profile.js`
- Edit `src/data/projects.js`
- Replace or add project images in `public/repo_images_bundle/`
