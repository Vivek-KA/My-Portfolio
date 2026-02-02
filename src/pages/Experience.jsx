import React from "react";
import kodnestLogo from "../assets/kodnest_logo.png"; // Place your logo in assets

const skills = [
  { name: "Java", color: "bg-emerald-500/80 text-white" },
  { name: "MySQL", color: "bg-blue-500/80 text-white" },
  { name: "HTML", color: "bg-orange-400/80 text-white" },
  { name: "CSS", color: "bg-blue-300/80 text-black" },
  { name: "JavaScript", color: "bg-yellow-300/80 text-black" },
  { name: "React", color: "bg-cyan-400/80 text-black" },
  { name: "Git", color: "bg-gray-700/80 text-white" },
];

export default function Experience() {
  return (
    <div
      id="experience"
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-24 py-20"
      style={{
        background: "black"
      }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-emerald-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
        Professional Experience
      </h2>
      <div
        className="flex flex-col md:flex-row items-center gap-8 rounded-3xl px-8 py-10 md:px-14 md:py-12 max-w-3xl w-full border border-white/20 shadow-xl backdrop-blur-2xl bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-emerald-400/30"
        style={{
          background: "linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(40,40,40,0.18) 100%)",
          boxShadow: "0 8px 40px 0 rgba(0,0,0,0.18), 0 1.5px 12px 0 rgba(52,211,153,0.08) inset",
          border: "1.5px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(28px) saturate(180%)"
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0 flex flex-col items-center md:items-start">
          <div className="rounded-xl p-2 bg-gradient-to-tr from-emerald-400 via-blue-400 to-violet-500 shadow-lg mb-4">
            <img
              src={kodnestLogo}
              alt="Kodnest Technologies Logo"
              className="w-20 h-20 object-contain rounded-xl bg-white/20"
            />
          </div>
          <span className="text-sm text-gray-400">Bengaluru, Karnataka, India</span>
        </div>
        {/* Experience Details */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-1">Software Development Intern</h3>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-emerald-300 font-semibold">Kodnest Technologies</span>
            <span className="text-gray-400 text-sm">|</span>
            <span className="text-blue-300 text-sm">May 2025 – Present</span>
          </div>
          <ul className="list-disc list-inside text-gray-200 text-base md:text-lg font-light space-y-2 mt-3">
            <li>
              Gained practical exposure by working on real projects utilizing <span className="text-emerald-200 font-medium">Java</span>, <span className="text-blue-200 font-medium">MySQL</span>, and <span className="text-violet-200 font-medium">Frontend Technologies</span>.
            </li>
            <li>
              Learned from industry experts, improving coding, database management, and software quality assurance skills.
            </li>
            <li>
              Adapted to professional software development standards and agile workflows.
            </li>
          </ul>
          {/* Skills Used */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-2">Skills Used:</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-1 rounded-full text-sm font-semibold shadow ${skill.color} border border-white/10`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}