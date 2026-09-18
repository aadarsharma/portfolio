import Navbar from "./components/Navbar";
import Background from "./components/Background";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Accomplishments from "./components/Accomplishments";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./components/ThemeContext";

export default function Home() {
  return (
    <ThemeContextProvider>
      <Background />
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <div className="mx-auto w-full max-w-6xl px-6 pt-24 sm:px-8">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <Accomplishments />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </ThemeContextProvider>
  );
}
