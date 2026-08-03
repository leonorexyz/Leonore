import { defineArrayMember, defineField, defineType } from 'sanity';

const seo = defineType({
  name: 'seo', title: 'SEO', type: 'object', fields: [
    defineField({ name: 'title', title: 'SEO title', type: 'string', validation: (rule) => rule.max(65) }),
    defineField({ name: 'description', title: 'SEO description', type: 'text', rows: 3, validation: (rule) => rule.max(165) }),
    defineField({ name: 'socialImage', title: 'Social image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'canonicalUrl', title: 'Canonical URL override', type: 'url' })
  ]
});

const codeBlock = defineType({
  name: 'codeBlock', title: 'Code block', type: 'object', fields: [
    defineField({ name: 'language', title: 'Language', type: 'string' }),
    defineField({ name: 'code', title: 'Code', type: 'text', rows: 12 })
  ], preview: { select: { title: 'language', subtitle: 'code' } }
});

const impactMetric = defineType({
  name: 'impactMetric', title: 'Impact metric', type: 'document', fields: [
    defineField({ name: 'value', title: 'Value', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Supporting description', type: 'text', rows: 3 }),
    defineField({ name: 'evidenceNote', title: 'Evidence note', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: 'displayOrder', title: 'Display order', type: 'number', initialValue: 10 }),
    defineField({ name: 'verified', title: 'Verified', type: 'boolean', initialValue: false })
  ], preview: { select: { title: 'value', subtitle: 'label' } }
});

const siteSettings = defineType({
  name: 'siteSettings', title: 'Site settings', type: 'document', fields: [
    defineField({ name: 'title', title: 'Site title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'defaultSeoTitle', title: 'Default SEO title', type: 'string' }),
    defineField({ name: 'description', title: 'Default description', type: 'text', rows: 3 }),
    defineField({ name: 'domain', title: 'Domain', type: 'url' }),
    defineField({ name: 'defaultSocialImage', title: 'Default social image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'contactEmail', title: 'Professional email', type: 'email' }),
    defineField({ name: 'linkedInUrl', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url' }),
    defineField({ name: 'resume', title: 'Resume file', type: 'file', options: { accept: '.pdf' } }),
    defineField({ name: 'availability', title: 'Availability status', type: 'string' })
  ]
});

const profile = defineType({
  name: 'profile', title: 'Profile', type: 'document', fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'title', title: 'Professional title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'statement', title: 'Positioning statement', type: 'text', rows: 3 }),
    defineField({ name: 'biography', title: 'Biography', type: 'array', of: [defineArrayMember({ type: 'text', rows: 4 })] }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'profileImage', title: 'Profile image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'capabilitySummary', title: 'Capability summary', type: 'text', rows: 3 }),
    defineField({ name: 'labSummary', title: 'Creative and lab summary', type: 'text', rows: 3 })
  ]
});

const stringList = (name: string, title: string) => defineField({ name, title, type: 'array', of: [defineArrayMember({ type: 'string' })] });
const textList = (name: string, title: string) => defineField({ name, title, type: 'array', of: [defineArrayMember({ type: 'text', rows: 3 })] });

const caseStudy = defineType({
  name: 'caseStudy', title: 'Case study', type: 'document', fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'summary', title: 'Executive summary', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'disclosure', title: 'Client disclosure level', type: 'string', options: { list: ['Public', 'Anonymized public summary', 'R&D - concept and implementation boundary', 'Private'] } }),
    defineField({ name: 'period', title: 'Project period', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'problem', title: 'Problem', type: 'text', rows: 5 }),
    textList('constraints', 'Constraints'),
    textList('responsibilities', 'Responsibilities'),
    defineField({ name: 'existingState', title: 'Existing state', type: 'text', rows: 5 }),
    defineField({ name: 'targetState', title: 'Target state', type: 'text', rows: 5 }),
    textList('alternatives', 'Alternatives considered'),
    textList('decisions', 'Key decisions'),
    textList('tradeoffs', 'Trade-offs'),
    defineField({ name: 'architectureDiagram', title: 'Sanitized architecture diagram', type: 'image', options: { hotspot: true } }),
    textList('delivery', 'Delivery approach'),
    textList('operations', 'Operational considerations'),
    textList('security', 'Security considerations'),
    textList('failureStrategy', 'Rollback and failure strategy'),
    defineField({ name: 'outcome', title: 'Outcome', type: 'text', rows: 5 }),
    defineField({ name: 'metrics', title: 'Metrics', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'impactMetric' }] })] }),
    textList('lessons', 'Lessons learned'),
    stringList('technologies', 'Technology tags'),
    stringList('capabilities', 'Capability tags'),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'publicationStatus', title: 'Publication status', type: 'string', options: { list: ['Draft', 'Published', 'R&D'] }, initialValue: 'Draft', validation: (rule) => rule.required() }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' })
  ], preview: { select: { title: 'title', subtitle: 'publicationStatus', media: 'architectureDiagram' } }
});

const experience = defineType({
  name: 'experience', title: 'Experience', type: 'document', fields: [
    defineField({ name: 'organization', title: 'Organization', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'startDate', title: 'Start date', type: 'date' }),
    defineField({ name: 'endDate', title: 'End date', type: 'date' }),
    defineField({ name: 'period', title: 'Public period label', type: 'string' }),
    defineField({ name: 'currentRole', title: 'Current role', type: 'boolean', initialValue: false }),
    stringList('industryExposure', 'Industry exposure'),
    defineField({ name: 'scope', title: 'Scope', type: 'text', rows: 4 }),
    textList('responsibilities', 'Selected responsibilities'),
    textList('outcomes', 'Selected outcomes'),
    defineField({ name: 'relatedCaseStudies', title: 'Related case studies', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'caseStudy' }] })] }),
    stringList('capabilities', 'Capability tags')
  ]
});

const architecturePrinciple = defineType({
  name: 'architecturePrinciple', title: 'Architecture principle', type: 'document', fields: [
    defineField({ name: 'number', title: 'Number', type: 'number', validation: (rule) => rule.required() }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'supportingExample', title: 'Supporting example', type: 'text', rows: 4 }),
    defineField({ name: 'relatedCaseStudy', title: 'Related case study', type: 'reference', to: [{ type: 'caseStudy' }] }),
    defineField({ name: 'displayOrder', title: 'Display order', type: 'number', initialValue: 10 })
  ], preview: { select: { title: 'title', subtitle: 'number' } }
});

const category = defineType({ name: 'category', title: 'Article category', type: 'document', fields: [
  defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
  defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() })
] });

const tag = defineType({ name: 'tag', title: 'Article tag', type: 'document', fields: [
  defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
  defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() })
] });

const article = defineType({
  name: 'article', title: 'Article', type: 'document', fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image', options: { hotspot: true } }), defineArrayMember({ type: 'codeBlock' })] }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'profile' }] }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'tag' }] })] }),
    defineField({ name: 'publishedAt', title: 'Publish date', type: 'datetime' }),
    defineField({ name: 'updatedAt', title: 'Update date', type: 'datetime' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'relatedArticles', title: 'Related articles', type: 'array', of: [defineArrayMember({ type: 'reference', to: [{ type: 'article' }] })] }),
    defineField({ name: 'readingMinutes', title: 'Estimated reading time', type: 'number', validation: (rule) => rule.min(1) }),
    defineField({ name: 'publicationStatus', title: 'Publication status', type: 'string', options: { list: ['Draft', 'Published'] }, initialValue: 'Draft' }),
    defineField({ name: 'seo', title: 'SEO', type: 'seo' })
  ], preview: { select: { title: 'title', subtitle: 'publicationStatus', media: 'coverImage' } }
});

const credential = defineType({
  name: 'credential', title: 'Credential', type: 'document', fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'issuer', title: 'Issuer', type: 'string' }),
    defineField({ name: 'issueDate', title: 'Issue date', type: 'date' }),
    defineField({ name: 'url', title: 'Credential URL', type: 'url' }),
    defineField({ name: 'credentialId', title: 'Credential ID', type: 'string' }),
    defineField({ name: 'type', title: 'Type', type: 'string' }),
    defineField({ name: 'displayOrder', title: 'Display order', type: 'number', initialValue: 10 })
  ]
});

const technology = defineType({
  name: 'technology', title: 'Technology', type: 'document', fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'category', title: 'Capability group', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'officialUrl', title: 'Official URL', type: 'url' }),
    defineField({ name: 'icon', title: 'Icon', type: 'image' }),
    defineField({ name: 'display', title: 'Display', type: 'boolean', initialValue: true })
  ]
});

export const schemaTypes = [seo, codeBlock, siteSettings, profile, impactMetric, caseStudy, experience, architecturePrinciple, article, category, tag, credential, technology];
