import React from 'react';
import HeaderSidebarLayout from './Components/Header'; // Updated import
import Skills from './Components/Skill';
import About from './Components/About';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <HeaderSidebarLayout>
      {/* Main content */}  
      <About />
    </ HeaderSidebarLayout >
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
