import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 px-4 sm:px-6 md:px-10 py-4 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <span className="text-2xl font-bold text-emerald-300 tracking-wider select-none">
          Vivek
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#education" className="nav-link">Education</a></li>
          <li><a href="#experience" className="nav-link">Experience</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li>
            <a
              href="/Vivek_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black bg-emerald-300 px-5 py-2 rounded-full font-semibold shadow hover:bg-emerald-200 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-4 px-6 py-6 bg-black/80 backdrop-blur-xl rounded-xl mx-4">
          <ul className="flex flex-col gap-4 text-center">
            <li><a href="#home" onClick={() => setOpen(false)} className="nav-link">Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)} className="nav-link">About</a></li>
            <li><a href="#education" onClick={() => setOpen(false)} className="nav-link">Education</a></li>
            <li><a href="#experience" onClick={() => setOpen(false)} className="nav-link">Experience</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)} className="nav-link">Skills</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)} className="nav-link">Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)} className="nav-link">Contact</a></li>
            <li>
              <a
                href="/Vivek_KA_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-black bg-emerald-300 px-5 py-2 rounded-full font-semibold shadow hover:bg-emerald-200 transition"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .nav-link {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.85);
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
