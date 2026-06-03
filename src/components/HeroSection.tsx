import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-blob-1" />
      <div className="absolute inset-0 bg-blob-2" />
      <div className="absolute inset-0 bg-blob-3" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left">
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-body font-semibold tracking-widest uppercase text-accent mb-3">

            HEY THERE! 👋
          </motion.p>
          <h1 className="font-display font-bold mb-6 text-foreground tracking-tight" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
            I'm Mia Z
          </h1>
          <p className="font-body font-normal text-muted-foreground max-w-lg" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            I love building things from scratch — whether it's a side project, a new travel route, or a 100-hour RPG playthrough.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-display font-semibold text-xs tracking-widest uppercase hover:scale-105 transition-transform">

              SEE MY WORK
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-foreground bg-transparent text-foreground font-display font-semibold text-xs tracking-widest uppercase hover:scale-105 transition-transform">

              MY TOOLKIT
            </a>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-accent text-accent-foreground font-display font-semibold text-xs tracking-widest uppercase hover:scale-105 transition-transform">

              MY STORY
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 max-w-md">
          
          <img alt="Mia Z profile photo" className="w-full aspect-square object-cover rounded-2xl" src={profilePhoto} />
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;