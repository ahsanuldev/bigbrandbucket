import React from 'react';
import Hero from '../components/homepage/Hero';
import ServicesMarquee from '../components/homepage/ServicesMarquee';
import TrustedBy from '../components/homepage/TrustedBy';
import AboutUs from '../components/homepage/AboutUs';
import WebsiteDesignSection from '../components/homepage/WebsiteDesignSection';
import ServicesWeOffer from '../components/homepage/ServicesWeOffer';
import IdeaSolutionSection from '../components/homepage/IdeaSolutionSection';
import TechStackSection from '../components/homepage/TechStackSection';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ServicesMarquee />
      <TrustedBy />
      <AboutUs />
      <WebsiteDesignSection />
      <ServicesWeOffer />
      <IdeaSolutionSection />
      <TechStackSection />
    </main>
  );
};

export default HomePage;
