export type RichTextBlock = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  code?: string;
};

export type SiteSettings = {
  title: string;
  description: string;
  domain: string;
  contactEmail?: string;
  linkedInUrl?: string;
  githubUrl: string;
  resumeUrl: string;
  availability: string;
};

export type Profile = {
  name: string;
  title: string;
  statement: string;
  biography: string[];
  location: string;
  capabilitySummary: string;
  labSummary: string;
};

export type ImpactMetric = {
  value: string;
  label: string;
  description: string;
  evidenceNote: string;
  order: number;
  verified: boolean;
};

export type CaseStudy = {
  title: string;
  slug: string;
  summary: string;
  industry: string;
  disclosure: string;
  period: string;
  role: string;
  problem: string;
  constraints: string[];
  responsibilities: string[];
  existingState: string;
  targetState: string;
  alternatives: string[];
  decisions: string[];
  tradeoffs: string[];
  delivery: string[];
  operations: string[];
  security: string[];
  failureStrategy: string[];
  outcome: string;
  metrics: ImpactMetric[];
  lessons: string[];
  technologies: string[];
  capabilities: string[];
  featured: boolean;
  status: 'Published' | 'R&D';
  seoTitle: string;
  seoDescription: string;
};

export type Experience = {
  organization: string;
  role: string;
  period: string;
  industries: string[];
  scope: string;
  responsibilities: string[];
  outcomes: string[];
  capabilities: string[];
};

export type Principle = {
  number: string;
  title: string;
  description: string;
  example: string;
};

export type Article = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  featured: boolean;
  body: RichTextBlock[];
  seoTitle: string;
  seoDescription: string;
};

export type Credential = {
  name: string;
  issuer: string;
  issueDate?: string;
  url?: string;
  type: string;
};

export type PortfolioContent = {
  settings: SiteSettings;
  profile: Profile;
  metrics: ImpactMetric[];
  caseStudies: CaseStudy[];
  experience: Experience[];
  principles: Principle[];
  articles: Article[];
  credentials: Credential[];
};
