import { createClient } from '@sanity/client';
import type { Article, CaseStudy, ImpactMetric, PortfolioContent, Principle, RichTextBlock } from '../types/content';
import { seedContent } from '../content/seed';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = import.meta.env.PUBLIC_SANITY_DATASET?.trim() || 'production';
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION?.trim() || '2026-08-01';

function portableTextToBlocks(body: unknown): RichTextBlock[] {
  if (!Array.isArray(body)) return [];
  const result: RichTextBlock[] = [];
  let current: RichTextBlock = { paragraphs: [] };

  for (const block of body) {
    if (!block || typeof block !== 'object') continue;
    const value = block as { style?: string; children?: Array<{ text?: string }>; listItem?: string; code?: string };
    const text = value.children?.map((child) => child.text || '').join('').trim();
    if (value.code) {
      current.code = value.code;
      continue;
    }
    if (!text) continue;
    if (value.style?.startsWith('h')) {
      if (current.heading || current.paragraphs.length || current.bullets?.length || current.code) result.push(current);
      current = { heading: text, paragraphs: [] };
    } else if (value.listItem) {
      current.bullets = [...(current.bullets || []), text];
    } else {
      current.paragraphs.push(text);
    }
  }
  if (current.heading || current.paragraphs.length || current.bullets?.length || current.code) result.push(current);
  return result;
}

function normalizeArticle(document: Record<string, any>): Article {
  return {
    title: document.title,
    slug: document.slug,
    summary: document.summary,
    category: document.category || 'Architecture Decisions',
    tags: document.tags || [],
    publishedAt: document.publishedAt,
    updatedAt: document.updatedAt,
    readingMinutes: document.readingMinutes || 5,
    featured: Boolean(document.featured),
    body: portableTextToBlocks(document.body),
    seoTitle: document.seoTitle || document.title,
    seoDescription: document.seoDescription || document.summary
  };
}

export async function getPortfolioContent(): Promise<PortfolioContent> {
  if (!projectId) return seedContent;

  const client = createClient({ projectId, dataset, apiVersion, useCdn: false });
  try {
    const result = await client.fetch<Record<string, any>>(`{
      "settings": *[_type == "siteSettings"][0]{..., "resumeUrl": resume.asset->url},
      "profile": *[_type == "profile"][0],
      "metrics": *[_type == "impactMetric" && verified == true] | order(displayOrder asc){..., "order": displayOrder},
      "caseStudies": *[_type == "caseStudy" && publicationStatus in ["Published", "R&D"]] | order(featured desc, _updatedAt desc){..., "slug": slug.current, "status": publicationStatus},
      "experience": *[_type == "experience"] | order(currentRole desc, startDate desc){..., "period": coalesce(period, startDate + " - " + coalesce(endDate, "Present")), "industries": industryExposure},
      "principles": *[_type == "architecturePrinciple"] | order(displayOrder asc){..., "number": string(number), "example": supportingExample},
      "articles": *[_type == "article" && publicationStatus == "Published"] | order(publishedAt desc){..., "slug": slug.current, "category": category->title, "tags": tags[]->title, "readingMinutes": coalesce(readingMinutes, 5), "seoTitle": seo.title, "seoDescription": seo.description},
      "credentials": *[_type == "credential"] | order(displayOrder asc)
    }`);

    return {
      settings: result.settings ? { ...seedContent.settings, ...result.settings } : seedContent.settings,
      profile: result.profile ? { ...seedContent.profile, ...result.profile } : seedContent.profile,
      metrics: (result.metrics?.length ? result.metrics : seedContent.metrics) as ImpactMetric[],
      caseStudies: (result.caseStudies?.length ? result.caseStudies : seedContent.caseStudies) as CaseStudy[],
      experience: result.experience?.length ? result.experience : seedContent.experience,
      principles: (result.principles?.length ? result.principles : seedContent.principles) as Principle[],
      articles: result.articles?.length ? result.articles.map(normalizeArticle) : seedContent.articles,
      credentials: result.credentials?.length ? result.credentials : seedContent.credentials
    };
  } catch (error) {
    console.warn('Sanity content unavailable; using reviewed seed content.', error);
    return seedContent;
  }
}
