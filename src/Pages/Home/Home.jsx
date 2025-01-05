import React from 'react';
import Header from '../../Components/Header/Header';
import AboutMe from '../About/AboutMe';
import Contact from '../Contact/Contact';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <Skills></Skills>
      {/* Projects */}
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;