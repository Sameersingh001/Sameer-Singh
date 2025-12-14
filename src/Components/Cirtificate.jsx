import React, { useState } from "react";

const App = () => {
  // Enhanced Flip Box Component
  const FlipBox = ({
    frontTitle,
    Dic,
    backTitle,
    backText,
    image,
    link,
    gradientFrom = "from-indigo-500",
    gradientTo = "to-pink-500",
    btnText = "View Project",
    btnColor = "bg-gradient-to-r from-white to-gray-100 text-indigo-600",
    rounded = "rounded-3xl",
    techStack = [],
    status = "Live"
  }) => {
    const [flipped, setFlipped] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4] [perspective:1200px] cursor-pointer relative group"
        onClick={() => setFlipped(!flipped)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500 ${hovered ? 'scale-105' : ''}`}></div>
        
        {/* Status badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
            {status}
          </span>
        </div>

        <div
          className={`relative w-full h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          } group-hover:[transform:rotateY(10deg)]`}
        >
          {/* Front Side - Enhanced */}
          <div
            className={`absolute w-full h-full ${rounded} overflow-hidden shadow-2xl  to-transparent backdrop-blur-sm border border-white/10 [backface-visibility:hidden] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:border-white/20`}
          >
            {/* Image with overlay */}
            <div className="relative w-full h-[70%] overflow-hidden">
              <img
                src={image}
                alt={frontTitle}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0  to-transparent"></div>
            </div>
            
            <div className="p-5 sm:p-6 flex flex-col justify-center relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {frontTitle}
                </h2>
                <div className="text-xs text-white/60">Click to flip →</div>
              </div>
              
              <h3 className="text-base sm:text-lg font-medium text-gray-200 mb-3">
                {Dic}
              </h3>
              
              {/* Tech stack pills */}
              {techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm text-xs text-gray-300 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Back Side - Enhanced */}
          <div
            className={`absolute w-full h-full ${rounded} shadow-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white p-5 sm:p-7 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border border-white/20`}
          >
            <div className="overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold">{backTitle}</h2>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  ← Back
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-sm sm:text-base leading-relaxed text-white/90 whitespace-pre-line">
                  {backText}
                </p>
              </div>
              
              {/* Feature highlights */}
              <div className="space-y-2 mb-6">
                {backText.split('\n').map((line, index) => (
                  line.trim() && line.includes('•') && (
                    <div key={index} className="flex items-start">
                      <span className="text-lg mr-2">•</span>
                      <span className="text-sm">{line.replace('•', '').trim()}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`block w-full px-5 py-3 ${btnColor} rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-center text-sm sm:text-base`}
              >
                {btnText}
              </a>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
                className="block w-full px-5 py-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                Flip back to preview
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 py-16 sm:py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4 px-4 py-2  backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-sm font-medium text-gray-300">Portfolio Showcase</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Minor Projects
            </span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of <span className="text-white font-medium">responsive, interactive projects</span> built with modern web technologies. 
            Each card represents a unique challenge and solution.
          </p>
          
          <div className="mt-8 flex justify-center items-center space-x-4">
            <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <div className="text-sm text-gray-400">Click or hover to explore</div>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid gap-10 sm:gap-12 lg:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <FlipBox
            frontTitle="MCPS Noida School"
            Dic="School Information Website"
            backTitle="MCPS Noida - Modern School Portal"
            backText="A fully responsive school information website built with modern web technologies. Features include a clean UI/UX design, mobile-first approach, and optimized performance for all devices."
            image="/Picture6.png"
            link="https://mcps-noida.netlify.app/"
            gradientFrom="from-purple-600"
            gradientTo="to-blue-600"
            btnText="Visit Website"
            btnColor="bg-gradient-to-r from-white to-gray-100 text-purple-600 hover:from-gray-100 hover:to-white"
            techStack={["HTML5", "CSS3", "JavaScript", "Responsive"]}
            status="Live Demo"
          />
          
          <FlipBox
            frontTitle="General Quiz App"
            Dic="Interactive Quiz Application"
            backTitle="Quiz Master - Interactive Learning"
            backText="• Multiple-choice quiz system with real-time scoring\n• Dynamic question loading and validation\n• Progress tracking and result display\n• Clean, intuitive user interface\n• Responsive design for all devices"
            image="/Project7.png"
            link="https://sameersingh001.github.io/Quiz-App/"
            gradientFrom="from-teal-600"
            gradientTo="to-green-600"
            btnText="Play Quiz"
            btnColor="bg-gradient-to-r from-white to-gray-100 text-teal-600 hover:from-gray-100 hover:to-white"
            techStack={["HTML5", "CSS3", "JavaScript", "Interactive"]}
            status="Live Demo"
          />
          
          <FlipBox
            frontTitle="Hindi Jokes API"
            Dic="REST API for Humor"
            backTitle="Laugh API - Humor in Hindi"
            backText="• RESTful API with 200+ curated Hindi jokes\n• JSON response format with metadata\n• CORS enabled for cross-origin requests\n• Deployed on Render with automatic scaling\n• Open source with MIT license"
            image="/joke.webp"
            link="https://hindi-jokes-api-c126.onrender.com/random/joke"
            gradientFrom="from-purple-600"
            gradientTo="to-indigo-600"
            btnText="Try API"
            btnColor="bg-gradient-to-r from-white to-gray-100 text-purple-600 hover:from-gray-100 hover:to-white"
            techStack={["Node.js", "Express", "REST API", "JSON"]}
            status="API Live"
          />
          
          {/* You can add more projects here following the same pattern */}
        </div>

        {/* Footer note */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-3 text-gray-400">
            <div className="w-8 h-px bg-gray-600"></div>
            <span className="text-sm">More projects coming soon</span>
            <div className="w-8 h-px bg-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;