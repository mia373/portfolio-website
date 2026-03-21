import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const journeyItems = [
  {
    type: "work",
    title: "Teaching Assistant – Computer Systems",
    organization: "University of Pennsylvania",
    period: "Aug 2025 – Dec 2025",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    type: "work",
    title: "Technical Consultant",
    organization: "Deloitte | Secondment to Google (3 years)",
    period: "Jan 2022 – Mar 2025",
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    type: "education",
    title: "Master of Computer and Information Technology",
    organization: "University of Pennsylvania",
    period: "Aug 2024 – Present",
    gpa: "4.0 / 4.0",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-16 relative">
      <div className="absolute inset-0 bg-blob-1 opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            Journey 🗺️
          </h2>
          <p className="text-muted-foreground font-body text-lg">Experience & education</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {journeyItems.map((item, i) => (
              <motion.div
                key={`${item.organization}-${item.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-16"
              >
                <div
                  className={`absolute left-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}
                >
                  {item.type === "education" ? (
                    <GraduationCap className={item.iconColor} size={22} />
                  ) : (
                    <Briefcase className={item.iconColor} size={22} />
                  )}
                </div>

                <div className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-display font-bold text-foreground mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-primary font-body font-medium text-sm">{item.organization}</p>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">{item.period}</p>

                  {item.gpa && (
                    <div className="mt-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/20 text-accent font-body font-semibold text-xs">
                        <Award size={12} />
                        GPA: {item.gpa}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
