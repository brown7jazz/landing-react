import React from 'react';
import HeroBanner from './HeroBanner';
import Services from './Services';
import Plans from './Plans';
import Technologies from './Technologies';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Services />
      <Plans />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;