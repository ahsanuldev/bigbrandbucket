import React from 'react';
import ServiceHero from '../components/shared/ServiceHero';
import FeatureGridSection from '../components/shared/FeatureGridSection';
import TrustedBy from '../components/shared/TrustedBy';
import WorkingProcess from '../components/shared/WorkingProcess';
import PortfolioSection from '../components/shared/PortfolioSection';
import DistinctiveEdge from '../components/shared/DistinctiveEdge';
import FaqSection from '../components/shared/FaqSection';
import TestimonialsSection from '../components/shared/TestimonialsSection';

import webDevBg from '../assets/service/web-development.webp';
import featureVisual from '../assets/service/web-deve.png';

const featureData = {
  titlePart1: "Custom",
  highlightedTitle: "Web Development",
  titlePart2: "Agency",
  description: (
    <>
      Partnering with <strong>Big Brand Bucket</strong> for custom web application development helps you streamline operations, boost efficiency, and accelerate business growth with scalable, secure, and high-performance solutions.
    </>
  ),
  image: featureVisual,
  features: [
    {
      number: "01.",
      title: "Streamline Business Processes",
      description: "Our custom web applications simplify complex workflows, automate operations, and centralize data—helping your business operate more efficiently and make smarter decisions."
    },
    {
      number: "02.",
      title: "Gain a Competitive Edge",
      description: "We build feature-rich, future-ready web applications that differentiate your business from competitors, enabling better customer engagement and stronger market positioning."
    },
    {
      number: "03.",
      title: "Enhanced Efficiency",
      description: "Our performance-optimized web solutions improve speed, reliability, and usability, ensuring seamless experiences for both internal teams and end users."
    },
    {
      number: "04.",
      title: "Customizable & Scalable",
      description: "Designed to grow with your business, our web applications are fully customizable and scalable—adapting effortlessly to changing requirements and expanding user demands."
    }
  ]
};

const WebDevelopmentPage = () => {
  return (
    <main>
      <ServiceHero 
        eyebrow="Leading Web Development Company:"
        title="Scalable & High-Performance Web Solutions for Your Business"
        description="Unlock the power of custom web development services designed to create fast, secure, and user-centric digital experiences that drive growth and conversions."
        checklist={[
          "Custom website development",
          "Responsive & mobile-first design",
          "Agile development approach",
          "SEO-friendly architecture",
          "Seamless third-party integrations"
        ]}
        bgImage={webDevBg}
      />

      <FeatureGridSection {...featureData} />

      <TrustedBy />
      <WorkingProcess />
      <PortfolioSection />
      <DistinctiveEdge />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
};

export default WebDevelopmentPage;
