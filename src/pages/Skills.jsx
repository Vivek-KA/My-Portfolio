import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiMysql,
  SiFirebase,
  SiVercel,
  SiNetlify
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Material UI", icon: <SiMui className="text-blue-600" /> }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node JS", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> }
    ]
  },
  {
    category: "Languages",
    items: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> }
    ]
  }
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 md:px-24 py-20"
      style={{
        background: "black"
      }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <p className="text-lg text-gray-300 mb-12 text-center max-w-2xl">
        A collection of my technical skills and expertise honed through projects
        and hands-on experience
      </p>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl px-8 py-8 bg-white/10 border border-white/20 shadow-xl backdrop-blur-xl transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-6">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/30 border border-white/10 text-2xl transition-transform duration-200 hover:scale-110">
                    {skill.icon}
                  </div>
                  <span className="text-base text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
