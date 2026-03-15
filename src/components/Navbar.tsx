import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Hobbies", href: "#hobbies" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("#projects");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      const sections = navItems.map(item => {
        const element = document.querySelector(item.href) as HTMLElement;
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          return {
            id: item.href,
            offsetTop,
            offsetBottom: offsetTop + element.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(section => 
        section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom
      );

      if (current) {
        setActiveItem(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Mia Z ✦
        </a>
        <div className="flex items-center gap-2 bg-muted/50 rounded-full p-1.5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveItem(item.href)}
              className="relative font-body text-sm font-medium px-4 py-2 rounded-full transition-colors z-10"
              style={{
                color: activeItem === item.href ? 'hsl(var(--primary-foreground))' : 'hsl(var(--muted-foreground))'
              }}
            >
              {activeItem === item.href && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-primary rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
