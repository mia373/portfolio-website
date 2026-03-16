import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

// Images for hand-coded projects
import search from "@/assets/search.png";
import glb from "@/assets/glb.png";
import aicoach from "@/assets/aicoach.png";
import student from "@/assets/student.png";

// Images for vibe-coded projects
import portfolio from "@/assets/portfolio.png";
import hometasker from "@/assets/hometasker.png";
import tennis2 from "@/assets/tennis2.png";


import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";

const projects = [
  {
    title: "Distributed Search Engine",
    description: "A search engine in C++ using a custom Chord Distributed Hash Table (DHT) to route queries across dynamic networks.",
    image: search,
    github: "https://github.com/mia373/distributed-search-engine",
    live: "",
    tags: ["C++", "Distributed Systems", "Network Routing", "OpenSSL"],
    color: "bg-primary/10",
    category: "hand",
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
  },
  {
    title: "AI Career Coach",
    description: "A multi-agent AI coach system with 4 specialized agents using LangGraph.",
    image: aicoach,
    github: "https://github.com/mia373/ai-career-coach",
    live: "",
    tags: ["Python", "LangGraph", "LangChain", "Google Gemini LLM", "Serper API"],
    color: "bg-secondary/10",
    category: "hand",
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
  },
  {
    title: "Portfolio Website",
    description: "The portfolio websit you are looking at.",
    image: portfolio,
    github: "https://github.com/mia373/portfolio-website",
    live: "",
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    color: "bg-accent/10",
    category: "vibe",
  },
  {
    title: "AI-Assisted Home Tasker",
    description: "A gamified household task manager - earn points for chores, compete with your housemates.",
    image: hometasker,
    github: "https://github.com/mia373/tidy-up/blob/main/DEMO.md",
    live: "",
    tags: ["React Native", "Supabase", "Gemini API", "Expo"],
    color: "bg-primary/10",
    category: "vibe",
  },
    {
    title: "LA Tennis Court Finder",
    description: "A real-time web app that aggregates tennis court availability across West Los Angeles.",
    image: tennis2,
    github: "https://github.com/mia373/west-la-tennis-finder",
    live: "",
    tags: ["TypeScript", "React", "Tailwind CSS", "Supabase", "Leaflet.js"],
    color: "bg-primary/10",
    category: "vibe",
  },
];

const tabs = [
  { label: "Hand Coded", value: "hand" },
  { label: "Vibe Coded", value: "vibe" },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("hand");
  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            My Projects 🚀
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8">Things I've built & shipped</p>

          <div className="flex items-center justify-center gap-2 bg-muted/50 rounded-full p-1.5 w-fit mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className="relative font-body text-sm font-medium px-6 py-2 rounded-full transition-colors z-10"
                style={{
                  color: activeTab === tab.value ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
                }}
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="project-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`aspect-video overflow-hidden ${project.color}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
