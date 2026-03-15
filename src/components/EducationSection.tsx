import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "University of Pennsylvania",
    degree: "Master of Computer and Information Technology",
    period: "Aug 2023 - May 2025",
    gpa: "4.0 / 4.0",
    coursework: [
      "Distributed Systems",
      "Interactive Computer Graphics",
      "Database and Information Systems",
      "Computer Systems Programming",
      "Data Structures and Algorithms",
      "Discrete Mathematics",
    ],
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    school: "Nanyang Technological University",
    degree: "Bachelor of Fine Arts in Media Art",
    period: "Aug 2017 - May 2021",
    gpa: "4.79 / 5.00",
    achievements: [
      "Winner of the Lee Kuan Yew Gold Medal, 2020/2021",
      "Awarded Dean's List in AY 2017/2018, 2018/2019, 2020/2021",
      "Recipient of the NTU-University Scholars Programme Scholarship",
    ],
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 relative">
      <div className="absolute inset-0 bg-blob-1 opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
            Education 🎓
          </h2>
          <p className="text-muted-foreground font-body text-lg">Learning never stops</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${edu.color} flex items-center justify-center flex-shrink-0`}>
                  <GraduationCap className={edu.iconColor} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-primary font-body font-medium mb-1">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground font-body">{edu.period}</p>
                </div>
              </div>

              <div className="ml-16">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent font-body font-semibold text-sm">
                    <Award size={14} />
                    GPA: {edu.gpa}
                  </span>
                </div>

                {edu.coursework && (
                  <div>
                    <p className="text-sm font-body font-semibold text-foreground mb-2">
                      Relevant coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs font-body px-3 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.achievements && (
                  <div>
                    <p className="text-sm font-body font-semibold text-foreground mb-2">
                      Achievements:
                    </p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-sm font-body text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
