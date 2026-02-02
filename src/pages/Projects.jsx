import React from "react";
import { FaGithub, FaCalendarAlt } from "react-icons/fa";

// 🎨 Tech color map (KEY PART)
const techColors = {
  "React": "bg-cyan-500/15 text-cyan-300 border-cyan-400/30",
  "JavaScript": "bg-yellow-500/15 text-yellow-300 border-yellow-400/30",
  "HTML": "bg-orange-500/15 text-orange-300 border-orange-400/30",
  "CSS": "bg-sky-500/15 text-sky-300 border-sky-400/30",
  "Python": "bg-blue-500/15 text-blue-300 border-blue-400/30",
  "Machine Learning": "bg-purple-500/15 text-purple-300 border-purple-400/30",
  "XGBoost": "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  "CSV Data": "bg-gray-500/15 text-gray-300 border-gray-400/30",
  "PHP": "bg-indigo-500/15 text-indigo-300 border-indigo-400/30",
  "MySQL": "bg-blue-400/15 text-blue-300 border-blue-300/30",
  "XAMPP": "bg-orange-400/15 text-orange-300 border-orange-300/30"
};

const projects = [
  {
    title: "Agriculture Equipment Rental System",
    duration: "16 Jun 2025 – 26 Jul 2025",
    type: "Personal Team Project",
    description:
      "Developed an intelligent rental price prediction system using machine learning to help farmers access equipment at fair prices.",
    highlights: [
      "Built XGBoost-based price prediction model",
      "Processed & analyzed CSV datasets",
      "Contributed to ML pipeline and frontend UI",
      "Improved accessibility and reduced rental costs for farmers"
    ],
    tech: ["XGBoost", "Python", "Machine Learning", "React", "CSV Data"],
    github: "https://github.com/Vivek-KA"
  },
  {
    title: "Crime Management System",
    duration: "06 Feb 2025 – 18 Apr 2025",
    type: "College Project",
    description:
      "A full-stack web application to manage crime records digitally, improving efficiency and accuracy in record-keeping.",
    highlights: [
      "User authentication & role-based access",
      "CRUD operations for crime records",
      "Integrated frontend with MySQL database",
      "Streamlined crime report management"
    ],
    tech: ["PHP", "MySQL", "XAMPP", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vivek-KA"
  },
  {
    title: "CineWave",
    duration: "04 Aug 2025 – 01 Sep 2025",
    type: "Personal Project",
    description:
      "A Netflix-inspired streaming platform with a modern UI and advanced frontend features.",
    highlights: [
      "Video streaming interface",
      "User authentication system",
      "Content recommendation logic",
      "Fully responsive design across devices"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vivek-KA"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black px-6 md:px-24 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500" />
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Real-world projects showcasing problem-solving, technical expertise,
          and practical development experience.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl shadow-xl hover:scale-[1.03] transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-xl"
              >
                <FaGithub />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-4">
              <FaCalendarAlt />
              <span>{project.duration}</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs">
                {project.type}
              </span>
            </div>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-5">
              {project.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* 🎨 COLORFUL TECH STACK */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-sm rounded-full border transition hover:scale-105 ${
                    techColors[tech] ||
                    "bg-white/10 text-gray-300 border-white/20"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
