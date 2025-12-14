import React from "react";
import { Download, Award } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-white to-teal-50"
    >
      {/* Decorative blobs (existing animations preserved) */}
      <motion.div
        className="pointer-events-none absolute -top-8 -left-8 w-48 h-48 sm:w-60 sm:h-60 bg-gradient-to-tr from-teal-300 to-indigo-400 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-green-300 to-teal-500 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left / Profile Card - Add scroll-triggered fade and slide */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-6 border-teal-400 shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="/main.jpg"
                alt="Profile of Sameer Singh"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full ring-3 ring-teal-300 mix-blend-overlay" />
            </motion.div>

            <motion.h2
              className="mt-5 text-xl sm:text-2xl font-bold text-teal-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Sameer Singh
            </motion.h2>
            <p className="mt-1 text-xs sm:text-sm uppercase tracking-wider text-teal-600">
              Full Stack Web Developer
            </p>

            <motion.a
              href="https://drive.google.com/file/d/1GNI9AgtHPDQ1Cj5swXknFOyiEavoICrH/view?usp=sharing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="mt-5 w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-800 text-white px-5 py-2 rounded-full font-medium shadow-lg transition max-w-[240px]">
                <Download className="w-6 h-6 " />
                Download Resume
              </button>
            </motion.a>
          </motion.div>

          {/* Right / Bio + Skills - Add scroll-triggered entry */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-2xl border border-teal-200 relative overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-teal-800 mb-3">
                About Me
              </h3>
              <motion.p
                className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I am a passionate Full Stack Web Developer with expertise in React, Node.js, and modern web technologies. I specialize in building scalable, high-performance, and user-centric applications that combine clean architecture with thoughtful user experiences.

                Alongside my development work, I am continuously expanding my knowledge in areas such as cloud deployment, API design, system optimization, and emerging frameworks to stay aligned with industry best practices. My learning-driven approach ensures that I not only deliver production-ready digital solutions but also grow consistently as a developer.
              </motion.p>

              {/* Skills - Stagger progress bars on scroll */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-2 font-medium text-teal-600">Core Skills</div>
                  {[
                    { name: "React", level: 90 },
                    { name: "Node.js", level: 85 },
                    { name: "JavaScript", level: 80 },
                    { name: "Tailwind CSS", level: 85 },
                  ].map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    >
                      <div className="flex justify-between text-xs sm:text-sm font-medium mb-1">
                        <span className="text-gray-800">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-green-300"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="mb-2 font-medium text-teal-600">
                    Tools & Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["REST APIs", "Git", "Vercel", "Node js", "Mongo DB"].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-1 bg-teal-50 text-teal-800 text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Callout - Slide in on scroll */}
              <motion.div
                className="mt-8 p-4 sm:p-5 bg-gradient-to-r from-teal-100 to-green-100 rounded-2xl flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#contact"
                    className="inline-block w-full sm:w-auto text-center px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition"
                  >
                    Let’s Talk
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
