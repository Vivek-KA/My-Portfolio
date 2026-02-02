import React from "react";
import { FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-6 md:px-24 py-24 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ===== Left Content ===== */}
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-300 via-sky-400 to-violet-500 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500" />

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Have an idea, a project, or an opportunity in mind?  
            I’m always open to discussing new challenges, collaborations,
            and innovative ideas. Let’s build something meaningful together.
          </p>

          <div className="mt-8 space-y-4 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-emerald-400 text-xl" />
              <span>vivekka2005@gmail.com</span>
            </div>
          </div>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="relative bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl shadow-xl">
          
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-violet-500/10 opacity-60 pointer-events-none" />

          <form className="relative z-10 space-y-6">
            
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus-within:border-emerald-400 transition">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent text-gray-200 outline-none placeholder-gray-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus-within:border-sky-400 transition">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-gray-200 outline-none placeholder-gray-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your idea or project..."
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-gray-200 outline-none placeholder-gray-500 focus:border-violet-400 transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 hover:opacity-90 transition"
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
