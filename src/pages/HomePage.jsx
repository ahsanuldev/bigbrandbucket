import React from 'react';
import Hero from '../components/homepage/Hero';
import ServicesMarquee from '../components/homepage/ServicesMarquee';
import TrustedBy from '../components/homepage/TrustedBy';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ServicesMarquee />
      <TrustedBy />
    </main>
  );
};

export default HomePage;
