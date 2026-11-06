# Naxcuure Healthcare website

React + Vite + Tailwind site, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Chatbot (NaxBot)

The chatbot calls `/api/chat` (`api/chat.ts`), a Vercel serverless function that talks to Google Gemini.
The API key stays on the server and is never sent to visitors' browsers.

- Set `GEMINI_API_KEY` in **Vercel → Project → Settings → Environment Variables**, then redeploy.
- `npm run dev` does not run the `/api` function; use `npx vercel dev` to test the chatbot locally.
- Failures are logged in **Vercel → Project → Logs** (look for "Gemini API error").
