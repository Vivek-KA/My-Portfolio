import React, { useState } from "react";
import profileImg from "../assets/profile.jpeg";

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-6 md:px-24 py-20"
      style={{
        background: "black"
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Circular Profile Image with gradient border and hover scale */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <div className="rounded-full p-1 bg-gradient-to-tr from-emerald-400 via-blue-400 to-violet-500 shadow-2xl transition-transform duration-300 hover:scale-105">
            <img
              src={profileImg}
              alt="Profile"
              className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover bg-black/30 transition-transform duration-300 hover:scale-105"
              style={{
                boxShadow: "0 8px 40px 0 rgba(16, 185, 129, 0.18)"
              }}
            />
          </div>
        </div>

        {/* Merged About Text with pop/glow on hover */}
        <div
          className={`px-2 py-2 max-w-xl w-full transition-all duration-300 cursor-pointer ${
            hovered ? "scale-105 shadow-[0_0_32px_0_rgba(52,211,153,0.25)]" : ""
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
            About <span className="text-white">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-4 font-light leading-relaxed tracking-wide">
            I’m <span className="text-emerald-300 font-semibold">Vivek KA</span>, a passionate software developer with a love for building beautiful, performant web applications.
          </p>
          <p className="text-base md:text-lg text-gray-300 font-normal leading-relaxed mb-8">
            My expertise includes <span className="text-emerald-200 font-semibold">React</span>, <span className="text-blue-300 font-semibold">Java</span>, and full stack development. I enjoy solving complex problems, learning new technologies, and collaborating with creative teams to deliver exceptional digital experiences.
          </p>
          <a
            href="src/public/Vivek_resume.pdf"
            download="Vivek_resume.pdf"
            target="_self"
            className="inline-block px-7 py-3 bg-gradient-to-r from-emerald-400 to-blue-500 text-white rounded-full font-semibold shadow hover:from-blue-500 hover:to-emerald-400 transition-all duration-200 hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}