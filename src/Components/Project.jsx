import React from "react";
import { ExternalLink, Code, Star } from "lucide-react";

const projects = [
  {
    title: "Desi Jugaad App",
    image: '/Project1.png',
    description: "Creative Desi Jugaad app showcasing unique Indian hacks with categories, tips, and smart everyday solutions.",
    link: "https://desi-jugaad-app.vercel.app/",
    repo: "https://github.com/Sameersingh001/Desi-Jugaad-App",
    tags: ["React", "Node.js", "Rest Api"],
    featured: false,
  },
  {
    title: "Sundown Clone",
    image: '/Project2.png',
    description:"A modern, responsive music streaming frontend built with HTML, CSS, and JavaScript, offering a sleek interface, smooth animations, and playlist management for an engaging user experience.",
    link: "https://sundown-studio-clone-app.netlify.app/",
    repo: "",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
  },
  {
    title: "Education Platform",
    image: '/Project3.png',
    description: "An interactive coding practice platform frontend built with HTML, CSS, and JavaScript, featuring responsive design, real-time code editing UI, and a clean, user-friendly interface for learners.",
    link: "https://codymasterweb.kesug.com/login.php",
    repo: "#",
    tags: ["PHP", "MySQL", "Infinity Free", "HTML", "CSS" ,"JS"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 mt-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50 dark:from-[#0f1f44] dark:to-[#1f2f5f] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-teal-800 dark:text-teal-300">
            Projects
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selected work that reflects my ability to build modern, performant,
            and user-centered web applications. Explore live demos or view source.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`
                relative flex flex-col justify-between rounded-2xl p-6 shadow-2xl overflow-hidden border transition-transform
                hover:scale-[1.03] dark:bg-[#1f2f5f]
                ${project.featured ? "border-teal-500" : "border-transparent"}
              `}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-green-300 to-teal-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  <Star className="w-4 h-4" />
                  Featured
                </div>
              )}


              <div>
                <img src={project.image} alt="Project image" className="rounded-2xl" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 bg-teal-50 dark:bg-[#23335d] text-teal-700 dark:text-teal-300 text-[10px] font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    aria-label={`View live demo of ${project.title}`}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                  <a
                    href={project.repo}
                    aria-label={`View source code of ${project.title}`}
                    className="inline-flex items-center gap-2 border border-teal-600 hover:bg-teal-50 dark:hover:bg-[#23335d] text-teal-600 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium transition"
                  >
                    <Code className="w-4 h-4" />
                    Source
                  </a>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {project.featured
                    ? "Highlighted project with recent updates"
                    : "Standard project"}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-teal-200 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
