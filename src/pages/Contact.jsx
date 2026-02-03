import React from "react";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen bg-black flex items-center justify-center
        px-4 sm:px-6 md:px-16 lg:px-24   /* ✅ CHANGED */
        py-16 sm:py-24                  /* ✅ CHANGED */
      "
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        
        {/* ===== Left Content ===== */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500 mx-auto md:mx-0" />

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            Have an idea, a project, or an opportunity in mind?  
            I’m always open to discussing new challenges, collaborations,
            and innovative ideas. Let’s build something meaningful together.
          </p>

          <div className="mt-6 sm:mt-8 space-y-4 text-gray-300">
            <div className="flex justify-center md:justify-start items-center gap-4">
              <FaEnvelope className="text-emerald-400 text-lg sm:text-xl" />
              <span className="text-sm sm:text-base">
                vivekka2005@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="relative bg-white/10 border border-white/20 rounded-3xl p-5 sm:p-8 backdrop-blur-xl shadow-xl">
          
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-violet-500/10 opacity-60 pointer-events-none" />

          <form className="relative z-10 space-y-5 sm:space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus-within:border-emerald-400 transition">
                <FaUser className="text-gray-400 text-sm sm:text-base" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent text-sm sm:text-base text-gray-200 outline-none placeholder-gray-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus-within:border-sky-400 transition">
                <FaEnvelope className="text-gray-400 text-sm sm:text-base" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-sm sm:text-base text-gray-200 outline-none placeholder-gray-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your idea or project..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-gray-200 outline-none placeholder-gray-500 focus:border-violet-400 transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold text-sm sm:text-base text-black bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 hover:opacity-90 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
