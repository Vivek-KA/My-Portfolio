import React from "react";
import kodnestLogo from "../assets/kodnest_logo.png";

const skills = [
  { name: "Java", color: "bg-emerald-500/80 text-white" },
  { name: "MySQL", color: "bg-blue-500/80 text-white" },
  { name: "HTML", color: "bg-orange-400/80 text-white" },
  { name: "CSS", color: "bg-blue-300/80 text-black" },
  { name: "JavaScript", color: "bg-yellow-300/80 text-black" },
  { name: "React", color: "bg-cyan-400/80 text-black" },
  { name: "Git", color: "bg-gray-700/80 text-white" }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        min-h-screen w-full flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-16 lg:px-24   /* ✅ CHANGED */
        py-16 sm:py-20                  /* ✅ CHANGED */
        bg-black
      "
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-12 bg-gradient-to-r from-emerald-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
        Professional Experience
      </h2>

      <div
        className="
          flex flex-col md:flex-row items-center
          gap-6 md:gap-8                  /* ✅ CHANGED */
          rounded-3xl
          px-5 sm:px-8 md:px-14           /* ✅ CHANGED */
          py-6 sm:py-10 md:py-12          /* ✅ CHANGED */
          max-w-3xl w-full
          border border-white/20
          shadow-xl backdrop-blur-2xl
          bg-white/10
          transition-all duration-300
          hover:scale-105 hover:shadow-emerald-400/30
        "
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(40,40,40,0.18) 100%)",
          border: "1.5px solid rgba(255,255,255,0.12)"
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <div className="rounded-xl p-2 bg-gradient-to-tr from-emerald-400 via-blue-400 to-violet-500 shadow-lg mb-3 sm:mb-4">
            <img
              src={kodnestLogo}
              alt="Kodnest Technologies Logo"
              className="
                w-16 h-16 sm:w-20 sm:h-20    /* ✅ CHANGED */
                object-contain rounded-xl bg-white/20
              "
            />
          </div>
          <span className="text-xs sm:text-sm text-gray-400">
            Bengaluru, Karnataka, India
          </span>
        </div>

        {/* Experience Details */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
            Software Development Intern
          </h3>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-2">
            <span className="text-emerald-300 font-semibold">
              Kodnest Technologies
            </span>
            <span className="text-gray-400 text-sm">|</span>
            <span className="text-blue-300 text-sm">
              May 2025 – Present
            </span>
          </div>

          <ul className="list-disc list-inside text-gray-200 text-sm sm:text-base md:text-lg font-light space-y-2 mt-3">
            <li>
              Gained practical exposure by working on real projects utilizing{" "}
              <span className="text-emerald-200 font-medium">Java</span>,{" "}
              <span className="text-blue-200 font-medium">MySQL</span>, and{" "}
              <span className="text-violet-200 font-medium">
                Frontend Technologies
              </span>.
            </li>
            <li>
              Learned from industry experts, improving coding, database
              management, and software quality assurance skills.
            </li>
            <li>
              Adapted to professional software development standards and agile
              workflows.
            </li>
          </ul>

          {/* Skills Used */}
          <div className="mt-6">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
              Skills Used:
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow ${skill.color} border border-white/10`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
