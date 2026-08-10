import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      <div className="absolute inset-0 bg-blob-1" />
      <div className="absolute inset-0 bg-blob-2" />
      <div className="absolute inset-0 bg-blob-3" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_1fr] items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left">

          <motion.img
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            alt="Mia Zuo profile photo"
            className="w-72 aspect-square object-cover rounded-2xl"
            src={profilePhoto} />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">

            HEY THERE! 👋
          </motion.p>
          <h1 className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            I'm Mia Zuo
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-5 flex items-center gap-3">

            <a
              href="https://github.com/mia373"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">

              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/miazuodev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">

              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com/mintz373"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">

              <Twitter size={18} />
            </a>
            <a
              href="mailto:miazuox@gmail.com"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">

              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-center lg:text-left">

          <p className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">
            PROFESSIONAL SUMMARY
          </p>
          <div className="h-px w-16 bg-border mb-6 mx-auto lg:mx-0" />

          <p className="max-w-2xl font-body font-normal text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: 1.75 }}>
            Software Engineer at Capital One, building backend services, REST APIs, and CI/CD tooling. Master of Applied Science in Computer Science from Penn (4.0 GPA), with three years at Deloitte embedded with Google before that.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-display font-semibold text-xs tracking-widest uppercase hover:scale-105 transition-transform">

              MY EXPERIENCE
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-accent text-accent-foreground font-display font-semibold text-xs tracking-widest uppercase hover:scale-105 transition-transform">

              SEE MY WORK
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-foreground bg-transparent text-foreground font-display font-semibold text-xs tracking-widest uppercase hover:scale-105 transition-transform">

              MY TOOLKIT
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;
