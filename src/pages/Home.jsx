import { useEffect, useState } from "react";
import bgDark from "../assets/bg-dark.jpg";

export default function Home() {
  const roles = [
    { text: "Software Developer", color: "text-cyan-400" },
    { text: "React Developer", color: "text-blue-500" },
    { text: "Web Developer", color: "text-orange-500" },
    { text: "Full Stack Developer", color: "text-green-400" }
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        min-h-screen w-full flex items-center
        px-4 sm:px-6 md:px-16 lg:px-24   /* ✅ CHANGED */
      "
      style={{
        backgroundImage: `url(${bgDark})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-3xl">
        {/* Greeting */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-2">
          Hi, I’m
        </h1>

        {/* Name */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Vivek <span className="text-violet-500">KA</span>
        </h2>

        {/* Changing Role */}
        <p
          className={`
            mt-3 sm:mt-4
            text-lg sm:text-xl md:text-2xl   /* ✅ CHANGED */
            font-semibold transition-all duration-500
            ${roles[currentRole].color}
          `}
        >
          {roles[currentRole].text}
        </p>

        {/* Description */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl leading-relaxed">
          I am a passionate software developer with experience in building
          modern, responsive, and user-friendly web applications using
          React, Java, and full-stack technologies.
        </p>

        {/* Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-green-400 text-black font-semibold hover:bg-green-500 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
          >
            Contact Me
          </a>

          <a
            href="/Vivek_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:opacity-90 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
