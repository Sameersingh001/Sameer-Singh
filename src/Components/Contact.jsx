import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // 1. Format the phone number (remove non-numeric characters except '+')
  const phoneNumber = "+916396949336"; // Your number from the contact card
  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');

  // 2. Construct the message
  const whatsappMessage = `*New Contact Form Submission*%0A%0A` + // %0A is a line break
                          `*Name:* ${formData.name}%0A` +
                          `*Email:* ${formData.email}%0A` +
                          `*Subject:* ${formData.subject}%0A` +
                          `*Message:* ${formData.message}`;

  // 3. Create the WhatsApp URL [citation:6][citation:7]
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${whatsappMessage}`;

  // 4. Open WhatsApp in a new tab/window
  window.open(whatsappUrl, '_blank');

  // Optional: Reset form and show alert
  console.log("Form submitted. Opening WhatsApp:", formData);
  alert("Thank you! Opening WhatsApp to send your message.");

  setFormData({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
};

  return (
    <section
      id="contact"
      className="py-16 sm:py-20
      bg-gradient-to-r from-blue-50 to-blue-100
      animate-fade-in"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-wide">
        Let's Connect
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        {/* Main grid with form and contact cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="gmail.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Methods */}
          <div className="space-y-6">
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {/* GitHub */}
              <a
                href="https://github.com/Sameersingh001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group
                  flex items-center
                  bg-white
                  shadow-lg hover:shadow-xl
                  rounded-2xl
                  p-6
                  transition-all duration-300
                  hover:scale-[1.02]
                  h-full
                "
              >
                <div className="flex items-center space-x-4">
                  <i className="fab fa-github text-3xl text-gray-800 group-hover:scale-110 transition-transform"></i>
                  <div>
                    <p className="font-semibold text-gray-800">GitHub</p>
                    <p className="text-sm text-gray-600">View my projects</p>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sameer-singh-005682276/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  flex items-center
                  bg-white
                  shadow-lg hover:shadow-xl
                  rounded-2xl
                  p-6
                  transition-all duration-300
                  hover:scale-[1.02]
                  h-full
                "
              >
                <div className="flex items-center space-x-4">
                  <i className="fab fa-linkedin text-3xl text-blue-600 group-hover:scale-110 transition-transform"></i>
                  <div>
                    <p className="font-semibold text-gray-800">LinkedIn</p>
                    <p className="text-sm text-gray-600">Connect professionally</p>
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916396949336" // Replace with your actual phone number
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  group
                  flex items-center
                  bg-white
                  shadow-lg hover:shadow-xl
                  rounded-2xl
                  p-6
                  transition-all duration-300
                  hover:scale-[1.02]
                  h-full
                "
              >
                <div className="flex items-center space-x-4">
                  <i className="fab fa-whatsapp text-3xl text-green-500 group-hover:scale-110 transition-transform"></i>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-sm text-gray-600">Chat directly</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:mrsameersingh001@gmail.com"
                aria-label="Email"
                className="
                  group
                  flex items-center
                  bg-white
                  shadow-lg hover:shadow-xl
                  rounded-2xl
                  p-6
                  transition-all duration-300
                  hover:scale-[1.02]
                  h-full
                "
              >
                <div className="flex items-center space-x-4">
                  <i className="fas fa-envelope text-3xl text-red-500 group-hover:scale-110 transition-transform"></i>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-sm text-gray-600">mrsameersingh001@gmail.com</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Contact Info Box */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-clock"></i>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-blue-100">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-blue-100">Based in India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Feel free to reach out through any of these channels. I'm always open to discussing new opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;