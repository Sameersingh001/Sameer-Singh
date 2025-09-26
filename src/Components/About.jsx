import React from "react";
import { Download, Award } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-white to-teal-50"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-8 -left-8 w-48 h-48 sm:w-60 sm:h-60 bg-gradient-to-tr from-teal-300 to-indigo-400 rounded-full blur-3xl opacity-30 animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-green-300 to-teal-500 rounded-full blur-3xl opacity-25 animate-blob animation-delay-2000" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left / Profile Card */}
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-6 border-teal-400 shadow-2xl">
              <img
                src="/Profile.jpg"
                alt="Profile of Sameer Singh"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full ring-3 ring-teal-300 mix-blend-overlay" />
            </div>
            <h2 className="mt-5 text-xl sm:text-2xl font-bold text-teal-800">
              Sameer Singh
            </h2>
            <p className="mt-1 text-xs sm:text-sm uppercase tracking-wider text-teal-600">
              Full Stack Web Developer
            </p>
            <a href="https://drive.google.com/file/d/1mfWdd8W0xHSvx-fy8W9zHr7agqDcmkQ4/view?usp=sharing">
            <button className="mt-5 w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-800 text-white px-5 py-2 rounded-full font-medium shadow-lg transition max-w-[240px]">
              <Download className="w-6 h-6 " />
              Download Resume
            </button>
            </a>
          </div>

          {/* Right / Bio + Skills */}
          <div className="flex-1">
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-2xl border border-teal-200 relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "url(\"data:image/svg+xml;utf8,<svg width='500' height='500' xmlns='http://www.w3.org/2000/svg'><circle cx='250' cy='250' r='200' fill='none' stroke='rgba(16,185,129,0.05)' stroke-width='40'/></svg>\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-3">
                About Me
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                I&apos;m a passionate full stack web developer specializing in React,
                Node.js, and modern web technologies. I build scalable, performant, and
                user-centric applications. My approach blends clean architecture with
                thoughtful UX to turn ideas into production-ready digital experiences.
              </p>

              {/* Skill badges + bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-2 font-medium text-teal-600">Core Skills</div>
                  {[
                    { name: "React", level: 90 },
                    { name: "Node.js", level: 85 },
                    { name: "JavaScript", level: 80 },
                    { name: "Tailwind CSS", level: 85 },
                  ].map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between text-xs sm:text-sm font-medium mb-1">
                        <span className="text-gray-800">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-green-300 transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="mb-2 font-medium text-teal-600">
                    Tools & Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "REST APIs",
                      "Git",
                      "Vercel",
                      "Node js",
                      "Mongo DB",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 bg-teal-50 text-teal-800 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="mt-8 p-4 sm:p-5 bg-gradient-to-r from-teal-100 to-green-100 rounded-2xl flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex-shrink-0">
                  <Award className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-teal-800">
                    Looking for a project partner or freelance opportunity?
                  </div>
                  <div className="text-xs text-gray-700">
                    I&apos;m available for new web application projects—let&apos;s build
                    something impactful together.
                  </div>
                </div>
                <div className="self-stretch sm:self-auto">
                  <a
                    href="#contact"
                    className="inline-block w-full sm:w-auto text-center px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition"
                  >
                    Let’s Talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
