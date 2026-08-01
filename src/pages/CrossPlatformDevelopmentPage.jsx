import React from 'react';
import ServiceHero from '../components/shared/ServiceHero';
import FeatureGridSection from '../components/shared/FeatureGridSection';
import TrustedBy from '../components/shared/TrustedBy';
import WorkingProcess from '../components/shared/WorkingProcess';
import PortfolioSection from '../components/shared/PortfolioSection';
import DistinctiveEdge from '../components/shared/DistinctiveEdge';
import FaqSection from '../components/shared/FaqSection';
import TestimonialsSection from '../components/shared/TestimonialsSection';

import crossPlatformBg from '../assets/service/cross-platform.webp';
import featureVisual from '../assets/service/cross-platform-feature-img.png';

const featureData = {
  titlePart1: "Custom",
  highlightedTitle: "Cross-Platform Development",
  titlePart2: "Agency",
  description: (
    <>
      At <strong>Big Brand Bucket</strong>, we use modern frameworks to deliver secure, scalable, and user-centric cross-platform applications tailored to your business goals.
    </>
  ),
  image: featureVisual,
  features: [
    {
      number: "01.",
      title: "Single Codebase, Multiple Platforms",
      description: "We develop applications using a unified codebase that runs smoothly on iOS, Android, and web platforms."
    },
    {
      number: "02.",
      title: "Faster Time to Market",
      description: "Our cross-platform approach enables quicker development and faster launches across platforms."
    },
    {
      number: "03.",
      title: "Consistent User Experience",
      description: "We ensure a uniform look, feel, and performance across all devices and operating systems."
    },
    {
      number: "04.",
      title: "Scalable & Future-Ready Solutions",
      description: "Our applications are designed to scale effortlessly as your business grows and technology evolves."
    }
  ]
};

const CrossPlatformDevelopmentPage = () => {
  return (
    <main>
      <ServiceHero 
        eyebrow="Cross-Platform Development"
        title="Build Once. Deploy Everywhere. Scale Faster."
        description="Leverage our cross-platform development services to build high-performance applications that run seamlessly across iOS, Android, and web platforms—saving time, reducing costs, and accelerating your go-to-market."
        checklist={[
          "Single codebase for multiple platforms",
          "Consistent UI/UX across devices",
          "Faster development & reduced costs",
          "High performance & scalability",
          "Seamless API & third-party integrations"
        ]}
        bgImage={crossPlatformBg}
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

export default CrossPlatformDevelopmentPage;
