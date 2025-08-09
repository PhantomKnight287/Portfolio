export type ProjectSlug =
  | "voice-learn"
  | "cortex"
  | "frameground"
  | "music-ai"
  | "voto";

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
      url: "https://voicelearn.tech/logo.png",
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
      liveUrl: "https://voicelearn.tech",
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
    name: "Music.ai",
    slug: "music-ai",
    image: {
      url: "/music-ai.jpg",
      width: 674,
      height: 441,
      alt: "Music.ai",
    },
    urls: {
      liveUrl: "https://musicaicentral.com",
    },
    tags: [
      "React Native",
      "Expo Router",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Supabase",
      "In app purchases",
    ],
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
