import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import AboutSesction from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
// hello

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar />
      <div className="container mt-24 bg-black mx-auto py-4 px-5">
        <HeroSection />
        <AboutSesction />
        <ProjectsSection />
      </div>
    </main>
  );
}
