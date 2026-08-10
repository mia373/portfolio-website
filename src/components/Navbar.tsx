import { useState } from "react";
import { motion } from "framer-motion";
import { House, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// All items scroll to a section on the home page.
const navItems = [
  { label: "Experience", hash: "#experience" },
  { label: "Projects", hash: "#projects" },
  { label: "Skills", hash: "#skills" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Section anchors only resolve on the home page, so from anywhere else they
  // need to navigate home first.
  const isHome = useLocation().pathname === "/";

  // Routing to "/" keeps the current scroll offset, so on the home page the
  // link would do nothing and from /projects it would land mid-page.
  const goHome = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: isHome ? "smooth" : "auto" });
  };

  const linkClass =
    "font-body text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="container mx-auto flex items-center justify-between h-12 px-6">
        <Link
          to="/"
          onClick={goHome}
          className="inline-flex items-center gap-2 font-display text-lg font-bold text-foreground tracking-tight hover:text-accent transition-colors"
        >
          <House size={18} />
          Home
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={isHome ? item.hash : `/${item.hash}`} className={linkClass}>
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-border bg-background/95 px-6 py-4">
          <div className="flex flex-col items-stretch gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={isHome ? item.hash : `/${item.hash}`}
                onClick={() => setIsMenuOpen(false)}
                className={`${linkClass} rounded-md px-3 py-3 hover:bg-muted`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
