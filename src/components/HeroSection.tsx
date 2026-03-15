import { motion } from "framer-motion";
import heroShapes from "@/assets/hero-shapes.png";
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
            className="text-lg font-body font-medium text-secondary mb-3">
            
            hey there! 👋
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-gradient leading-tight">
            I'm Mia Z
          </h1>
          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-lg leading-relaxed">
            I love building things from scratch — whether it's a side project, a new travel route, or a 100-hour RPG playthrough.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display font-medium text-sm hover:scale-105 transition-transform">
              
              See my work ✨
            </a>
            <a
              href="#hobbies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-display font-medium text-sm hover:scale-105 transition-transform">
              
              About me 🌈
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 max-w-md animate-float">
          
          <img alt="Mia Z profile photo" className="w-full aspect-square object-cover rounded-2xl" src={profilePhoto} />
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;