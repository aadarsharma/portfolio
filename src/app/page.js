import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import { ThemeContextProvider } from "./components/ThemeContext";
import Accomplishments from "./components/Accomplishments";
import EmailSection from "./components/EmailSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <ThemeContextProvider>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-16">
        <HeroSection/>
        <AboutSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <Accomplishments/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
    </ThemeContextProvider>
  );
}
