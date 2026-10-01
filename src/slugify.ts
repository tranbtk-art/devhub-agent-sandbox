/** Turn a human title into a URL-safe slug, optionally capped at `maxLength` characters. */
export function slugify(input: string, maxLength?: number): string {
  const slug = input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return maxLength === undefined ? slug : slug.slice(0, maxLength);
}
