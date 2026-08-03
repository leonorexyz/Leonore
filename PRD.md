# Product Requirements Document

## 1. Document Information

**Product:** Hengki Pranoto — Solution Architect Portfolio
**Domain:** `leonorekingdom.xyz`
**Product type:** Professional portfolio, architecture case-study library, and technical blog
**Primary owner:** Hengki Pranoto
**Status:** Proposed MVP
**Primary language:** English
**Secondary language:** Indonesian, planned after MVP

---

## 2. Executive Decision

Build a content-focused portfolio using:

* **Frontend:** Astro with TypeScript
* **Interactive components:** React only where necessary
* **CMS:** Sanity
* **Styling:** Native CSS with design tokens and scoped component styles
* **Hosting:** Cloudflare Pages
* **Repository:** GitHub
* **Analytics:** Cloudflare Web Analytics
* **Content deployment:** Sanity webhook → Cloudflare Pages Deploy Hook
* **Blog:** Sanity-managed articles rendered through Astro
* **Testing:** Vitest for utilities and Playwright for critical journeys
* **CI:** GitHub Actions for linting, type-checking, and production builds

Do **not** introduce Express, a custom Node.js API, or a database in the MVP. The website does not currently have application requirements that justify maintaining a separate backend.

Astro is designed for content-focused websites and produces static pages with no client-side JavaScript by default. It can still use React components selectively for interactive features. Astro also recommends starting with static output until server rendering is genuinely required.

Sanity has an official Astro integration and provides a managed editing interface, structured content, image handling, and a free plan sufficient for a personal portfolio.

---

## 3. Product Vision

Create a professional portfolio that demonstrates how Hengki:

> Turns complex enterprise constraints into pragmatic, production-ready architectures that teams can deliver, operate, and evolve.

The portfolio must communicate that Hengki is not merely a developer who knows multiple tools. It must demonstrate:

1. Architectural reasoning.
2. Translation of business requirements into implementable systems.
3. Risk, reliability, security, and operational awareness.
4. Delivery leadership under real constraints.
5. Ability to enable teams through standards, training, and reusable practices.
6. Sufficient implementation depth to validate whether an architecture is realistic.
7. Continued exploration of AI, automation, and modern delivery practices.

---

## 4. Problem Statement

The current portfolio has several positioning problems:

### 4.1 Professional identity is too broad

The existing messaging combines developer, creator, musician, writer, designer, business owner, and founder identities. These are valid aspects of the Leonore brand, but placing them at the same level makes it harder for a recruiter or client to understand Hengki’s strongest professional value.

### 4.2 Work is described as capability rather than evidence

A Solution Architect portfolio should not primarily display:

* Technology logos.
* Generic skill bars.
* Screenshots without context.
* Long responsibility lists.
* Personal statements without supporting outcomes.

It should show:

* Business problem.
* Constraints.
* Architecture.
* Decisions and alternatives.
* Delivery model.
* Operational considerations.
* Measurable outcome.
* Lessons and trade-offs.

### 4.3 The resume contains useful experience but limited quantified evidence

The strongest currently documented case is the BFSI product delivered in four months using a lean team of one technical lead and three developers after restructuring architecture and delivery practices.

Other experiences are credible but need supporting details before being presented as case studies. No metrics should be invented.

### 4.4 Updating content currently requires code changes

Projects, experience, certifications, architectural principles, and articles should be manageable through a CMS without editing source files.

---

## 5. Goals

### 5.1 Primary goals

The portfolio must allow a visitor to understand within approximately ten seconds:

* Who Hengki is.
* What kind of problems he solves.
* Which industries and environments he understands.
* Why his architectural experience is credible.
* How to inspect his work or contact him.

### 5.2 Business goals

* Improve credibility for Solution Architect, Technical Architect, Technical Lead, technical pre-sales, and consulting opportunities.
* Support international employment and freelance positioning.
* Provide a canonical destination linked from the resume, LinkedIn, GitHub, proposals, and professional profiles.
* Establish authority through technical writing and architecture case studies.
* Allow content to be maintained without frontend development work.

### 5.3 User goals

Visitors must be able to:

* Assess Hengki’s specialization quickly.
* Review delivered outcomes.
* understand how he approaches architecture decisions.
* Inspect technical depth through case studies and articles.
* Download a current resume.
* Contact Hengki through a professional channel.

### 5.4 Non-goals

The MVP will not include:

* User accounts.
* Comments.
* Public content contribution.
* An e-commerce system.
* A custom CMS backend.
* A custom analytics platform.
* Real-time chat.
* Client portals.
* Full creative portfolio coverage.
* Complex animation or WebGL scenes.
* A custom recommendation engine.

---

## 6. Target Audiences

### 6.1 Hiring decision-makers

Examples:

* CTO
* Head of Engineering
* Enterprise Architect
* Engineering Manager
* Technical recruiter

Their questions:

* Can this person lead architecture decisions?
* Can he communicate with technical and non-technical stakeholders?
* Has he handled enterprise risk and delivery constraints?
* Is his experience deeper than one low-code platform?

### 6.2 Prospective clients

Examples:

* BFSI organizations
* Manufacturing companies
* Oil and gas companies
* Digital transformation teams
* Organizations adopting OutSystems
* Teams modernizing monitoring or delivery practices

Their questions:

* Does he understand business constraints?
* Can he propose pragmatic rather than theoretical architecture?
* Can he help with architecture, delivery, migration, or technical enablement?
* Can he work with existing systems rather than demanding a complete rewrite?

### 6.3 Technical peers

Examples:

* Developers
* Platform engineers
* Solution architects
* Technical leads
* OutSystems practitioners

Their questions:

* Are the architectural decisions technically credible?
* How were reliability, rollback, security, and observability handled?
* What trade-offs were considered?

---

## 7. Brand Architecture

### 7.1 Primary professional identity

**Hengki Pranoto**
**Solution Architect**

Recommended positioning statement:

> I design pragmatic enterprise systems that balance delivery speed, operational resilience, security, and long-term maintainability.

Supporting statement:

> More than seven years delivering and enabling digital solutions across BFSI, manufacturing, and oil & gas environments.

### 7.2 Secondary brand

**Leonore Kingdom** becomes the umbrella brand or personal innovation studio.

It should appear as:

> Founder of Leonore Kingdom — a personal lab for software, automation, AI, design, and creative experiments.

Creative identities should not appear in the main hero section. They may appear under:

* `/lab`
* `/creative`
* `studio.leonorekingdom.xyz`

### 7.3 Tone

* Direct.
* Evidence-based.
* Technically credible.
* Business-aware.
* Calm and confident.
* Free of exaggerated claims.
* Free of buzzword-heavy descriptions.

### 7.4 Visual direction

Use a restrained enterprise-technology aesthetic:

* Neutral dark or light background.
* One controlled accent colour.
* Strong typographic hierarchy.
* Grid-based layouts.
* Architecture diagrams as primary visuals.
* Subtle system-map or topology motifs.
* Minimal animation.
* No fantasy or gaming imagery on professional pages.
* No animated percentage bars.
* No excessive glassmorphism.
* No large collection of technology logos above actual outcomes.

---

## 8. Information Architecture

### Primary navigation

1. Home
2. Case Studies
3. Experience
4. Architecture Principles
5. Insights
6. About
7. Contact

Secondary links:

* Resume
* LinkedIn
* GitHub
* Leonore Lab

### URL structure

```text
/
├── /case-studies
│   └── /case-studies/[slug]
├── /experience
├── /principles
├── /insights
│   ├── /insights/[slug]
│   ├── /insights/tags/[tag]
│   └── /insights/categories/[category]
├── /about
├── /lab
├── /contact
├── /resume
├── /rss.xml
├── /sitemap-index.xml
└── /404
```

---

## 9. Page Requirements

## 9.1 Home

The homepage must provide the professional argument rather than the full resume.

### Hero

Required content:

* Name.
* Solution Architect title.
* Positioning statement.
* Primary CTA: “View Case Studies.”
* Secondary CTA: “Download Resume.”
* Tertiary link: LinkedIn or contact.

Do not show the full residential address or personal phone number.

Recommended location display:

> Tangerang, Indonesia · Available for remote and international collaboration

### Verified impact strip

Initial verified metrics:

* 7+ years in solution architecture and enterprise delivery.
* Four-month delivery window for the highlighted BFSI product.
* Lean delivery team of one technical lead and three developers.
* Three primary industry groups: BFSI, manufacturing, and oil & gas.

Any additional metric requires supporting documentation or explicit validation.

### Featured case studies

Show two to four case studies with:

* Problem.
* Role.
* Key decision.
* Outcome.
* Industry.
* Architecture tags.

### Capability groups

Use capability groups rather than technology percentages:

1. **Solution and system architecture**
2. **Delivery and technical governance**
3. **Infrastructure and platform operations**
4. **Observability and performance**
5. **Technical enablement and training**
6. **AI and workflow automation**

### Architecture principles preview

Display three or four principles linking to the full principles page.

### Latest insights

Show the three most recent published articles.

### Contact CTA

Suggested text:

> Working on a complex system, modernization program, platform adoption, or delivery constraint? Let’s examine the architecture and trade-offs.

---

## 9.2 Case Studies

Case studies are the most important portfolio content.

Each case study must use the following structure:

1. Executive summary.
2. Business context.
3. Problem.
4. Constraints.
5. Hengki’s responsibilities.
6. Existing-state architecture.
7. Target architecture.
8. Alternatives considered.
9. Key decisions.
10. Delivery approach.
11. Security and operational considerations.
12. Rollback or failure strategy.
13. Outcome.
14. Lessons learned.
15. Technology and capability tags.

### Initial case-study candidates

#### Case Study 1 — BFSI rapid digital-product delivery

Verified basis:

* Client environment had waterfall delivery, siloed teams, and manual processes.
* A three-layer or microservices-oriented architecture was introduced.
* Delivery workflow was redesigned.
* Product needed to launch at an event.
* Delivery period was four months.
* Team consisted of one technical lead and three developers.

Required clarification before publication:

* Exact problem being solved.
* Nature of the three layers.
* Hosting and integration topology.
* Security model.
* Release and rollback model.
* Delivery milestones.
* Outcome after launch.
* Which details may be disclosed.

#### Case Study 2 — Secure platform migration or upgrade

Potential scope:

* Infrastructure deployment.
* Platform upgrade.
* Cloud/on-premises migration.
* Downtime minimization.
* Rollback planning.
* Operational validation.

This cannot be published as a complete case study until a specific project and evidence are selected.

#### Case Study 3 — Observability and operational resilience

Potential scope:

* Monitoring strategy.
* Logging and analytics.
* Performance tuning.
* Incident-response improvement.
* Root-cause analysis.

Required evidence:

* Before and after state.
* Selected monitoring architecture.
* Measured operational improvement.
* Sanitized dashboard or topology.

#### Case Study 4 — Delivery-team enablement

Potential scope:

* Citizen-developer bootcamp.
* Architecture standards.
* Delivery governance.
* Code-review practices.
* Platform adoption.

Required evidence:

* Audience size.
* Curriculum or enablement model.
* Adoption outcome.
* Resulting delivery capability.

#### Case Study 5 — Agentic AI workflow prototype

Potential scope:

* Business workflow.
* Agent responsibilities.
* Tool or API integration.
* Human approval boundary.
* Security and reliability considerations.
* Prototype outcome.

This should be labelled “R&D” unless deployed and validated in production.

---

## 9.3 Architecture Principles

Create a page explaining how Hengki makes decisions.

Initial principles:

1. **Architecture must be deliverable.**
   A diagram that the available team cannot implement is not a viable architecture.

2. **Design rollback before migration.**
   Production change requires a tested recovery path.

3. **Use complexity only when it buys measurable value.**
   Microservices, event-driven systems, or additional infrastructure must address a demonstrated constraint.

4. **Operational readiness is part of architecture.**
   Monitoring, logging, alerting, incident response, and ownership must be included in the design.

5. **Standards should enable teams rather than block them.**
   Governance should reduce ambiguity and repeated decision-making.

6. **Modernization is usually evolutionary.**
   Existing systems and organizational constraints must be treated as architecture inputs.

7. **Evidence precedes optimization.**
   Performance and reliability claims require measurements.

These principles should eventually link to supporting case studies or articles.

---

## 9.4 Experience

Use a narrative timeline rather than copying the resume word for word.

Each role should contain:

* Organization.
* Role.
* Period.
* Industry exposure.
* Scope.
* Selected responsibilities.
* Selected outcomes.
* Relevant case studies.
* Capability tags.

The current position should emphasize progression across:

* Delivery.
* Architecture.
* Infrastructure.
* Consultancy.
* Pre-sales.
* Training.
* R&D.
* Technical leadership.

---

## 9.5 Insights and Blog

The blog must reinforce the Solution Architect position.

### Initial categories

* Architecture Decisions
* Enterprise Integration
* Platform Engineering
* Observability
* Delivery and Governance
* OutSystems
* AI and Automation
* Technical Leadership
* Case Study Notes

### Recommended initial articles

1. Why architecture must match team capability.
2. Designing rollback strategies for enterprise platform upgrades.
3. When microservices are justified—and when they are not.
4. Observability requirements that should exist before production launch.
5. Moving teams from waterfall dependencies toward incremental delivery.
6. How Solution Architects should communicate technical trade-offs.
7. Governance for citizen-developer and low-code delivery teams.
8. Human approval boundaries in agentic-AI workflows.

### Article capabilities

* Draft and published states.
* Author.
* Publish date.
* Update date.
* Summary.
* Cover image.
* Rich-text content.
* Headings.
* Code blocks.
* Diagrams.
* Internal and external links.
* Categories.
* Tags.
* SEO title.
* SEO description.
* Social sharing image.
* Canonical URL override.
* Related articles.
* Estimated reading time.
* RSS output.

---

## 9.6 About

The About page should connect professional and personal dimensions without weakening the primary position.

Recommended structure:

* Professional summary.
* Career progression.
* Architectural approach.
* Teaching and enablement work.
* Research and continuing education.
* Brief Leonore Kingdom introduction.
* Personal creative interests as supporting evidence of range, not the main proposition.

The published face-recognition research may be included under education and research.

---

## 9.7 Contact

MVP contact options:

* Professional email.
* LinkedIn.
* GitHub.
* Resume download.

A contact form may be added after the static site is stable. Implementing a form requires spam protection, validation, secret management, and message delivery, so it should not justify a custom Express server.

---

## 10. CMS Requirements

Sanity will manage all content that changes independently of the frontend.

### Content models

#### `siteSettings`

* Site title.
* Default SEO title.
* Default description.
* Domain.
* Default social image.
* Contact email.
* LinkedIn URL.
* GitHub URL.
* Resume file.
* Availability status.

#### `profile`

* Name.
* Professional title.
* Short positioning statement.
* Long biography.
* Location.
* Profile image.
* Capability summary.
* Creative or lab summary.

#### `impactMetric`

* Value.
* Label.
* Supporting description.
* Evidence note.
* Display order.
* Verified flag.

#### `caseStudy`

* Title.
* Slug.
* Summary.
* Industry.
* Client disclosure level.
* Project period.
* Role.
* Problem.
* Constraints.
* Responsibilities.
* Existing state.
* Target state.
* Decisions.
* Alternatives.
* Trade-offs.
* Architecture diagram.
* Delivery approach.
* Operational considerations.
* Security considerations.
* Results.
* Metrics.
* Lessons.
* Technologies.
* Capabilities.
* Featured flag.
* Publication status.
* SEO fields.

#### `experience`

* Organization.
* Role.
* Location.
* Start date.
* End date.
* Current-role flag.
* Summary.
* Responsibilities.
* Outcomes.
* Related case studies.
* Capability tags.

#### `architecturePrinciple`

* Number.
* Title.
* Description.
* Supporting example.
* Related case study.
* Display order.

#### `article`

* Title.
* Slug.
* Summary.
* Body.
* Author.
* Cover image.
* Category.
* Tags.
* Publish date.
* Update date.
* Featured flag.
* Related articles.
* SEO fields.

#### `credential`

* Name.
* Issuer.
* Issue date.
* Credential URL.
* Credential ID.
* Type.
* Display order.

#### `technology`

* Name.
* Category.
* Description.
* Official URL.
* Icon.
* Display flag.

Technology entries must be grouped by capability. They must not be represented as unsupported percentage scores.

### Editorial workflow

MVP:

1. Create or update content in Sanity Studio.
2. Save as draft.
3. Review using Studio preview or local preview.
4. Publish.
5. Sanity webhook calls Cloudflare Deploy Hook.
6. Cloudflare rebuilds the static website.
7. New content becomes publicly available.

Cloudflare Pages supports deploy hooks, Git-based builds, and preview deployments.

---

## 11. Technical Architecture

```text
┌─────────────────────────────┐
│        Content Editor       │
│       Sanity Studio         │
└──────────────┬──────────────┘
               │ publish
               ▼
┌─────────────────────────────┐
│     Sanity Content Lake     │
│ Structured content + media  │
└──────────────┬──────────────┘
               │ GROQ queries during build
               ▼
┌─────────────────────────────┐
│          Astro Site         │
│ Static pages + React islands│
└──────────────┬──────────────┘
               │ build output
               ▼
┌─────────────────────────────┐
│      Cloudflare Pages       │
│ CDN, custom domain, previews│
└─────────────────────────────┘

Sanity publish
      │
      └── Webhook → Cloudflare Deploy Hook → Rebuild
```

### Repository structure

```text
leonore-portfolio/
├── apps/
│   ├── web/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── layouts/
│   │   │   ├── pages/
│   │   │   ├── styles/
│   │   │   ├── lib/
│   │   │   └── types/
│   │   └── astro.config.mjs
│   └── studio/
│       ├── schemaTypes/
│       └── sanity.config.ts
├── package.json
├── README.md
└── .github/
    └── workflows/
        └── validate.yml
```

Use one repository and npm workspaces. Separate repositories are unnecessary for the MVP.

---

## 12. Stack Decision Analysis

### Recommended: Astro + Sanity + Cloudflare Pages

**Advantages**

* Designed for content-oriented sites.
* Static-first delivery.
* Minimal browser JavaScript.
* Strong SEO fundamentals.
* React remains available for isolated interactive elements.
* Managed CMS removes backend maintenance.
* CMS supports both portfolio and blog content.
* Cloudflare already aligns with the existing domain setup.
* Preview deployments and Git integration are available.
* No database or API server to patch and monitor.

Cloudflare Pages currently supports Astro deployments and its free-plan limits are substantially above the needs of a portfolio, including up to 500 builds per month and 20,000 files per static site.

### Rejected: Vanilla HTML, CSS, and JavaScript

Acceptable for a fully static portfolio, but insufficient for the requested CMS workflow unless additional CMS integration is added manually. As the number of case studies and blog articles grows, content rendering and reuse become harder to maintain.

### Rejected: React + Vite only

A React SPA is unnecessary for mostly static content. It would shift more rendering and JavaScript to the browser without providing meaningful product value.

Vite itself is not the problem. The issue is treating a content website as a client-side application.

### Rejected: React + Vite + Express

Express would add:

* Server hosting.
* Runtime monitoring.
* Security patching.
* API design.
* Deployment coordination.
* Error handling.
* Database or file persistence decisions.

None of these are justified by the current requirements.

### Rejected for MVP: Next.js

Next.js is viable, especially if future requirements include authentication, application dashboards, server actions, or heavily dynamic content. Those requirements do not currently exist.

Using it now would provide more framework and deployment surface than the portfolio needs.

### Deferred: Payload CMS or Directus

Both are credible choices when complete backend ownership, database control, advanced roles, or self-hosting are required. They introduce backend and database operations that conflict with the current “simple but maintainable” requirement.

---

## 13. React Usage Boundary

React may be used only for components requiring client-side state, such as:

* Theme selector.
* Filterable case-study list.
* Interactive architecture viewer.
* Copy-to-clipboard controls.
* Advanced search interface.

The following should remain Astro or server-rendered HTML:

* Navigation.
* Hero.
* Experience timeline.
* Case-study content.
* Blog content.
* Capability cards.
* Footer.
* Contact links.

This preserves maintainability and prevents the site from becoming an unnecessary single-page application.

---

## 14. SEO Requirements

Every indexable page must support:

* Unique page title.
* Unique meta description.
* Canonical URL.
* Open Graph metadata.
* Social image.
* Structured heading hierarchy.
* Descriptive image alt text.
* Sitemap.
* Robots file.
* RSS for articles.
* Semantic HTML.
* Stable human-readable URLs.

Astro provides official sitemap support and content collections for structured local or remote content.

Recommended structured data:

* `Person`
* `WebSite`
* `Article`
* `BreadcrumbList`
* `CreativeWork` or `TechArticle`
* `Organization` only where applicable

---

## 15. Performance and Accessibility

### Required quality targets

Desktop and mobile production builds should target:

* Lighthouse Performance: 90 or higher.
* Accessibility: 95 or higher.
* Best Practices: 95 or higher.
* SEO: 95 or higher.
* No horizontal overflow at supported widths.
* Keyboard-accessible navigation.
* Visible focus indicators.
* Reduced-motion support.
* Sufficient colour contrast.
* Responsive images.
* No blocking third-party animation libraries.
* No autoplaying audio or video.

Images must use Astro image handling or Sanity’s image pipeline rather than serving unnecessarily large originals. Astro supports both local and CMS-hosted images.

---

## 16. Analytics

Use Cloudflare Web Analytics for the MVP.

Track:

* Page views.
* Case-study views.
* Article views.
* Resume downloads.
* Contact CTA clicks.
* LinkedIn and GitHub outbound clicks.
* Most visited categories.
* Site performance indicators.

Cloudflare describes Web Analytics as free and privacy-focused and states that it does not collect or use visitors’ personal data.

Do not add Google Analytics unless its additional marketing capabilities are actually required.

---

## 17. Security and Privacy

### Public information rules

Do not publish:

* Full residential address.
* Personal phone number unless explicitly required.
* Confidential client names without authorization.
* Client architecture diagrams.
* Internal IP addresses.
* Credentials.
* Production endpoint names.
* Sensitive infrastructure topology.
* Unredacted monitoring screenshots.
* Unverified client results.

Recommended public contact details:

* Professional email.
* LinkedIn.
* GitHub.
* General city and country.

### CMS rules

* Keep Sanity write tokens out of frontend code.
* Public frontend queries must use read-only access.
* Environment variables must be stored in deployment settings.
* Restrict CMS membership.
* Validate uploaded file types.
* Sanitize externally embedded content.
* Review dependency updates before automatic merging.

---

## 18. Content Quality Rules

Each claim must be one of:

* Verified.
* Publicly demonstrable.
* Explicitly anonymized.
* Clearly described as an estimate.
* Clearly labelled as R&D or prototype work.

Prohibited patterns:

* Invented cost savings.
* Invented user counts.
* Invented performance improvements.
* Unverified availability percentages.
* Unsupported claims such as “enterprise-grade” or “highly scalable.”
* Skill percentages such as “JavaScript 90%.”
* Client logos without permission.

Where numbers cannot be disclosed, use evidence such as:

* Scale category.
* Architecture complexity.
* Number of integrated systems.
* Delivery constraints.
* Responsibilities.
* Decision scope.
* Operational controls.
* Sanitized diagrams.

---

## 19. MVP Scope

### Included

* Responsive homepage.
* CMS-managed profile and site settings.
* Case-study listing.
* Case-study detail pages.
* Experience timeline.
* Architecture-principles page.
* Blog listing.
* Blog detail pages.
* Categories and tags.
* About page.
* Contact page.
* Resume download.
* Sanity Studio.
* Sanity-to-Cloudflare publishing workflow.
* SEO metadata.
* Sitemap.
* RSS.
* Analytics.
* Error page.
* CI validation.
* Production deployment.

### Deferred to Phase 2

* Indonesian translation.
* Full-text search.
* Visual content preview.
* Interactive architecture diagrams.
* Newsletter subscription.
* Contact form.
* Speaking and training page.
* Testimonials.
* Dedicated creative-project subdomain.
* GitHub activity integration.
* Reading progress indicator.
* Related-content recommendation.
* Advanced analytics.
* Automated social-image generation.

---

## 20. Delivery Plan

### Cycle 0 — Content and evidence preparation

Deliverables:

* Final positioning statement.
* Public biography.
* Privacy-safe contact details.
* Case-study inventory.
* Disclosure classification.
* Metric evidence.
* Resume revision.
* Architecture diagram inventory.

Exit condition:

At least two case studies have enough defensible content to publish.

### Cycle 1 — Foundation

Deliverables:

* Astro project.
* Sanity Studio.
* Repository structure.
* TypeScript configuration.
* CSS tokens.
* Base layouts.
* Cloudflare preview deployment.
* CI workflow.

### Cycle 2 — Professional narrative

Deliverables:

* Homepage.
* About page.
* Experience page.
* Architecture-principles page.
* Navigation and footer.

### Cycle 3 — Case-study system

Deliverables:

* Case-study schema.
* Listing page.
* Detail template.
* Architecture-diagram component.
* Related-case-study component.
* Initial case studies.

### Cycle 4 — Insights and blog

Deliverables:

* Article schema.
* Blog listing.
* Article detail.
* Tags and categories.
* RSS.
* Related articles.
* Initial three articles or article drafts.

### Cycle 5 — Production readiness

Deliverables:

* SEO.
* Analytics.
* Accessibility review.
* Performance review.
* Responsive testing.
* Broken-link testing.
* Redirects from existing URLs.
* Domain deployment.
* Rollback procedure.

---

## 21. Acceptance Criteria

The MVP is complete when:

1. The hero clearly identifies Hengki as a Solution Architect.
2. Creative roles no longer compete with the professional positioning.
3. At least two complete case studies are available.
4. All public claims have been reviewed for accuracy and confidentiality.
5. Profile, case studies, experience, credentials, principles, and blog posts can be edited through Sanity.
6. Publishing CMS content triggers a production rebuild.
7. Blog posts support categories, tags, SEO metadata, and RSS.
8. The resume can be updated without modifying frontend components.
9. The site is usable on mobile, tablet, and desktop.
10. Keyboard navigation works throughout the site.
11. Critical pages meet the defined Lighthouse targets.
12. Existing useful URLs are redirected rather than silently removed.
13. No personal residential address is exposed.
14. No client-confidential information is exposed.
15. A failed deployment does not replace the current working production deployment.

---

## 22. Primary Risks

### Risk: The site still feels like a resume

**Mitigation:** Lead with case studies, decision reasoning, principles, and architecture evidence.

### Risk: Claims are too generic

**Mitigation:** Require problem, constraint, decision, outcome, and evidence fields in every case study.

### Risk: Confidentiality prevents useful case studies

**Mitigation:** Anonymize clients, simplify diagrams, describe decision patterns, and disclose scale without exposing sensitive identifiers.

### Risk: CMS integration adds unnecessary complexity

**Mitigation:** Use managed Sanity infrastructure and static builds rather than creating an Express API.

### Risk: The Leonore identity dilutes professional positioning

**Mitigation:** Make Hengki Pranoto — Solution Architect the primary identity. Position Leonore Kingdom as a secondary innovation and creative lab.

### Risk: Publishing becomes slow

**Mitigation:** Use a CMS publish webhook and Cloudflare Deploy Hook. Only consider live server rendering after build latency becomes a demonstrated problem.

### Risk: Too many technologies are introduced

**Mitigation:** Keep the production stack to Astro, Sanity, Cloudflare Pages, GitHub, TypeScript, and native CSS. React remains optional and isolated.

---

## 23. Final Product Proposition

The portfolio should not communicate:

> I can do many kinds of technical and creative work.

It should communicate:

> I can understand an enterprise problem, expose its constraints, design a pragmatic architecture, guide a team through delivery, and ensure the resulting system can be operated safely.

Creative breadth should remain visible, but only after the core architectural credibility has been established.
