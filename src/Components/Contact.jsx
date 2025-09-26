import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 animate-fade-in">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-wide">
        Let’s Connect
      </h2>

      <div className="flex justify-center space-x-3">
        {/* GitHub */}
        <a
          href="https://github.com/Sameersingh001"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-40 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          aria-label="GitHub"
        >
          <i className="fab fa-github text-4xl text-gray-800 mb-3"></i>
          <p>Git Hub</p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sameer-singh-005682276/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-40 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin text-4xl text-blue-600 mb-3"></i>
          <p>LinkedIn</p>
        </a>

        {/* Email */}
        <a
          href="mailto:mrsameersingh001@gmail.com"
          className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-40 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          aria-label="Email"
        >
          <i className="fas fa-envelope text-4xl text-red-500 mb-3"></i>
          <p>Email</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
