# Hengki Pranoto - Solution Architect Portfolio

Static-first portfolio built with Astro, backed by Sanity when configured, and deployed to Cloudflare Pages.

## Local development

```powershell
npm.cmd install
npm.cmd run dev
```

Copy `.env.example` to `.env` to connect a Sanity project. Without those values, the site builds with the reviewed seed content in `apps/web/src/content/seed.ts`.

## Commands

- `npm run dev` - start the portfolio
- `npm run build` - create the production site
- `npm run check` - Astro and TypeScript validation
- `npm run test` - utility tests
- `npm run studio` - start Sanity Studio after configuring a project

Deployment and rollback details are in `docs/operations.md`.
Leonore Portfolio
