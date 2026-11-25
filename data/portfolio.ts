export type IconKey =
  | "headset"
  | "shield-check"
  | "ticket"
  | "calendar-check"
  | "briefcase"
  | "code"
  | "bug"
  | "award"
  | "brain"
  | "sigma"
  | "globe"
  | "blocks"
  | "users"
  | "graduation"
  | "sparkles"
  | "check-circle"
  | "layers"
  | "megaphone"
  | "terminal"
  | "database";

export interface Micro1Skill {
  id: number;
  title: string;
  badge: "Certified by micro1";
  category: string;
  summary: string;
  icon: IconKey;
}

export interface ForageCertification {
  title: string;
  issuer: string;
  credentialType: string;
  summary: string;
  competencies: {
    name: string;
    detail: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  shortName: string;
  icon: IconKey;
  accent: "cyan" | "violet" | "emerald" | "indigo" | "amber";
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  category: string;
  summary: string;
  highlights: string[];
  link?: {
    label: string;
    href: string;
    external?: boolean;
  };
}

export interface ProjectItem {
  title: string;
  category: "Blockchain & Web3" | "NFT Development" | "Web Development" | "Community";
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  links?: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: "Completed" | "Currently Studying";
  focus: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  icon: IconKey;
  link?: {
    label: string;
    href: string;
  };
}

export const PROFILE = {
  name: "Md. Firoz Kabir",
  shortName: "Firoz Kabir",
  headline: "Mathematics • AI • Blockchain • Web Development • Digital Marketing",
  siteUrl: "https://mdfirozkabir.xyz",
  githubUrl: "https://github.com/nerdyfiroz",
  repoUrl: "https://github.com/nerdyfiroz/firoz-kabir",
  location: "Rajshahi, Bangladesh · Available for Global Remote Roles",
  roles: [
    "Mathematics Graduate and MSc Student",
    "AI Trainer / AI Evaluator",
    "Data Annotation Specialist",
    "Web Developer",
    "Blockchain & Web3 Enthusiast",
    "Digital Marketing Specialist",
    "Community Manager",
  ],
  heroSummary:
    "Mathematics graduate and M.Sc. candidate at the University of Rajshahi combining rigorous analytical thinking with AI model evaluation, high-precision data annotation, full-stack web engineering, Web3 community leadership, and digital growth.",
  aboutParagraphs: [
    "I am Md. Firoz Kabir, a Mathematics graduate and current M.Sc. student at the University of Rajshahi with an academic focus on Applied Mathematics and Machine Learning.",
    "My work sits at the intersection of mathematical reasoning, artificial intelligence training, software quality, and modern web ecosystems. I evaluate AI outputs, annotate and audit structured datasets against strict guidelines, test software systems, and build clean, responsive web and Web3 experiences.",
    "Beyond technical execution, I bring proven experience in Web3 community leadership, digital marketing, structured remote collaboration, and student welfare advocacy — enabling me to collaborate effectively with distributed international teams.",
  ],
};

export const OVERVIEW_PILLARS = [
  {
    title: "AI Evaluation & Data Quality",
    icon: "brain" as IconKey,
    accent: "cyan" as const,
    description:
      "Evaluating LLM reasoning, mathematical problem solving, intent and sentiment labeling, PII identification, and guideline-driven QA workflows (Keep / Fix / Flag).",
  },
  {
    title: "Applied Mathematics Foundation",
    icon: "sigma" as IconKey,
    accent: "violet" as const,
    description:
      "B.Sc. in Mathematics completed and M.Sc. in progress at the University of Rajshahi, focused on Applied Mathematics, Machine Learning foundations, Algebra, and Mathematical Analysis.",
  },
  {
    title: "Full-Stack Web & Web3",
    icon: "blocks" as IconKey,
    accent: "indigo" as const,
    description:
      "Developing responsive React, Next.js, Tailwind CSS, and Node.js applications alongside Solidity smart contracts, BNB Smart Chain integrations, IPFS workflows, and NFT collections.",
  },
  {
    title: "Community & Remote Operations",
    icon: "users" as IconKey,
    accent: "emerald" as const,
    description:
      "Community Manager at Stela Network, Office Secretary at GSWA, and micro1-certified in customer support, conflict de-escalation, ticket workflows, and remote work organization.",
  },
];

/**
 * Exactly SEVEN (7) Micro1 Certified Skills — do not omit or merge any.
 */
export const MICRO1_CERTIFIED_SKILLS: Micro1Skill[] = [
  {
    id: 1,
    title: "Customer Support & Issue Resolution",
    badge: "Certified by micro1",
    category: "Client Operations",
    summary:
      "Structured troubleshooting, empathetic user communication, root-cause diagnosis, and timely issue closure for global technical and non-technical users.",
    icon: "headset",
  },
  {
    id: 2,
    title: "Conflict Management & De-escalation",
    badge: "Certified by micro1",
    category: "Communication",
    summary:
      "Calm, constructive conflict resolution, expectation alignment, and professional de-escalation across high-stakes support and community environments.",
    icon: "shield-check",
  },
  {
    id: 3,
    title: "Ticket Management",
    badge: "Certified by micro1",
    category: "Workflow & Operations",
    summary:
      "Priority-based triage, clean documentation, SLA-conscious queue tracking, and disciplined escalation across collaborative support systems.",
    icon: "ticket",
  },
  {
    id: 4,
    title: "Remote Work Organization",
    badge: "Certified by micro1",
    category: "Distributed Delivery",
    summary:
      "Autonomous time management, clear asynchronous communication, milestone accountability, and dependable delivery across international time zones.",
    icon: "calendar-check",
  },
  {
    id: 5,
    title: "Candidate's Experience",
    badge: "Certified by micro1",
    category: "Verified Profile",
    summary:
      "Evaluated practical background and applied execution across technical workflows, collaborative project delivery, and real-world problem solving.",
    icon: "briefcase",
  },
  {
    id: 6,
    title: "Proficiency of the Applicant's Strongest Coding Language",
    badge: "Certified by micro1",
    category: "Software Engineering",
    summary:
      "Verified coding fluency, algorithmic logic, clean problem decomposition, and practical implementation quality in core programming workflows.",
    icon: "code",
  },
  {
    id: 7,
    title: "Software Testing",
    badge: "Certified by micro1",
    category: "Quality Assurance",
    summary:
      "Systematic functional testing, edge-case discovery, regression verification, defect reporting, and quality assurance for reliable software releases.",
    icon: "bug",
  },
];

/**
 * Separate Professional Certification — Forage Academy (distinct from Micro1).
 */
export const FORAGE_CERTIFICATION: ForageCertification = {
  title: "Data Labeling Job Simulation",
  issuer: "Forage Academy",
  credentialType: "Professional Job Simulation Certification",
  summary:
    "Completed practical industry-style data labeling and quality assurance workflows focused on high-accuracy annotation for AI training datasets, privacy protection, and rubric adherence.",
  competencies: [
    {
      name: "Intent and Sentiment Classification",
      detail:
        "Categorizing user utterances accurately by underlying intent and emotional polarity under structured annotation taxonomies.",
    },
    {
      name: "PII Identification",
      detail:
        "Detecting and flagging Personally Identifiable Information reliably to safeguard privacy and dataset compliance.",
    },
    {
      name: "Annotation Quality Review (Keep / Fix / Flag)",
      detail:
        "Auditing labeled examples using structured Keep, Fix, and Flag review decisions to maintain high dataset fidelity.",
    },
    {
      name: "Guideline-based Quality Checks",
      detail:
        "Enforcing multi-rule annotation guidelines consistently, resolving edge cases, and maintaining inter-annotator alignment.",
    },
    {
      name: "Data Labeling and Annotation",
      detail:
        "Producing clean, structured training and evaluation datasets suited for supervised machine learning and NLP systems.",
    },
  ],
};

/**
 * Comprehensive Core Professional Skills (distinct from independently verified certifications).
 */
export const CORE_SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-data",
    name: "Artificial Intelligence & Data",
    shortName: "AI & Data",
    icon: "brain",
    accent: "cyan",
    description:
      "Model evaluation, mathematical reasoning verification, NLP data labeling, PII safety review, and software quality assurance.",
    skills: [
      "AI Training",
      "AI Model Evaluation",
      "Mathematics AI Evaluation",
      "Data Annotation",
      "Data Labeling",
      "Intent Classification",
      "Sentiment Analysis",
      "PII Identification",
      "Software Testing",
      "Quality Assurance",
    ],
  },
  {
    id: "mathematics",
    name: "Mathematics",
    shortName: "Mathematics",
    icon: "sigma",
    accent: "violet",
    description:
      "Rigorous graduate-level analytical foundation powering mathematical AI evaluation and machine learning reasoning.",
    skills: [
      "Applied Mathematics",
      "Machine Learning Mathematics",
      "Mathematical Problem Solving",
      "Mathematical Reasoning",
      "Algebra",
      "Abstract Algebra",
      "Mathematical Analysis",
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    shortName: "Web Dev",
    icon: "globe",
    accent: "indigo",
    description:
      "Building responsive, accessible, modern web interfaces and full-stack integrations with clean version control.",
    skills: [
      "HTML, CSS, JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Full-Stack Development",
      "Git & GitHub",
      "API Integration",
      "Database Integration",
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    shortName: "Blockchain & Web3",
    icon: "blocks",
    accent: "amber",
    description:
      "Smart contract development, NFT architectures, decentralized storage, and BNB Smart Chain application ecosystems.",
    skills: [
      "Blockchain Technology",
      "Smart Contracts",
      "Solidity",
      "NFT Development",
      "Web3 Integration",
      "BNB Smart Chain",
      "IPFS",
      "Decentralized Applications",
    ],
  },
  {
    id: "professional",
    name: "Professional & Communication",
    shortName: "Professional",
    icon: "users",
    accent: "emerald",
    description:
      "Client-focused communication, conflict resolution, community building, digital marketing, and remote execution.",
    skills: [
      "Customer Support",
      "Conflict Resolution",
      "Remote Collaboration",
      "Ticket Management",
      "Community Management",
      "Digital Marketing",
      "Social Media Management",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Community Manager",
    organization: "Stela Network",
    category: "Web3 Community Leadership",
    summary:
      "Leading community engagement, member onboarding, moderation workflows, and ecosystem communication for Stela Network.",
    highlights: [
      "Managing Web3 community channels, announcements, and constructive member interactions.",
      "Coordinating feedback loops between community members and core project initiatives.",
      "Applying conflict de-escalation and structured support workflows to maintain a healthy community.",
    ],
  },
  {
    role: "AI Training & Data Annotation Specialist",
    organization: "AI Evaluation & Data Quality Initiatives",
    category: "Artificial Intelligence & Data",
    summary:
      "Applying mathematical rigor and guideline-driven QA practices to AI model evaluation, data labeling, and dataset review.",
    highlights: [
      "Evaluating AI responses for mathematical accuracy, logical validity, and clarity.",
      "Executing intent and sentiment classification, PII identification, and Keep / Fix / Flag quality reviews.",
      "Documenting edge cases and maintaining consistency against detailed annotation rubrics.",
    ],
  },
  {
    role: "Blockchain & NFT Project Developer",
    organization: "Independent Web3 Initiatives",
    category: "Blockchain & Web3",
    summary:
      "Designing and building NFT collections, smart contracts, token architectures, and Web3 user experiences.",
    highlights: [
      "Worked across NFT collection concepts, smart contract development in Solidity, and IPFS metadata workflows.",
      "Explored BNB Smart Chain deployment workflows, decentralized app testing, and Web3 wallet integrations.",
      "Contributed to projects including Agent Legends, Portion Punks, MAGES Token, and Bunny Legends.",
    ],
  },
  {
    role: "Web Developer",
    organization: "Personal Portfolio & Web Projects",
    category: "Full-Stack Web Engineering",
    summary:
      "Building responsive, fast, and maintainable web applications using React.js, Next.js, Tailwind CSS, and Node.js.",
    highlights: [
      "Engineered and deployed a modern static-exported Next.js portfolio with blog and organization showcases.",
      "Focused on clean component architecture, SEO metadata, accessibility, and mobile responsiveness.",
      "Integrated APIs, structured content workflows, and Git/GitHub version control.",
    ],
    link: {
      label: "Explore GitHub",
      href: "https://github.com/nerdyfiroz",
      external: true,
    },
  },
  {
    role: "Digital Marketing & Social Media Specialist",
    organization: "Digital Growth & Web3 Campaigns",
    category: "Digital Marketing",
    summary:
      "Planning social media growth, content positioning, and audience engagement strategies across digital and Web3 platforms.",
    highlights: [
      "Supporting brand visibility, community campaigns, and consistent messaging across social channels.",
      "Combining analytical observation with audience-focused communication to foster organic engagement.",
    ],
  },
  {
    role: "Office Secretary",
    organization: "Gangachara Students Welfare Association (GSWA)",
    category: "Community & Student Leadership",
    summary:
      "Supporting organizational coordination, event operations, and student welfare initiatives for Gangachara students.",
    highlights: [
      "Coordinating events such as the Honours Celebration & Eid Reunion 2025 and organizational ceremonies.",
      "Maintaining community communications and representing student welfare programs online.",
    ],
    link: {
      label: "View GSWA Page",
      href: "/gswa",
      external: false,
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Agent Legends",
    category: "Blockchain & Web3",
    tagline: "Web3 & NFT Ecosystem Project",
    description:
      "A Web3 digital collectible and community-oriented concept combining themed character storytelling, blockchain integration, and community engagement workflows.",
    stack: ["Blockchain", "Web3", "NFT Development", "Community Strategy"],
    role: "Project & Web3 Development",
  },
  {
    title: "Portion Punks",
    category: "NFT Development",
    tagline: "NFT Collection Development",
    description:
      "NFT collection initiative centered on pixel-art identity, structured trait design, smart contract mechanics, IPFS metadata organization, and Web3 community positioning.",
    stack: ["Solidity", "NFT Development", "BNB Smart Chain", "IPFS", "Web3 Integration"],
    role: "NFT & Smart Contract Development",
  },
  {
    title: "MAGES Token",
    category: "Blockchain & Web3",
    tagline: "Blockchain Token & Smart Contract Project",
    description:
      "Blockchain token project focused on smart contract implementation, token architecture exploration, decentralized ecosystem utility, and Web3 testing.",
    stack: ["Solidity", "Smart Contracts", "BNB Smart Chain", "Blockchain Technology"],
    role: "Blockchain Project Development",
  },
  {
    title: "Bunny Legends",
    category: "NFT Development",
    tagline: "Collectible NFT & Community Concept",
    description:
      "Creative NFT collection and Web3 community project uniting digital art direction, decentralized asset concepts, and social media community building.",
    stack: ["NFT Development", "Web3", "Community Management", "Digital Marketing"],
    role: "NFT & Community Development",
  },
  {
    title: "Personal Portfolio & Web Development Projects",
    category: "Web Development",
    tagline: "Modern Next.js Portfolio, Blog & Web Engineering",
    description:
      "Production Next.js, TypeScript, and Tailwind CSS personal portfolio featuring interactive data visualizations, certifications showcase, technical blog, and static deployment architecture.",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
    role: "Full-Stack Web Developer",
    links: [
      { label: "GitHub Repo", href: "https://github.com/nerdyfiroz/firoz-kabir", external: true },
    ],
  },
  {
    title: "GSWA Community Showcase",
    category: "Community",
    tagline: "Student Welfare Organization Web Presence",
    description:
      "Dedicated web portal highlighting the mission, events, foundation milestones, and photo gallery of the Gangachara Students Welfare Association (GSWA).",
    stack: ["Next.js", "Responsive UI", "Community Management", "Content Architecture"],
    role: "Office Secretary & Web Developer",
    links: [{ label: "Visit GSWA Page", href: "/gswa", external: false }],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "M.Sc. in Mathematics",
    institution: "University of Rajshahi",
    status: "Currently Studying",
    focus: "Applied Mathematics and Machine Learning",
    description:
      "Pursuing postgraduate studies in Mathematics with research and coursework centered on Applied Mathematics, Mathematical Modeling, and the mathematical foundations of Machine Learning.",
  },
  {
    degree: "B.Sc. in Mathematics",
    institution: "University of Rajshahi",
    status: "Completed",
    focus: "Core & Applied Mathematics",
    description:
      "Completed undergraduate degree in Mathematics covering Algebra, Abstract Algebra, Mathematical Analysis, Calculus, Linear Algebra, and analytical problem solving.",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "7 Micro1 Certified Skills",
    category: "Verified Credentials",
    description:
      "Independently certified by micro1 across seven competencies spanning coding proficiency, software testing, candidate experience, remote work organization, ticket management, conflict de-escalation, and customer support.",
    icon: "award",
    link: { label: "View All 7 Skills", href: "/#micro1-skills" },
  },
  {
    title: "Forage Academy Data Labeling Certification",
    category: "AI & Data QA",
    description:
      "Successfully completed the Forage Academy Data Labeling Job Simulation covering intent and sentiment classification, PII identification, and Keep / Fix / Flag quality reviews.",
    icon: "check-circle",
    link: { label: "View Certification", href: "/#certifications" },
  },
  {
    title: "B.Sc. Completed & M.Sc. Progression in Mathematics",
    category: "Academic Milestone",
    description:
      "Completed B.Sc. in Mathematics at the University of Rajshahi, participated in Rajshahi University's 12th Convocation, and advancing in M.Sc. studies focused on Applied Mathematics and Machine Learning.",
    icon: "graduation",
    link: { label: "Read Convocation Story", href: "/blog/ru-convocation" },
  },
  {
    title: "Web3 Community Leadership & Student Welfare Service",
    category: "Leadership & Impact",
    description:
      "Serving as Community Manager for Stela Network and Office Secretary for the Gangachara Students Welfare Association (GSWA), coordinating communities and high-impact events.",
    icon: "users",
    link: { label: "Explore GSWA", href: "/gswa" },
  },
];

export const BLOG_POSTS = [
  {
    slug: "first-post",
    title: "How I Started My Journey in Web Development",
    snippet:
      "A personal story about learning web development, overcoming early challenges, and building projects step by step with modern tools.",
    date: "15 December 2025",
    tag: "Web Development",
  },
  {
    slug: "ru-convocation",
    title: "Rajshahi University’s 12th Convocation",
    snippet:
      "Highlights and reflections from Rajshahi University’s 12th Convocation — celebrating academic perseverance, knowledge, and new beginnings.",
    date: "18 December 2025",
    tag: "Academic Milestone",
  },
];
