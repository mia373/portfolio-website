// Images for hand-coded projects
import search from "@/assets/search.png";
import glb from "@/assets/glb.png";
import student from "@/assets/student.png";
import lc4 from "@/assets/lc4.png";
import freeze from "@/assets/freeze.png";
import routing from "@/assets/routing.png";

// Images for vibe-coded projects
import portfolio from "@/assets/portfolio.png";
import hometasker from "@/assets/hometasker.png";
import tennis2 from "@/assets/tennis2.png";

import fundsradar from "@/assets/fundsradar.png";
import project2 from "@/assets/project2.jpg";

export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tags: string[];
  color: string;
  category: "hand" | "vibe";
  filter: string | string[];
  /** Optional context shown above the title, e.g. a hackathon it was built at. */
  note?: string;
};

export const projects: Project[] = [
  {
    title: "DisclosureAI",
    description: "A RAG system over 10,000+ SEC filings from 500 companies, indexing 1M+ passages in pgvector for source-grounded Q&A — with citation guardrails that reject unsupported LLM references.",
    // TODO: replace with a real DisclosureAI screenshot — borrowed from Philadelphia Data Interface for now.
    image: project2,
    github: "https://github.com/mia373/DisclosureAI",
    live: "",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL/pgvector", "OpenAI API", "AWS"],
    color: "bg-primary/10",
    category: "hand",
    filter: ["Full-Stack", "AI/ML"],
  },
  {
    title: "FundsRadar",
    description: "A mutual-fund analytics platform built on 26 quarters of SEC filings and 100M+ holdings records. An ETL pipeline processes 30+ GB into PostgreSQL, cutting 7-minute analytical queries to under 0.5 seconds.",
    image: fundsradar,
    github: "https://github.com/mia373/FundsRadar",
    live: "https://www.youtube.com/watch?v=kJR5Q5HtrFo",
    tags: ["Python", "PostgreSQL", "AWS RDS", "Node.js", "Express", "REST APIs"],
    color: "bg-secondary/10",
    category: "hand",
    filter: "Full-Stack",
  },
  {
    title: "AI-Assisted Home Tasker",
    description: "A gamified household task manager - earn points for chores, compete with your housemates.",
    image: hometasker,
    github: "https://github.com/mia373/tidy-up",
    live: "https://github.com/mia373/tidy-up/blob/main/DEMO.md",
    tags: ["React Native", "Supabase", "Gemini API", "Expo", "Claude Code"],
    color: "bg-primary/10",
    category: "vibe",
    filter: "Full-Stack",
  },
  {
    title: "Philadelphia Data Interface",
    description: "A Java REST API and React dashboard for visualizing Philadelphia's COVID, property, and population data by ZIP code.",
    image: project2,
    github: "https://github.com/mia373/philadelphia-data-interface",
    live: "",
    tags: ["Java", "Javalin", "React", "TypeScript", "Recharts/React Leaflet", "JUnit 5"],
    color: "bg-secondary/10",
    category: "hand",
    filter: "Full-Stack",
  },
  {
    title: "Portfolio Website",
    description: "The portfolio website you are looking at.",
    image: portfolio,
    github: "https://github.com/mia373/portfolio-website",
    live: "",
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS", "Lovable"],
    color: "bg-accent/10",
    category: "vibe",
    filter: "Full-Stack",
  },
  {
    title: "LA Tennis Court Finder",
    description: "A real-time web app that aggregates tennis court availability across West Los Angeles.",
    image: tennis2,
    github: "https://github.com/mia373/west-la-tennis-finder",
    live: "",
    tags: ["TypeScript", "React", "Tailwind CSS", "Supabase", "Leaflet.js", "Lovable"],
    color: "bg-primary/10",
    category: "vibe",
    filter: "Full-Stack",
  },
  {
    title: "Distributed Search Engine",
    description: "A search engine in C++ using a custom Chord Distributed Hash Table (DHT) to route queries across dynamic networks.",
    image: search,
    github: "https://github.com/mia373/distributed-search-engine",
    live: "",
    tags: ["C++", "Distributed Systems", "Network Routing", "Docker", "OpenSSL"],
    color: "bg-primary/10",
    category: "hand",
    filter: "Systems",
  },
  {
    title: "Multi-Protocol Network Simulator",
    description: "This project extends the ns-3 network simulator to study routing and distributed lookup behavior in simulated IP networks. .",
    image: routing,
    github: "https://github.com/mia373/multi-protocol-network-simulator",
    live: "",
    tags: ["C++", "Distributed Systems", "Network Routing", "Docker", "ns-3"],
    color: "bg-primary/10",
    category: "hand",
    filter: "Systems",
  },
  {
    title: "Student Management System",
    description: "A console-based Java application implementing a multi-role student management system for an educational institution.",
    image: student,
    github: "https://github.com/mia373/student-management-system",
    live: "",
    tags: ["Java", "JUnit 5"],
    color: "bg-secondary/10",
    category: "hand",
    filter: "Systems",
  },
  {
    title: "LC4 Disassembler",
    description: "A fully functional LC4 binary disassembler written in C. It converts .obj binary file into human-readable LC4 assembly code.",
    image: lc4,
    github: "https://github.com/mia373/lc4-disassembler",
    live: "",
    tags: ["C", "Valgrind"],
    color: "bg-secondary/10",
    category: "hand",
    filter: "Systems",
  },
  {
    title: "FreezeFrame",
    description: "FreezeFrame turns 4 iPhones and a clap into a voice-controlled, AI-narrated bullet-time replay experience — the kind that used to cost half a million dollars and a stadium full of cameras.",
    image: freeze,
    github: "https://github.com/mia373/FreezeFrame",
    live: "https://freeze-frame.vercel.app/",
    tags: ["Python", "3D Gaussian Splatting", "Computer Vision", "Google Gemini Live", "Three.js", "COLMAP"],
    color: "bg-secondary/10",
    category: "hand",
    filter: ["Full-Stack", "AI/ML"],
    note: "Build with Gemini Hackathon",
  },
  {
    title: "Penn NLP Lab Assistance",
    description: "Collaborated with PhD researchers at the University of Pennsylvania to curate a benchmark dataset for evaluating Multimodal Large Language Models (MLLMs) on 3D scene.",
    image: glb,
    github: "https://github.com/mia373/penn-mllm-benchmark",
    live: "",
    tags: ["Multimodal Large Language Models (MLLMs)"],
    color: "bg-secondary/10",
    category: "hand",
    filter: "AI/ML",
  },
];

export const FILTERS = ["All", "Full-Stack", "Systems", "AI/ML"] as const;
export type Filter = typeof FILTERS[number];

const matchesFilter = (project: Project, filter: Filter) =>
  filter === "All" ||
  (Array.isArray(project.filter) ? project.filter.includes(filter) : project.filter === filter);

// Titles pinned to the top of a given filter, in this order. Anything not
// listed follows in `projects` order, so a filter only needs the entries whose
// placement actually matters.
const PINNED_BY_FILTER: Partial<Record<Filter, string[]>> = {
  All: [
    "DisclosureAI",
    "FundsRadar",
    "FreezeFrame",
    "Distributed Search Engine",
    "Philadelphia Data Interface",
    "Penn NLP Lab Assistance",
    "AI-Assisted Home Tasker",
    "Portfolio Website",
    "LA Tennis Court Finder",
    "Multi-Protocol Network Simulator",
    "Student Management System",
    "LC4 Disassembler",
  ],
  "Full-Stack": ["DisclosureAI", "FundsRadar", "FreezeFrame"],
};

/** Projects matching `filter`, with that filter's pinned titles first. */
export const projectsFor = (filter: Filter): Project[] => {
  const matching = projects.filter((p) => matchesFilter(p, filter));
  const pinnedTitles = PINNED_BY_FILTER[filter] ?? [];

  const pinned = pinnedTitles
    .map((title) => matching.find((p) => p.title === title))
    .filter((p): p is Project => p !== undefined);

  return [...pinned, ...matching.filter((p) => !pinned.includes(p))];
};

// Shown on the home page, in this order. Titles must match `projects` entries.
const FEATURED_TITLES = ["FundsRadar", "FreezeFrame", "Distributed Search Engine", "DisclosureAI"];

export const featuredProjects: Project[] = FEATURED_TITLES.map((title) => {
  const project = projects.find((p) => p.title === title);
  if (!project) throw new Error(`Featured project not found: ${title}`);
  return project;
});
