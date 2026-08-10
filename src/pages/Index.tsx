import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import SkillsSection from "@/components/SkillsSection";
// import JourneySection from "@/components/JourneySection";
// import EducationSection from "@/components/EducationSection";
// import HobbiesSection from "@/components/HobbiesSection";
// import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Index;
