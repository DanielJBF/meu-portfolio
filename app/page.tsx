import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-100 selection:bg-sky-500 selection:text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education/>
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}