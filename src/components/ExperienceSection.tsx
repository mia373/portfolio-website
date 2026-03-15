import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Teaching Assistant",
    organization: "University of Pennsylvania",
    period: "Aug 2024 - Present",
    location: "Philadelphia, PA",
    responsibilities: [
      "TA for CIS 5950 Computer Systems Programming, and CIS 2400 Introduction to Computer Systems",
      "Offered academic support to students, hosted weekly office hours, and provided code review in C and C++",
      "Developed tests for homework autograder and maintained assignment infrastructure",
    ],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Research Assistant",
    organization: "Autonomous Manufacturing Lab @ UPenn",
    period: "Jun 2024 - Aug 2024",
    location: "Philadelphia, PA",
    link: "https://example.com",
    responsibilities: [
      "Converted a Java-based codebase to C# to facilitate integration with Rhino3D (3D modeling software for architects)",
      "Developed custom scripting components to enable dynamic interaction between the simulation software and architectural models in Rhino3D, streamlining workflow efficiency",
      "Optimized code by identifying redundancies and reworking inefficient data structures",
    ],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            Experience 💼
          </h2>
          <p className="text-muted-foreground font-body text-lg">Where I've contributed</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${exp.color} flex items-center justify-center flex-shrink-0`}>
                  <Briefcase className={exp.iconColor} size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-body font-medium mb-1">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-muted-foreground font-body">{exp.period}</p>
                    </div>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="ml-16">
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + idx * 0.1 }}
                      className="text-sm font-body text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
