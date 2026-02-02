import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 px-10 py-5 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <span className="text-2xl font-bold text-emerald-300 tracking-wider select-none">
          Vivek
        </span>
        <ul className="flex gap-8">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li>
            <a
              href="src/assets/Vivek_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-black bg-emerald-300 px-5 py-2 rounded-full font-semibold shadow hover:bg-emerald-200 transition duration-200"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <style>{`
        .nav-link {
          font-size: 1.125rem;
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #34d399;
        }
      `}</style>
    </nav>
  );
}