interface Project {
  name: string;
  slug: string;
  smallDescription?: string;
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
  description: string;
  tags: string[];
}

export const Projects: Project[] = [
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
    description: "An app to practice writing and speaking of any language.",
    smallDescription: "AI powered language learning app",
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
      liveUrl: "https://frameground.tech",
    },
    description: "Learn JavaScript frameworks with interactive challenges",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    smallDescription: "In browser code playground",
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
    description:
      "A revolutionary product that brings your music to life with advanced AI technology.",
    urls: {
      liveUrl: "https://musicaicentral.com",
    },
    smallDescription: "AI powered music app",
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
    description:
      "A realtime voting platform where organisations can register and create junior admins to create and manage polls, register candidates and allow them to participate in certain polls, voters can register and vote for their favourite candidates and view a realtime graph of the results. Used by 3000 voters and over 7000 votes casted in the first 1 month of launch.",
    slug: "voto",
    urls: {
      liveUrl: "https://voto.com.ng",
    },
    smallDescription: "Live voting app",
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
];
