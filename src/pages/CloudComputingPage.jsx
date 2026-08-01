import React from 'react';
import ServiceHero from '../components/shared/ServiceHero';
import FeatureGridSection from '../components/shared/FeatureGridSection';
import TrustedBy from '../components/shared/TrustedBy';
import WorkingProcess from '../components/shared/WorkingProcess';
import PortfolioSection from '../components/shared/PortfolioSection';
import DistinctiveEdge from '../components/shared/DistinctiveEdge';
import FaqSection from '../components/shared/FaqSection';
import TestimonialsSection from '../components/shared/TestimonialsSection';

import cloudBg from '../assets/service/cloud-computing.webp';
import featureVisual from '../assets/service/cloud-feature-img.png';

const featureData = {
  highlightedTitle: "Cloud Computing",
  titlePart2: "Agency",
  description: (
    <>
      Partnering with <strong>Big Brand Bucket</strong> for cloud computing enables your business to scale faster, operate securely, and improve performance with reliable, future-ready cloud solutions.
    </>
  ),
  image: featureVisual,
  features: [
    {
      number: "01.",
      title: "Scalable Infrastructure",
      description: "Easily scale resources up or down based on your business needs."
    },
    {
      number: "02.",
      title: "Enhanced Security",
      description: "We implement strong security frameworks to protect your data and applications."
    },
    {
      number: "03.",
      title: "Cost Optimization",
      description: "Our cloud solutions reduce infrastructure costs while maximizing performance."
    },
    {
      number: "04.",
      title: "High Availability & Reliability",
      description: "We ensure minimal downtime with robust, always-on cloud environments."
    }
  ]
};

const CloudComputingPage = () => {
  return (
    <main>
      <ServiceHero 
        eyebrow="Leading Cloud Computing Company"
        title="Secure, Scalable & High-Performance Cloud Solutions"
        description="Partnering with Big Brand Bucket for cloud computing helps businesses modernize infrastructure, improve agility, and scale seamlessly with secure, reliable, and cost-efficient cloud solutions."
        checklist={[
          "Cloud strategy & consulting",
          "Cloud migration & deployment",
          "Scalable cloud architecture design",
          "Security, compliance & data protection",
          "Cloud optimization & cost management"
        ]}
        bgImage={cloudBg}
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

export default CloudComputingPage;
