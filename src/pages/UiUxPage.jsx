import React from 'react';
import ServiceHero from '../components/shared/ServiceHero';
import FeatureGridSection from '../components/shared/FeatureGridSection';
import TrustedBy from '../components/shared/TrustedBy';
import WorkingProcess from '../components/shared/WorkingProcess';
import PortfolioSection from '../components/shared/PortfolioSection';
import DistinctiveEdge from '../components/shared/DistinctiveEdge';
import FaqSection from '../components/shared/FaqSection';
import TestimonialsSection from '../components/shared/TestimonialsSection';

import uiUxBg from '../assets/service/ui-ux.webp';
import featureVisual from '../assets/service/ui-ux-feature-img.png';

const featureData = {
  titlePart1: "Custom",
  highlightedTitle: "UI/UX",
  titlePart2: "Agency",
  description: (
    <>
      Partnering with <strong>Big Brand Bucket</strong> for UI/UX design helps you improve user satisfaction, boost engagement, and achieve higher conversion rates with thoughtfully designed digital experiences.
    </>
  ),
  image: featureVisual,
  features: [
    {
      number: "01.",
      title: "User-Centric Design",
      description: "We design experiences focused on user needs, behaviors, and expectations to maximize usability and satisfaction."
    },
    {
      number: "02.",
      title: "Conversion-Driven Interfaces",
      description: "Our designs are optimized to guide users seamlessly toward actions that matter—sign-ups, purchases, and engagement."
    },
    {
      number: "03.",
      title: "Enhanced Usability",
      description: "We improve navigation, clarity, and accessibility to deliver smooth and frustration-free experiences."
    },
    {
      number: "04.",
      title: "Scalable & Consistent Design",
      description: "Our design systems ensure consistency across platforms while remaining scalable for future growth."
    }
  ]
};

const UiUxPage = () => {
  return (
    <main>
      <ServiceHero 
        eyebrow="Leading UI/UX Design Company"
        title="Intuitive, User-Centric & Conversion-Focused Digital Experiences"
        description="Unlock the power of strategic UI/UX design services crafted to create engaging, intuitive, and visually compelling experiences that enhance usability, increase conversions, and drive business growth."
        checklist={[
          "User research & experience strategy",
          "Wireframing & interactive prototyping",
          "UI design for web & mobile apps",
          "Usability testing & UX optimization",
          "Design systems & brand consistency"
        ]}
        bgImage={uiUxBg}
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

export default UiUxPage;
