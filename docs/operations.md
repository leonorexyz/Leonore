# Operations

## Production release

1. Run `npm run ci`.
2. Deploy `apps/web/dist` to the `leonore-portfolio` Cloudflare Pages project.
3. Verify the Pages deployment URL before changing any domain.
4. Keep the legacy Pages project attached to `backup.leonorekingdom.xyz`.
5. Attach `leonorekingdom.xyz` and `www.leonorekingdom.xyz` only after the new deployment is healthy.

## CMS publication

The web build reads published content from Sanity when `PUBLIC_SANITY_PROJECT_ID` is configured. If Sanity is unavailable or returns no published content, the build uses reviewed seed content so an upstream outage cannot erase the portfolio.

Create a Cloudflare production deploy hook and register it as a Sanity webhook for create, update, and delete events on published documents. Keep the hook URL in Sanity configuration, never in the repository.

## Rollback

1. Reassign `leonorekingdom.xyz` to the last successful Cloudflare Pages deployment or use the Pages rollback control.
2. If the new project is unavailable, point the apex back to the legacy Pages project after confirming `backup.leonorekingdom.xyz` is healthy.
3. Do not delete either project or its DNS record during incident response.

## Content review gates

- Do not publish client names, internal endpoints, private diagrams, addresses, phone numbers, or unsupported metrics.
- Every public numeric claim requires an evidence note in Sanity.
- R&D work must remain labeled as R&D until a production result is verified.
