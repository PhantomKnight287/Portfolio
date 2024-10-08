interface Project {
    name: string;
    slug: string;
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
            url: "https://voicelearn.tech/logo.png", alt: "Voice Learn", height: 381, width: 495
        },
        tags: ["Flutter", "Nest.js", "Postgres", "Prisma", "Socket.io", "LLM", "Gemini", "OpenAI", "XILabs", "Next.js"],
        urls: {
            liveUrl: "https://voicelearn.tech"
        },
        description: "An app to practice writing and speaking of any language."
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
        name: "Lend My Skill",
        slug: "lend-my-skill",
        image: {
            url: "https://github.com/PhantomKnight287/lend-my-skill/blob/main/assets/lms-logo.png?raw=true",
            alt: "Lend My Skill",
            width: 164,
            height: 164,
        },
        urls: {
            githubUrl: "https://github.com/PhantomKnight287/lend-my-skill",
        },
        description: `A Freelance platform designed specially for Indians supporting payment methods like Rupay Card and UPI.`,
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Nest.js",
            "Socket.io",
            "PostgreSQL",
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
    {
        name: "Fluxt",
        slug: "fluxt",
        urls: {
            githubUrl: "https://github.com/PhantomKnight287/fluxt",
        },
        image: {
            url: "/chat.png",
            alt: "Fluxt",
            width: 360,
            height: 360,
        },
        description: `A Realtime chat app created using flask,socket io and nextjs`,
        tags: ["Flask", "Socket.io", "Next.js", "TypeScript", "Mantine", "Sqlite3"],
    },
    {
        name: "Reactive Chat",
        slug: "reactive-chat",
        urls: {
            githubUrl: "https://github.com/PhantomKnight287/reactnative",
        },
        tags: ["React Native", "Firebase"],
        description: `A Realtime chat app created using React Native and Firebase`,
        image: {
            url: "/chat.png",
            alt: "Fluxt",
            width: 360,
            height: 360,
        },
    },
    {
        name: "React Cli",
        slug: "react-cli",
        urls: {
            githubUrl: "https://github.com/PhantomKnight287/react-cli",
        },
        tags: ["Rust"],
        description: "A CLI tool to generate react components and hooks.",
        image: {
            url: "/cli.png",
            width: 360,
            height: 360,
            alt: "React Cli",
        },
    },

];
