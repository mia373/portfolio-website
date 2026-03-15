import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg font-semibold text-foreground mb-4">
          Let's connect! ✦
        </p>
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Twitter size={18} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          © 2026 Mia Z · Made with 💖
        </p>
      </div>
    </footer>
  );
};

export default Footer;
