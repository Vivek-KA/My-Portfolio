import React from "react";
import schoolLogo from "../assets/school_logo.png";
import collegeLogo from "../assets/college_logo.png";
import universityLogo from "../assets/university_logo.jpg";

const educationData = [
  {
    logo: schoolLogo,
    institution: "Poornaprajna Education Centre",
    year: "2019",
    score: "89.76%",
    location: "Chikkamagakuru, Karnataka"
  },
  {
    logo: collegeLogo,
    institution: "BGS PU College",
    degree: "State Board (XII) - PCMC",
    year: "2021",
    score: "86.16%",
    location: "Chikkamagakuru, Karnataka"
  },
  {
    logo: universityLogo,
    institution: "Reva University",
    degree: "B.Tech in Computer Science and Information Technology",
    year: "2021 - 2025",
    score: "8.0 CGPA",
    location: "Bangalore, Karnataka"
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="
        min-h-screen w-full flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-16 lg:px-24   /* ✅ CHANGED */
        py-16 sm:py-20                  /* ✅ CHANGED */
        bg-black
      "
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-12 bg-gradient-to-r from-emerald-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="flex flex-col gap-10 sm:gap-12 w-full max-w-4xl">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col md:flex-row items-center
              gap-6 md:gap-10                /* ✅ CHANGED */
              ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
              group
            `}
          >
            {/* Logo */}
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3">
              <div className="rounded-full p-1 bg-gradient-to-tr from-emerald-400 via-blue-400 to-violet-500 shadow-2xl">
                <img
                  src={edu.logo}
                  alt={edu.institution + " logo"}
                  className="
                    w-16 h-16 sm:w-20 sm:h-20   /* ✅ CHANGED */
                    object-contain rounded-full
                    border-2 border-emerald-300
                    bg-white/20 shadow-lg
                  "
                />
              </div>
            </div>

            {/* Card */}
            <div
              className="
                flex-1 rounded-3xl
                px-5 sm:px-8                /* ✅ CHANGED */
                py-6 sm:py-8                /* ✅ CHANGED */
                bg-white/10 border border-white/20
                shadow-2xl backdrop-blur-2xl
                transition-transform duration-300
                group-hover:scale-105
              "
              style={{
                background:
                  "linear-gradient(120deg, rgba(30,30,40,0.85) 0%, rgba(40,40,40,0.92) 100%)",
                border: "1.5px solid rgba(255,255,255,0.10)"
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-base sm:text-lg text-emerald-200 font-semibold mb-1">
                {edu.institution}
              </p>
              <p className="text-sm sm:text-base text-gray-400 mb-1">
                {edu.location}
              </p>
              <p className="text-sm sm:text-base text-blue-300 mb-1">
                {edu.year}
              </p>
              <p className="text-sm sm:text-base text-violet-300 font-semibold">
                {edu.score}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
