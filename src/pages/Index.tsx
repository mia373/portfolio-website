import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      {/* <EducationSection /> */}
      {/* <ExperienceSection /> */}
      {/* <SkillsSection /> */}
      <HobbiesSection />
      {/* <ResumeSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
