# Sentry Setup Guide

This guide provides a short, on-point checklist for setting up Sentry in this Next.js project.

## 1. Create Account & Project
1. Go to [sentry.io](https://sentry.io/) and create an account or log in.
2. Create a new project. Select **Next.js** as your platform.
3. Keep the browser tab open; you will need the provided DSN and Auth Token.

## 2. Install Sentry
Run the Sentry wizard in the root of your project. This will automatically install dependencies and create configuration files (`sentry.client.config.ts`, `sentry.server.config.ts`, `sentry.edge.config.ts`).
```bash
npx @sentry/wizard@latest -i nextjs
```
*When prompted, select the options that match your environment (e.g., Vercel).*

## 3. Configure Environment Variables
The wizard should create or update your `.env.local`. Ensure the following variables are present:
```env
SENTRY_DSN="your_dsn_here"
SENTRY_AUTH_TOKEN="your_auth_token_here"
```
> [!IMPORTANT]
> Never commit your `SENTRY_AUTH_TOKEN` to version control.

## 4. Test Error Reporting
1. Start your local server: `npm run dev`
2. Create a temporary API route or button to trigger a runtime error (e.g., `throw new Error("Sentry Test Error")`).
3. Trigger the error in your browser.
4. Go to your Sentry dashboard and verify the error was captured.

## 5. Clean Up
Once verified, remove the test code, commit the generated config files, and update your deployment environment variables.
