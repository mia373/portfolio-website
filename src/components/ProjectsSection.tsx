import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";

const projects = [
  {
    title: "Cool App",
    description: "A playful mobile app for tracking daily habits with fun animations.",
    image: project1,
    github: "https://github.com",
    tags: ["React Native", "TypeScript"],
    color: "bg-primary/10",
    category: "hand",
  },
  {
    title: "Data Dash",
    description: "A beautiful dashboard for visualizing complex datasets in real-time.",
    image: project2,
    github: "https://github.com",
    tags: ["React", "D3.js"],
    color: "bg-secondary/10",
    category: "hand",
  },
  {
    title: "Creative Studio",
    description: "A collaborative design platform for teams to create and share digital art.",
    image: project1,
    github: "https://github.com",
    tags: ["Next.js", "WebGL", "Socket.io"],
    color: "bg-accent/10",
    category: "vibe",
  },
  {
    title: "Eco Tracker",
    description: "An app that helps users track and reduce their carbon footprint.",
    image: project2,
    github: "https://github.com",
    tags: ["Vue", "Tailwind CSS"],
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
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
