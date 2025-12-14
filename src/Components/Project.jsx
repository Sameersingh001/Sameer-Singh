import React, { useEffect, useRef } from "react";
import { ExternalLink, Code, Github } from "lucide-react";

const projects = [
  {
    title: "Intern Management System",
    image: '/Project9.png',
    description: "A comprehensive platform to manage internship programs, track intern progress, assign mentors, and streamline the entire internship lifecycle with automated reporting.",
    link: "https://intern-management-system.vercel.app/",
    repo: "https://github.com/Sameersingh001/IMS_team_project",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
  },
  {
    title: "Student Management System",
    image: 'Project15.png',
    description: "A full-stack application for educational institutions to manage student records, attendance, grades, and academic performance with real-time analytics and reporting.",
    link: "NOT LIVE YET",
    repo: "https://github.com/Sameersingh001/Chhatrakosh",
    tags: ["React", "Express.js", "MySQL", "REST API", "Chart.js"],
  },
  {
    title: "Employee Management System",
    image: '/Project8.png',
    description: "A web-based Employee Management System to handle employee records, roles, and organizational data efficiently.",
    link: "https://ems-xutx.onrender.com/",
    repo: "https://github.com/Sameersingh001/EMS/tree/master",
    tags: ["React", "Express.js", "ejs", "Rest Api", "Render"],
  },
  {
    title: "Desi Jugaad App",
    image: '/Project1.png',
    description: "Creative Desi Jugaad app showcasing unique Indian hacks with categories, tips, and smart everyday solutions.",
    link: "https://desi-jugaad-app.vercel.app/",
    repo: "https://github.com/Sameersingh001/Desi-Jugaad-App",
    tags: ["React", "Node.js", "Rest Api"],
  },
  {
    title: "Sundown Clone",
    image: '/Project2.png',
    description: "A modern, responsive music streaming frontend built with HTML, CSS, and JavaScript, offering a sleek interface, smooth animations, and playlist management for an engaging user experience.",
    link: "https://sundown-studio-clone-app.netlify.app/",
    repo: "",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Education Platform",
    image: '/Project3.png',
    description: "An interactive coding practice platform frontend built with HTML, CSS, and JavaScript, featuring responsive design, real-time code editing UI, and a clean, user-friendly interface for learners.",
    link: "https://codymasterweb.kesug.com/login.php",
    repo: "#",
    tags: ["PHP", "MySQL", "Infinity Free", "HTML", "CSS", "JS"],
  },
  {
    title: "Master OS",
    image: '/Project4.png',
    description: "MasterOS is a lightweight, static website built using HTML, CSS, and JavaScript, designed to showcase simplicity and elegance. It delivers a seamless user experience without any reliance on server-side rendering",
    link: "https://master-os.vercel.app/",
    repo: "https://github.com/Sameersingh001/Master-OS",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Inian Jugaad API",
    image: '/Project5.png',
    description: "Indian Jugaad API is a creative and fun REST API that provides a large collection of unique Indian life hacks, quick fixes, and ingenious workarounds — locally known as jugaads.It delivers ready-to-use JSON data, each entry enriched with",
    link: "https://indian-jugaad-api.onrender.com/",
    repo: "https://github.com/Sameersingh001/Indian_jugaad_api_",
    tags: ["HTML", "Tailwind", "JS", "Express", "CORS", "Render"],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-[#0f1f44] dark:via-[#162952] dark:to-[#1f2f5f] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Animated header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-700 via-blue-600 to-purple-600 dark:from-teal-300 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my journey through <span className="font-semibold text-teal-600 dark:text-teal-400">full-stack development</span>.
            Each project represents a unique challenge and solution, crafted with modern technologies.
          </p>
        </div>

        {/* Projects grid with equal visualization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:duration-300 opacity-0 translate-y-10 animate-in fade-in slide-in-from-bottom-10"
              style={{
                animationDelay: `${index * 75}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl group-hover:blur-lg"></div>

              {/* Main card - Equal height for all */}
              <div className="relative flex flex-col h-full bg-white/80 dark:bg-[#1a2b5f]/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden group-hover:border-transparent transition-all duration-500 group-hover:shadow-xl lg:group-hover:shadow-2xl group-hover:-translate-y-1 lg:group-hover:-translate-y-2">

                {/* Project image with consistent aspect ratio */}
                <div className="relative overflow-hidden flex-shrink-0">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 lg:group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent dark:from-black/10"></div>
                </div>

                {/* Content area - Equal distribution */}
                <div className="flex-1 p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col">
                  <div className="flex flex-col h-full">
                    {/* Title and description */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 line-clamp-2 sm:line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech tags - Pushes buttons to bottom */}
                    <div className="mt-auto mb-4 sm:mb-5">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.slice(0, 4).map((tag, idx) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-700 dark:text-teal-300 text-xs font-medium rounded-full border border-teal-200 dark:border-teal-700/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md truncate max-w-[120px] sm:max-w-none"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-full">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action buttons - Stack on mobile */}
                    <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] truncate"
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="truncate">Live Demo</span>
                      </a>

                      {project.repo && project.repo !== "#" && project.repo !== "" ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] truncate"
                        >
                          <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">Source Code</span>
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex-1 min-w-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gray-100 dark:bg-gray-800 text-gray-400 font-semibold text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-700 cursor-not-allowed truncate"
                        >
                          <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">Private Repo</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animations and equal heights */}

    </section>

    
  );
};

export default Projects;