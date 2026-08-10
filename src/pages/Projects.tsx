import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Projects = () => {
  // Arriving from the home page's "See all projects" link keeps the previous
  // scroll offset, which lands mid-grid.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-12">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
