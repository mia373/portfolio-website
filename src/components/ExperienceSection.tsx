import { motion } from "framer-motion";
import { Database, type LucideIcon } from "lucide-react";

import capitalOneLogo from "@/assets/tech/capitalone.png";
import upennLogo from "@/assets/tech/upenn.png";
import googleLogo from "@/assets/tech/google.svg";

import javaIcon from "@/assets/tech/java.svg";
import springBootIcon from "@/assets/tech/springboot.svg";
import pythonIcon from "@/assets/tech/python.svg";
import awsIcon from "@/assets/tech/aws.svg";
import cIcon from "@/assets/tech/c.svg";
import googleCloudIcon from "@/assets/tech/googlecloud.svg";
import lookerIcon from "@/assets/tech/looker.svg";

// Most entries use a brand SVG; `Icon` is the fallback for technologies that
// have no logo of their own (SQL is a standard, not a product).
type Tech = { name: string; icon?: string; Icon?: LucideIcon };

const experiences = [
  {
    title: "Software Engineer",
    organization: "Capital One",
    period: "Aug 2026 - Present",
    location: "McLean, VA",
    summary:
      "I build backend services, REST APIs, and internal tooling that connect deployment, configuration, and operational data across platforms — plus the CI/CD automation that keeps releases consistent.",
    stack: [
      { name: "Java", icon: javaIcon },
      { name: "Spring Boot", icon: springBootIcon },
      { name: "Python", icon: pythonIcon },
      { name: "AWS", icon: awsIcon },
    ],
    logo: capitalOneLogo,
  },
  {
    title: "Teaching Assistant — Computer Systems",
    organization: "University of Pennsylvania",
    period: "Aug 2025 - Dec 2025",
    location: "Philadelphia, PA",
    summary:
      "I taught C, memory management, assembly, and debugging to 20+ students through weekly recitations and office hours, and was invited back as Head TA after one semester.",
    stack: [{ name: "C", icon: cIcon }],
    logo: upennLogo,
  },
  {
    title: "Technical Consultant",
    organization: "Deloitte | Secondment to Google",
    period: "Jan 2022 - Mar 2025",
    location: "Los Angeles, CA",
    summary:
      "Three years embedded at Google, building Python data pipelines and Looker Studio reporting that cut 500+ hours of manual work each quarter, and running UAT through to production launch.",
    stack: [
      { name: "Python", icon: pythonIcon },
      { name: "Google Cloud", icon: googleCloudIcon },
      { name: "SQL", Icon: Database },
      { name: "Looker Studio", icon: lookerIcon },
    ] as Tech[],
    logo: googleLogo,
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={`${exp.organization} logo`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {exp.organization}
                    </h3>
                    <p className="font-body text-muted-foreground">{exp.title}</p>
                  </div>
                  <div className="shrink-0 font-body text-sm text-muted-foreground sm:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
              </div>

              <p className="font-body text-muted-foreground" style={{ lineHeight: 1.75 }}>
                {exp.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-2 text-[0.8125rem] font-body font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                  >
                    {tech.icon ? (
                      <img src={tech.icon} alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
                    ) : (
                      tech.Icon && <tech.Icon size={16} aria-hidden="true" className="shrink-0" />
                    )}
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
