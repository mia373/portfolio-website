import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C++", "Java", "C#", "C", "Python", "JavaScript"],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["HTML/CSS", "React", "Node.js", "Express", "Vite"],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    title: "Database Technologies",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Neo4j"],
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "Pandas"],
    color: "bg-lavender/10",
    iconColor: "text-lavender",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 relative">
      <div className="absolute inset-0 bg-blob-2 opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            Skills 🛠️
          </h2>
          <p className="text-muted-foreground font-body text-lg">My technical toolkit</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.icon className={category.iconColor} size={20} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + idx * 0.05 }}
                    className="text-xs font-body font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
