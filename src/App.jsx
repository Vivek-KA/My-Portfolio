import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    // ✅ CHANGE 1: flex + min-h-screen for proper layout
    <div className="flex flex-col min-h-screen">
      
      <Navbar />

      {/* ✅ CHANGE 2: main wrapper with flex-grow */}
      <main className="flex-grow scroll-smooth">
        <Home />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
