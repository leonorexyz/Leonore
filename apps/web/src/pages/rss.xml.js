import rss from '@astrojs/rss';
import { getPortfolioContent } from '../lib/content';

export async function GET(context) {
  const { articles } = await getPortfolioContent();
  return rss({
    title: 'Hengki Pranoto - Architecture Insights',
    description: 'Architecture decisions, delivery, operations, and bounded AI automation.',
    site: context.site,
    items: articles.map((article) => ({
      title: article.title,
      description: article.summary,
      pubDate: new Date(article.publishedAt),
      link: `/insights/${article.slug}/`,
      categories: [article.category, ...article.tags]
    })),
    customData: '<language>en</language>'
  });
}
