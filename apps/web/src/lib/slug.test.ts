import { describe, expect, it } from 'vitest';
import { toSlug, uniqueSlugs } from './slug';

describe('slug helpers', () => {
  it('creates stable human-readable slugs', () => {
    expect(toSlug('AI & Automation')).toBe('ai-automation');
    expect(toSlug('Architecture Decisions')).toBe('architecture-decisions');
  });

  it('removes duplicates without reordering', () => {
    expect(uniqueSlugs(['BFSI', 'AI', 'BFSI'])).toEqual(['bfsi', 'ai']);
  });
});
