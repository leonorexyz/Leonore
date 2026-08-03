export function toSlug(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function uniqueSlugs(values: string[]): string[] {
  return [...new Set(values.map(toSlug).filter(Boolean))];
}
