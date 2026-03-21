import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import JourneySection from "@/components/JourneySection";
// import EducationSection from "@/components/EducationSection";
// import ExperienceSection from "@/components/ExperienceSection";
// import HobbiesSection from "@/components/HobbiesSection";
// import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <JourneySection />
      <Footer />
    </div>
  );
};

export default Index;
