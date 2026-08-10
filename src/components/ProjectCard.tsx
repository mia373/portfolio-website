import { motion } from "framer-motion";
import { ExternalLink, Github, Youtube } from "lucide-react";
import type { Project } from "@/data/projects";

const isVideo = (url: string) => /youtube\.com|youtu\.be|vimeo\.com/.test(url);

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, delay }}
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
        {project.note && (
          <p className="text-xs font-body font-semibold tracking-widest uppercase text-accent mb-1.5">
            {project.note}
          </p>
        )}
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          {project.title}
        </h3>
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

        {(project.github || project.live) && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border font-body text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border font-body text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {isVideo(project.live) ? (
                  <Youtube size={16} aria-hidden="true" />
                ) : (
                  <ExternalLink size={16} aria-hidden="true" />
                )}
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
