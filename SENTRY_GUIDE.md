# Sentry Setup Guide
Quick steps to integrate Sentry into this Next.js project.

## 1. Account Setup
1. Go to [Sentry.io](https://sentry.io) and create an account.
2. Create a new project: **Next.js**.
3. Copy your **DSN** (Data Source Name).

## 2. SDK Installation
Run the following command in your terminal:
```bash
npx @sentry/wizard@latest -i nextjs
```

## 3. Configuration
The wizard will automatically generate/update:
- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`
- `next.config.js` (Sentry integration)

## 4. Environment Variables
Add the following to your `.env.local` and Vercel/Production settings:
```env
NEXT_PUBLIC_SENTRY_DSN=your_dsn_here
SENTRY_AUTH_TOKEN=your_auth_token_here
```

## 5. Verification
To verify the setup, add a temporary button to trigger a test error:
```typescript
<button onClick={() => { throw new Error("Sentry Test Error"); }}>
  Test Sentry
</button>
```

---
**Note:** Ensure you keep your `SENTRY_AUTH_TOKEN` private and never commit it to public repositories.
