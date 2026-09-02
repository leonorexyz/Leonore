export function GET() {
  return new Response('User-agent: *\nAllow: /\nSitemap: https://backuppro.leonorekingdom.xyz/sitemap-index.xml\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
