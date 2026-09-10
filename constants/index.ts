export type ProjectSlug =
  | "voice-learn"
  | "cortex"
  | "frameground"
  | "aero"
  | "voto"
  | "saturn";

export interface Project {
  name: string;
  slug: ProjectSlug;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
    source?: string;
  };
  urls: {
    githubUrl?: string;
    liveUrl?: string;
    [key: string]: string | undefined;
  };
  tags: string[];
}

export const Projects = [
  {
    name: "Saturn",
    slug: "saturn",
    image: {
      url: "https://saturn.procrastinator.fyi/api/og?page=Saturn",
      width: 1200,
      height: 630,
      alt: "Saturn",
    },
    urls: {
      liveUrl: "https://saturn.procrastinator.fyi",
      githubUrl: "https://github.com/phantomknight287/saturn",
    },
    tags: [
      "Next.js",
      "Typescript",
      "Drizzle",
      "PostgreSQL",
      "Better Auth",
      "Polar",
      "Tailwind CSS",
    ],
  },
  {
    name: "Cortex Chat",
    slug: "cortex",
    image: {
      url: "https://cortex.procrastinator.fyi/logo.png",
      alt: "Cortex Chat",
      height: 100,
      width: 100,
    },
    tags: [
      "Flutter",
      "OpenRouter",
      "Hono",
      "Postgres",
      "Better Auth",
      "Prisma",
    ],
    urls: { liveUrl: "https://cortex.procrastinator.fyi" },
  },
  {
    name: "Voice Learn",
    slug: "voice-learn",
    image: {
      url: "https://voicelearn.procrastinator.fyi/logo.png",
      alt: "Voice Learn",
      height: 381,
      width: 495,
    },
    tags: [
      "Flutter",
      "Nest.js",
      "Postgres",
      "Prisma",
      "Socket.io",
      "LLM",
      "Gemini",
      "OpenAI",
      "XILabs",
      "Next.js",
    ],
    urls: {
      liveUrl: "https://voicelearn.procrastinator.fyi",
    },
  },
  {
    name: "FrameGround",
    slug: "frameground",
    image: {
      url: "/frameground.png",
      width: 1418,
      height: 414,
      alt: "Frameground",
    },
    urls: {
      githubUrl: "https://github.com/phantomknight287/frameground",
      liveUrl: "https://frameground-web.vercel.app",
    },
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  },
  {
    name: "Aero",
    slug: "aero",
    image: {
      url: "https://raw.githubusercontent.com/PhantomKnight287/aero/refs/heads/main/landing/public/features/og.png",
      width: 1274,
      height: 956,
      alt: "Aero",
    },
    urls: {
      liveUrl: "https://aero.procrastinator.fyi",
      githubUrl: "https://github.com/phantomknight287/aero",
    },
    tags: ["Flutter", "Nest.js", "Redis", "PostgreSQL", "Prisma"],
  },
  {
    name: "Voto",
    slug: "voto",
    urls: {
      liveUrl: "https://voto.com.ng",
    },
    image: {
      url: "/voto.png",
      width: 417,
      height: 234,
      alt: "Voto",
    },
    tags: [
      "Next.js",
      "Express",
      "Typescript",
      "Cloudinary",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Tailwind CSS",
      "Mantine",
      "Chart.js",
    ],
  },

] as Project[];

export interface Experience {
  role: string;
  company: string;
  url?: string;
  /** "2024-01" or "2024-01-15" */
  start: string;
  /** omit for current role */
  end?: string;
  /** one bullet per line, shown when the entry is expanded */
  points: string[];
  tags: string[];
}

export const Experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Ideanomic",
    url: "https://ideanomic.com",
    start: "2023-10",
    points: [
      "Own projects end to end across several client engagements at a time, from API design through the frontend to deployment.",
      "Built a job platform on Next.js, Nest.js, Prisma and PostgreSQL with separate employer and candidate journeys, supporting full-time, milestone-based and hourly hiring.",
      "Automated onboarding and payroll syncing through a Dayforce and Famly integration, taking a sync that ran for 13 hours down to roughly 1.",
      "Designed an IFS Cloud ERP integration around a declarative endpoint config, so new sync endpoints are added without writing code.",
      "Replaced a manual audit with a reconciliation tool that diffs records across two IFS versions and repairs the mismatches it finds.",
    ],
    tags: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Dayforce",
      "IFS Cloud",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "WLBS",
    url: "https://wlbs.dev",
    start: "2024-04",
    end: "2025-11",
    points: [
      "Worked across the agency's product portfolio, shipping most of my work on Karm, Godaam and the Vogueshots CRM, from database schema to deployment.",
      "Karm, an HR platform on Remix, Prisma and PostgreSQL: built fortnightly payroll with TDS and payslips, attendance corrections, leave and break balances, task carry-forward cronjobs, Google auth, web push and SSE notifications.",
      "Cut Karm's page loads by moving heavy routes to Remix defer, adding server-timing instrumentation, real skeletons and nuqs-backed URL state, and moved avatar processing to sharp with background removal through Replicate.",
      "Godaam, a cold-storage monitoring product on the T3 turbo stack with a Next.js dashboard: added warehouse, stack and device management, bulk CSV device import, corporation-admin roles and permissions, and reworked group alerting.",
      "Built the sensor pipeline behind it: a Hono service that polls devices on a cron, filters readings against per-device thresholds into PostgreSQL, and an AWS Lambda that serves time-bucketed aggregates from a DynamoDB table of raw readings.",
      "Vogueshots wedding CRM: guest and template management with OCR-assisted card parsing, invitation and RSVP flows over the Interakt WhatsApp API, scheduled reminder cronjobs, S3 attachments and a planner analytics dashboard.",
      "Put the guardrails in on Godaam: turned off the build's lint and type-error suppression, cleared the backlog of errors across every package, and added lint and typecheck GitHub Actions so they stayed at zero.",
    ],
    tags: [
      "Remix",
      "Next.js",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Hono",
      "AWS",
      "Docker",
    ],
  },
  {
    role: "Full Stack Intern",
    company: "Giga Growth Ventures",
    url: "https://gigagrowthventures.com/",
    start: "2023-08",
    end: "2023-10",
    points: [
      "Built Growth Grid, a communication platform where startups and investors keep profiles, connect and share updates, in a Turborepo monorepo: Next.js frontend, Nest.js API, Prisma and PostgreSQL.",
      "Shipped the flagship email-threaded comments feature: being tagged in a thread mails you the whole discussion, and replying to that mail posts your reply straight back into the thread, no login needed.",
      "Matched inbound replies to their thread by hiding the thread metadata in the outgoing email body and parsing it back out in the Mailgun route webhook, then stripping quoted history from the reply.",
      "Kept tag notifications from turning into spam with a per-user hourly cooldown and a six-hourly cron that batches pending threads into a single digest.",
      "Added realtime chat and search over Socket.io gateways, and a dashboard charting startup, investor and funding activity month over month.",
    ],
    tags: [
      "Next.js",
      "Nest.js",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Turborepo",
      "Mailgun",
      "Resend",
    ],
  },
];
