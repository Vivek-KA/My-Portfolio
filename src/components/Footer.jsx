import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-black border-t border-white/10
        px-4 sm:px-6 md:px-24   /* ✅ CHANGED */
        py-10 sm:py-12         /* ✅ CHANGED */
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 md:grid-cols-3
          gap-8 md:gap-10       /* ✅ CHANGED */
          items-center
          text-center md:text-left  /* ✅ CHANGED */
        "
      >
        {/* ===== Left: Branding ===== */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
            Vivek KA
          </h3>
          <p className="mt-3 text-gray-400 max-w-sm mx-auto md:mx-0">
            Passionate Software Developer focused on building modern, scalable,
            and impactful web applications.
          </p>
        </div>

        {/* ===== Center: Navigation ===== */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
          >
            <FaArrowUp />
            Back to top
          </button>
        </div>

        {/* ===== Right: Social Links ===== */}
        <div
          className="
            flex justify-center md:justify-end
            gap-4 sm:gap-5        /* ✅ CHANGED */
            text-lg sm:text-xl   /* ✅ CHANGED */
          "
        >
          <a
            href="https://github.com/Vivek-KA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:vivekka2005@gmail.com"
            className="text-gray-400 hover:text-white transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/vivek-ka-123456789/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* ===== Bottom Line ===== */}
      <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Vivek KA. All rights reserved.
      </div>
    </footer>
  );
}
