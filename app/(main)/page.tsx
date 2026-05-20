import AboutMeSection from "@/components/sections/aboutmeSection";
import ProjectSection from "@/components/sections/projectSection";
import WelcomeSection from "@/components/sections/welcomeSection";

export default function Home() {
  return (
    <>
      <WelcomeSection />

      <ProjectSection />

      <AboutMeSection />
    </>
  );
}