import React from 'react';
import Hero from '../components/homepage/Hero';
import ServicesMarquee from '../components/homepage/ServicesMarquee';
import TrustedBy from '../components/homepage/TrustedBy';
import AboutUs from '../components/homepage/AboutUs';
import WebsiteDesignSection from '../components/homepage/WebsiteDesignSection';
import ServicesWeOffer from '../components/homepage/ServicesWeOffer';
import IdeaSolutionSection from '../components/homepage/IdeaSolutionSection';
import TechStackSection from '../components/homepage/TechStackSection';
import IndustriesWeServeSection from '../components/homepage/IndustriesWeServeSection';
import PortfolioSection from '../components/homepage/PortfolioSection';
import GlobalPresenceSection from '../components/homepage/GlobalPresenceSection';
import FaqSection from '../components/homepage/FaqSection';

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
      <PortfolioSection />
      <IndustriesWeServeSection />
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default HomePage;
