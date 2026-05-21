import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AIExpertise from "@/components/AIExpertise";
import Backend from "@/components/Backend";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <AIExpertise />
      <Backend />
      <Contact />
      <Footer />
    </main>
  );
}
