import React from 'react';
import Hero from '../components/homepage/Hero';
import ServicesMarquee from '../components/homepage/ServicesMarquee';
import TrustedBy from '../components/homepage/TrustedBy';
import AboutUs from '../components/homepage/AboutUs';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ServicesMarquee />
      <TrustedBy />
      <AboutUs />
    </main>
  );
};

export default HomePage;
