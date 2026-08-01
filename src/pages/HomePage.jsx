import React from 'react';
import Hero from '../components/homepage/Hero';
import ServicesMarquee from '../components/homepage/ServicesMarquee';
import TrustedBy from '../components/shared/TrustedBy';
import AboutUs from '../components/homepage/AboutUs';
import WebsiteDesignSection from '../components/homepage/WebsiteDesignSection';
import ServicesWeOffer from '../components/homepage/ServicesWeOffer';
import IdeaSolutionSection from '../components/homepage/IdeaSolutionSection';
import TechStackSection from '../components/homepage/TechStackSection';
import IndustriesWeServeSection from '../components/homepage/IndustriesWeServeSection';
import PortfolioSection from '../components/shared/PortfolioSection';
import GlobalPresenceSection from '../components/shared/GlobalPresenceSection';
import TestimonialsSection from '../components/shared/TestimonialsSection';
import ContactSection from '../components/homepage/ContactSection';
import FaqSection from '../components/shared/FaqSection';

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
      <ContactSection />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;
