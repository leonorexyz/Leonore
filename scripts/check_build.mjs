import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('../apps/web/dist/', import.meta.url);
const rootPath = decodeURIComponent(root.pathname).replace(/^\/(?:[A-Za-z]:)/, (match) => match.slice(1));

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function targetFor(pathname) {
  const clean = pathname.split(/[?#]/)[0];
  if (clean === '/') return join(rootPath, 'index.html');
  const normalized = clean.replace(/^\//, '');
  if (extname(normalized)) return join(rootPath, normalized);
  return join(rootPath, normalized, 'index.html');
}

const htmlFiles = walk(rootPath).filter((file) => file.endsWith('.html'));
const errors = [];
const titles = new Map();

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const name = relative(rootPath, file);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]?.trim();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]?.trim();
  if (!title) errors.push(`${name}: missing title`);
  if (!description) errors.push(`${name}: missing meta description`);
  if (!canonical) errors.push(`${name}: missing canonical URL`);
  if (title && title !== 'Page not found | Hengki Pranoto') {
    if (titles.has(title)) errors.push(`${name}: duplicate title also used by ${titles.get(title)}`);
    titles.set(title, name);
  }

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (!value.startsWith('/') || value.startsWith('//')) continue;
    const target = targetFor(value);
    if (!existsSync(target)) errors.push(`${name}: missing internal target ${value}`);
  }
}

for (const required of ['index.html', '404.html', 'rss.xml', 'robots.txt', 'sitemap-index.xml', 'og.png', 'resume/hengki-pranoto-resume.pdf']) {
  if (!existsSync(join(rootPath, required))) errors.push(`missing required build artifact: ${required}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages, unique metadata, internal links, and publication assets.`);
