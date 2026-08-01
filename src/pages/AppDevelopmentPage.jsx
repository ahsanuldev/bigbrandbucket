import React from 'react';
import ServiceHero from '../components/shared/ServiceHero';
import FeatureGridSection from '../components/shared/FeatureGridSection';
import TrustedBy from '../components/shared/TrustedBy';
import WorkingProcess from '../components/shared/WorkingProcess';
import PortfolioSection from '../components/shared/PortfolioSection';
import DistinctiveEdge from '../components/shared/DistinctiveEdge';
import FaqSection from '../components/shared/FaqSection';
import TestimonialsSection from '../components/shared/TestimonialsSection';

import featureVisual from '../assets/service/african-american-business-associates-reviewing-data-analytics-scaled.jpg';

const featureData = {
  titlePart1: "Custom",
  highlightedTitle: "App Development",
  titlePart2: "Agency",
  description: (
    <>
      Partnering with <strong>Big Brand Bucket</strong> for mobile app development helps you streamline operations, improve user engagement, and accelerate growth with secure, scalable, and high-performance applications.
    </>
  ),
  image: featureVisual,
  features: [
    {
      number: "01.",
      title: "Streamline Business Processes",
      description: "Our mobile apps automate workflows, simplify operations, and improve real-time accessibility—boosting productivity and decision-making."
    },
    {
      number: "02.",
      title: "Gain a Competitive Edge",
      description: "We build feature-rich, future-ready apps that help your brand stand out and deliver exceptional user experiences."
    },
    {
      number: "03.",
      title: "Enhanced Efficiency",
      description: "Our performance-optimized apps ensure speed, stability, and seamless functionality across devices and platforms."
    },
    {
      number: "04.",
      title: "Customizable & Scalable",
      description: "Designed for growth, our mobile apps are fully customizable and scalable to evolve with your business needs."
    }
  ]
};

const AppDevelopmentPage = () => {
  return (
    <main>
      <ServiceHero 
        eyebrow="Leading App Development Company"
        title="Scalable & High-Performance Mobile App Solutions for Your Business"
        description="Unlock the power of custom app development services designed to build fast, secure, and user-centric mobile applications that drive engagement, efficiency, and business growth."
        checklist={[
          "Custom mobile app development",
          "Agile development methodology",
          "iOS & Android app development",
          "Secure APIs & third-party integrations",
          "UI/UX-driven app design"
        ]}
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

export default AppDevelopmentPage;
