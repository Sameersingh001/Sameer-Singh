import React, { useState } from "react";

const App = () => {
  // Flip Box Component
  const FlipBox = ({
    frontTitle,
    Dic,
    backTitle,
    backText,
    image,
    link,
    gradientFrom = "from-indigo-500",
    gradientTo = "to-pink-500",
    btnText = "Learn More",
    btnColor = "bg-white text-indigo-600 hover:bg-gray-200",
    rounded = "rounded-3xl"
  }) => {
    const [flipped, setFlipped] = useState(false);

    return (
      <div
        className={`w-full max-w-xs sm:max-w-sm aspect-[3/4] [perspective:1200px] cursor-pointer`}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-[120%] transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""
            } group hover:[transform:rotateY(180deg)]`}
        >
          {/* Front Side */}
          <div
            className={`absolute w-full h-full ${rounded} overflow-hidden shadow-xl bg-white/20 backdrop-blur-lg border border-white/30 [backface-visibility:hidden] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]`}
          >
            <img
              src={image}
              alt={frontTitle}
              className="w-full h-[70%] object-cover"
            />
            <div className="p-4 sm:p-5 flex flex-col justify-center">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {frontTitle}
              </h2>
              <br />
              <h3 className="text-md sm:text-md font-bold text-white">
                {Dic}
              </h3>
            </div>
          </div>

          {/* Back Side */}
          <div
            className={`absolute w-full h-full ${rounded} shadow-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white p-4 sm:p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]`}
          >
            <div>
              <h2 className="text-lg sm:text-2xl font-bold mb-3">{backTitle}</h2>
              <p className="text-sm sm:text-base leading-relaxed">{backText}</p>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 px-4 sm:px-5 py-2 sm:py-3 rounded-full font-semibold transition ${btnColor} text-sm sm:text-base`}
            >
              {btnText}
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
            Minor Projects
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my  responsive and interactive Minor projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <FlipBox
            frontTitle="MCPS Noida School"
            Dic='MCPS Noida : School Information Website HTML, CSS, JS'
            backTitle="MCPS Noida"
            backText="This project is a responsive and visually appealing school information website for MCPS Noida, built using HTML, CSS, and JavaScript. It provides a modern, user-friendly interface where visitors can explore details about the institution, including its mission, programs, facilities, and contact information."
            image="/Picture6.png"
            link="https://mcps-noida.netlify.app/"
            gradientFrom="from-purple-500"
            gradientTo="to-blue-500"
            btnText="View Project"
          />
          <FlipBox
            frontTitle="General Quiz App"
            Dic="A simple yet engaging Quiz Application built using HTML, CSS, and JavaScript."
            backTitle="General Quiz App"
            backText="Interactive multiple-choice quizzes: Users select answers, and the app handles logic to track responses.Score calculation: The app likely tracks and displays the user’s total correct answers.Basic UI/UX: Clean structure using index.html, styled with style.css, and interactivity managed through index.js."
            image="/Project7.png"
            link="https://sameersingh001.github.io/Quiz-App/"
            gradientFrom="from-teal-500"
            gradientTo="to-green-500"
            btnText="View App"
            btnColor="bg-white text-teal-600 hover:bg-gray-200"
          />
          <FlipBox
            frontTitle="Hindi Jokes API"
            Dic="A simple, interesting Hindi jokes API — Node.js + Express with JSON storage. Deployed on Render"
            backTitle="What you'll get"
            backText={`• 200+ Hindi jokes in JSON (id, category, title, punchline)\n• Easy REST endpoints: /jokes, /jokes/:id, /random\n• Use locally or deploy on Render/Vercel\n• MIT license, CORS enabled`}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBmhGjmUWG9L_UY8iW8pruoUdNqJtOGHtEEPfQGlWUo7IqfeMDPem8VKWB2MwJQOa1AY&usqp=CAU"
            link="https://hindi-jokes-api-c126.onrender.com/random/joke"
            gradientFrom="from-purple-500"
            gradientTo="to-indigo-500"
            btnText="Open App"
            btnColor="bg-white text-indigo-600 hover:bg-gray-100"
          />
        </div>
      </div>
    </section>
  );
};

export default App;
