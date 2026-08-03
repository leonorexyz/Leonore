import type { PortfolioContent } from '../types/content';

export const seedContent: PortfolioContent = {
  settings: {
    title: 'Hengki Pranoto - Solution Architect',
    description: 'Pragmatic enterprise architecture for systems teams can deliver, operate, and evolve.',
    domain: 'https://leonorekingdom.xyz',
    githubUrl: 'https://github.com/leonorexyz',
    resumeUrl: '/resume/hengki-pranoto-resume.pdf',
    availability: 'Available for remote and international collaboration'
  },
  profile: {
    name: 'Hengki Pranoto',
    title: 'Solution Architect',
    statement: 'I design pragmatic enterprise systems that balance delivery speed, operational resilience, security, and long-term maintainability.',
    biography: [
      'I work where business constraints, delivery reality, and technical architecture meet. My role is to turn ambiguity into decisions that a team can implement and an organization can operate safely.',
      'Across more than seven years of enterprise delivery, I have worked with BFSI, manufacturing, and oil and gas environments. My experience spans delivery leadership, architecture, infrastructure, consultancy, pre-sales, training, and research and development.',
      'I also founded Leonore Kingdom, a personal lab for software, automation, AI, design, and creative experiments. The lab supports my professional practice; it does not replace the evidence-led focus of this portfolio.'
    ],
    location: 'Tangerang, Indonesia',
    capabilitySummary: 'Solution architecture, delivery governance, platform operations, observability, technical enablement, and bounded AI automation.',
    labSummary: 'A personal innovation studio for software, automation, AI, design, and carefully scoped experiments.'
  },
  metrics: [
    { value: '7+', label: 'Years', description: 'Solution architecture and enterprise delivery experience.', evidenceNote: 'Career history; exact employer chronology remains private in this public seed.', order: 1, verified: true },
    { value: '4 months', label: 'Delivery window', description: 'For the highlighted BFSI digital-product delivery.', evidenceNote: 'Documented project delivery window.', order: 2, verified: true },
    { value: '1 + 3', label: 'Lean team', description: 'One technical lead and three developers.', evidenceNote: 'Documented delivery-team composition.', order: 3, verified: true },
    { value: '3', label: 'Industry groups', description: 'BFSI, manufacturing, and oil and gas.', evidenceNote: 'Documented industry exposure.', order: 4, verified: true }
  ],
  caseStudies: [
    {
      title: 'BFSI digital product delivered against a fixed launch window',
      slug: 'bfsi-rapid-digital-product-delivery',
      summary: 'Restructuring architecture and delivery practices enabled a lean team to meet a four-month event deadline in a waterfall and siloed environment.',
      industry: 'BFSI',
      disclosure: 'Anonymized public summary',
      period: 'Four-month delivery window',
      role: 'Technical lead and architecture delivery',
      problem: 'A financial-services product had to be ready for a fixed event while the client environment relied on waterfall delivery, siloed teams, and manual processes.',
      constraints: [
        'A non-negotiable four-month launch window.',
        'A lean delivery team of one technical lead and three developers.',
        'Existing organizational silos and manual handoffs.',
        'Client identity and production topology cannot be disclosed.'
      ],
      responsibilities: [
        'Translate the launch goal into an implementable architecture and delivery sequence.',
        'Restructure responsibilities and technical boundaries so the team could work incrementally.',
        'Keep architecture decisions aligned with the actual team size and deadline.'
      ],
      existingState: 'Work moved through siloed, waterfall-oriented handoffs. Manual process dependencies increased delivery risk and reduced feedback speed.',
      targetState: 'A layered, service-oriented target separated concerns and enabled smaller delivery increments. Exact components, integrations, and hosting details remain confidential pending disclosure approval.',
      alternatives: [
        'Preserve the existing delivery model and compress testing near launch - rejected because it concentrated risk at the deadline.',
        'Introduce a broader platform rewrite - rejected because the team and timeline could not safely absorb that scope.'
      ],
      decisions: [
        'Optimize the architecture for a team of four rather than for hypothetical future scale.',
        'Create clearer technical boundaries and reduce cross-team handoffs.',
        'Sequence delivery around demonstrable increments tied to the launch date.'
      ],
      tradeoffs: [
        'Some long-term platform improvements were deferred to protect the launch-critical path.',
        'The public case study omits security and integration specifics until disclosure is approved.'
      ],
      delivery: [
        'Break the fixed window into short validation checkpoints.',
        'Keep architecture decisions close to implementation and review them against delivery evidence.',
        'Prioritize launch-critical capability before optional breadth.'
      ],
      operations: [
        'Operational readiness was treated as part of delivery, but detailed monitoring controls are intentionally not disclosed.',
        'The public narrative avoids unsupported availability or performance claims.'
      ],
      security: [
        'Client security architecture is withheld.',
        'No client names, internal endpoints, credentials, or topology are included.'
      ],
      failureStrategy: [
        'Limit release scope to verified launch-critical capability.',
        'Keep a recovery path for each production change; exact procedures remain confidential.'
      ],
      outcome: 'The product was delivered within four months by one technical lead and three developers. No additional business, scale, or performance metrics are claimed without evidence.',
      metrics: [
        { value: '4 months', label: 'Delivery', description: 'Fixed delivery window met.', evidenceNote: 'Documented project timeline.', order: 1, verified: true },
        { value: '4 people', label: 'Core team', description: 'One technical lead and three developers.', evidenceNote: 'Documented team composition.', order: 2, verified: true }
      ],
      lessons: [
        'Architecture has to match the team that will build it.',
        'Reducing handoffs can be more valuable than adding technology.',
        'A fixed deadline makes explicit deferral and recovery planning essential.'
      ],
      technologies: ['Layered architecture', 'Service-oriented integration', 'Incremental delivery'],
      capabilities: ['Solution architecture', 'Delivery governance', 'Technical leadership'],
      featured: true,
      status: 'Published',
      seoTitle: 'BFSI rapid digital-product delivery case study',
      seoDescription: 'How architecture and delivery were restructured for a four-month BFSI product launch with a lean team.'
    },
    {
      title: 'Human-approved community automation architecture',
      slug: 'human-approved-community-automation',
      summary: 'An R&D architecture for a bilingual community companion that keeps authorization, moderation, and audit events deterministic.',
      industry: 'AI and community systems',
      disclosure: 'R&D - concept and implementation boundary',
      period: 'Ongoing research and development',
      role: 'Product and solution architecture',
      problem: 'Community automation can become unsafe or opaque when conversational AI is allowed to make permission, identity, or moderation decisions.',
      constraints: [
        'Narrative relationships must never grant platform authority.',
        'AI must not autonomously punish members.',
        'The first release must stay small, auditable, bilingual, and reversible.',
        'Discord permissions and data access must follow least privilege.'
      ],
      responsibilities: [
        'Define the product boundary and staged delivery roadmap.',
        'Separate deterministic authorization from bounded AI orchestration.',
        'Choose transport paths based on actual event and interaction requirements.'
      ],
      existingState: 'A broad companion vision combined commands, recommendations, relationships, safety, events, research, and conversational AI in one roadmap.',
      targetState: 'A command-first foundation exposes approved information through deterministic handlers. Later AI capabilities use a bounded orchestrator with strict tools and human approval for consequential actions.',
      alternatives: [
        'Launch recommendations, relationship systems, and conversational AI together - rejected as too broad for a safe MVP.',
        'Use a passive event connection for every feature - rejected because explicit commands can use HTTP interactions with less privilege.'
      ],
      decisions: [
        'Start with five information commands and approved bilingual content.',
        'Use HTTP interactions for explicit commands; add passive event connectivity only when a later feature requires it.',
        'Keep authorization, validation, moderation, state changes, and audit events deterministic.'
      ],
      tradeoffs: [
        'The narrow first release demonstrates reliability before personalization depth.',
        'Human approval adds friction to consequential actions in exchange for safety and accountability.'
      ],
      delivery: [
        'Release information commands first.',
        'Add one community workflow only after health checks, logging, and rollback are proven.',
        'Introduce opt-in AI features behind explicit tools and data controls.'
      ],
      operations: [
        'Health checks, structured logs, auditability, least privilege, and rollback are release requirements.',
        'Rate-limit responses are honored rather than retried blindly.'
      ],
      security: [
        'Credentials remain outside source control.',
        'Permissions are independent from personal or narrative relationships.',
        'Member data is opt-in and erasable.'
      ],
      failureStrategy: [
        'Disable bounded features without taking down deterministic information commands.',
        'Keep moderation and permission changes behind human authorization.',
        'Roll back to the last known command set when a release fails.'
      ],
      outcome: 'The architecture and MVP boundary are defined and validated as R&D. No production adoption, safety, or performance outcome is claimed.',
      metrics: [],
      lessons: [
        'Product scope is a safety control.',
        'Deterministic boundaries make AI behavior easier to reason about and audit.',
        'Transport choices should follow event requirements, not framework preference.'
      ],
      technologies: ['HTTP interactions', 'Deterministic policy layer', 'Bounded AI tools'],
      capabilities: ['AI architecture', 'Security boundaries', 'Product scope'],
      featured: true,
      status: 'R&D',
      seoTitle: 'Human-approved AI automation architecture case study',
      seoDescription: 'An R&D case study on deterministic authorization, bounded AI tools, and human approval in community automation.'
    }
  ],
  experience: [
    {
      organization: 'Enterprise client environments (anonymized)',
      role: 'Solution architecture and technical delivery',
      period: '7+ years',
      industries: ['BFSI', 'Manufacturing', 'Oil and gas'],
      scope: 'Progression across application delivery, architecture, infrastructure, consultancy, pre-sales, training, R&D, and technical leadership.',
      responsibilities: [
        'Translate business requirements and constraints into deliverable system designs.',
        'Guide teams through architecture decisions, implementation boundaries, and production readiness.',
        'Support platform adoption through standards, review, technical enablement, and pragmatic governance.'
      ],
      outcomes: [
        'Delivered a highlighted BFSI product in four months with one technical lead and three developers.',
        'Additional employer and client outcomes remain unpublished until their evidence and disclosure status are reviewed.'
      ],
      capabilities: ['Architecture', 'Delivery leadership', 'Platform operations', 'Training', 'Pre-sales']
    }
  ],
  principles: [
    { number: '01', title: 'Architecture must be deliverable', description: 'A diagram that the available team cannot implement is not a viable architecture.', example: 'Size boundaries, operations, and sequencing to the real team and deadline.' },
    { number: '02', title: 'Design rollback before migration', description: 'Production change requires a tested recovery path.', example: 'Define stop conditions, recovery ownership, and data handling before cutover.' },
    { number: '03', title: 'Complexity must buy measurable value', description: 'Additional infrastructure must address a demonstrated constraint.', example: 'Prefer simpler boundaries until scale, isolation, or ownership evidence justifies more.' },
    { number: '04', title: 'Operational readiness is architecture', description: 'Monitoring, logging, alerting, incident response, and ownership belong in the design.', example: 'A production diagram is incomplete when it ends before observability and recovery.' },
    { number: '05', title: 'Standards should enable teams', description: 'Governance should reduce ambiguity and repeated decision-making.', example: 'Use paved paths and review criteria rather than one-size-fits-all approval gates.' },
    { number: '06', title: 'Modernization is evolutionary', description: 'Existing systems and organizational constraints are architecture inputs.', example: 'Create safe seams for change instead of assuming a full rewrite is available.' },
    { number: '07', title: 'Evidence precedes optimization', description: 'Performance and reliability claims require measurements.', example: 'Establish baselines and failure signals before tuning or scaling.' }
  ],
  articles: [
    {
      title: 'Why architecture must match team capability',
      slug: 'architecture-must-match-team-capability',
      summary: 'A technically elegant target is still wrong when the delivery team cannot build, operate, or recover it.',
      category: 'Architecture Decisions',
      tags: ['Architecture', 'Delivery', 'Technical Leadership'],
      publishedAt: '2026-08-03',
      readingMinutes: 5,
      featured: true,
      body: [
        { heading: 'Architecture is a delivery contract', paragraphs: ['Architecture is not only a description of components. It is a contract between a problem, a team, a delivery window, and an operating model. When any one of those is ignored, the diagram stops being useful.', 'A small team can build durable systems, but it cannot absorb unlimited service boundaries, deployment pipelines, ownership surfaces, and incident paths at once. Complexity is paid for repeatedly: during delivery, release, observation, recovery, and onboarding.'] },
        { heading: 'Start from constraints', paragraphs: ['Before selecting a pattern, establish the number and experience of contributors, the release deadline, integration ownership, security requirements, and who will operate the result. These are design inputs, not project-management details.'], bullets: ['Prefer explicit module boundaries before distributed boundaries.', 'Automate the release path the team actually uses.', 'Name the operator and recovery path for every production component.', 'Defer optional platform work without hiding the trade-off.'] },
        { heading: 'A practical test', paragraphs: ['Ask the team to explain how a change moves from requirement to production and how it is reversed. If the answer depends on specialists who are not available, undocumented manual steps, or infrastructure nobody owns, the architecture is not ready.'] }
      ],
      seoTitle: 'Why architecture must match team capability',
      seoDescription: 'A practical approach to sizing system architecture to the team that must deliver and operate it.'
    },
    {
      title: 'Design rollback before migration',
      slug: 'design-rollback-before-migration',
      summary: 'Rollback is a design input: data compatibility, stop conditions, ownership, and rehearsal must exist before cutover.',
      category: 'Platform Engineering',
      tags: ['Migration', 'Reliability', 'Operations'],
      publishedAt: '2026-08-02',
      readingMinutes: 6,
      featured: true,
      body: [
        { heading: 'Recovery changes the design', paragraphs: ['A rollback plan written after implementation usually discovers that data has changed shape, old and new versions cannot coexist, or the original path is no longer available. Designing recovery first exposes those constraints while choices are still reversible.'] },
        { heading: 'Define the failure envelope', paragraphs: ['Document what can fail, how it will be detected, and the latest safe decision point. A rollback is not one command; it is a coordinated procedure across application state, data, infrastructure, integrations, and communication.'], bullets: ['Set measurable go and no-go conditions.', 'Choose forward-fix versus rollback for each failure class.', 'Verify data compatibility in both directions.', 'Assign the decision maker and the operators.', 'Rehearse with production-like data and timings.'] },
        { heading: 'Prefer reversible increments', paragraphs: ['Feature flags, additive schemas, parallel reads, staged traffic, and bounded releases reduce the size of each recovery decision. The exact technique matters less than preserving a known safe state.'] }
      ],
      seoTitle: 'Design rollback before enterprise migration',
      seoDescription: 'How to make recovery strategy a first-class input to platform migration and production cutover.'
    },
    {
      title: 'Human approval boundaries in agentic workflows',
      slug: 'human-approval-boundaries-agentic-workflows',
      summary: 'Keep identity, authorization, money, moderation, and irreversible state changes deterministic and reviewable.',
      category: 'AI and Automation',
      tags: ['AI', 'Safety', 'Governance'],
      publishedAt: '2026-08-01',
      readingMinutes: 5,
      featured: true,
      body: [
        { heading: 'Fluency is not authority', paragraphs: ['An agent may explain a policy well without being qualified to decide permissions or consequences. Natural-language capability should never be confused with platform authority.', 'The safest boundary is structural: the model can propose or prepare an action, while deterministic code validates identity, scope, preconditions, and approval.'] },
        { heading: 'Classify tools by consequence', paragraphs: ['Read-only discovery, reversible drafts, external messages, permission changes, moderation, financial actions, and deletion should not share the same approval path. Tool design should make consequence visible.'], bullets: ['Default to read-only tools.', 'Require explicit approval near consequential execution.', 'Use idempotency and audit records for state changes.', 'Limit credentials to the smallest available scope.', 'Make opt-out and deletion paths part of the product.'] },
        { heading: 'Design the refusal path', paragraphs: ['A useful agent must know when it cannot proceed. Missing evidence, ambiguous identity, stale state, and conflicting instructions should produce a clear handoff, not a guess.'] }
      ],
      seoTitle: 'Human approval boundaries in agentic AI workflows',
      seoDescription: 'A practical architecture boundary for safe, auditable AI tools and consequential actions.'
    }
  ],
  credentials: []
};
