import React from 'react';
import HeroBanner from './HeroBanner';
import ResponsiveSection from './ResponsiveSection'
import Services from './Services';
import Plans from './Plans';
import Technologies from './Technologies';
import AboutSection from './AboutSection';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ResponsiveSection />
      <Services />
      <Plans />
      <Technologies />
      <AboutSection />
      <Contact />
    </div>
  );
};

export default Home;