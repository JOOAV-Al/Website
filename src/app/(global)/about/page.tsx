import AboutHero from "@/components/about/AboutHero";
import EmpoweringRetail from "@/components/about/EmpoweringRetail";
import Mission from "@/components/about/Mission";
import OurStory from "@/components/about/OurStory";
import TheTeam from "@/components/about/TheTeam";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <Mission />
      <OurStory />
      <TheTeam />
      <EmpoweringRetail />
    </div>
  );
};

export default AboutPage;
