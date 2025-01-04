import React from 'react';
import Header from '../../Components/Header/Header';
import AboutMe from '../About/AboutMe';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* Skills */}

      {/* About me */}
      <AboutMe></AboutMe>
      {/* Projects */}
      
      <Contact></Contact>
    </div>
  );
};

export default Home;