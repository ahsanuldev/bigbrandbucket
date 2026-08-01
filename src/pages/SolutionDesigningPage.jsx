import React from 'react';
import ServiceHero from '../components/shared/ServiceHero';
import FeatureGridSection from '../components/shared/FeatureGridSection';
import TrustedBy from '../components/shared/TrustedBy';
import WorkingProcess from '../components/shared/WorkingProcess';
import PortfolioSection from '../components/shared/PortfolioSection';
import DistinctiveEdge from '../components/shared/DistinctiveEdge';
import FaqSection from '../components/shared/FaqSection';
import TestimonialsSection from '../components/shared/TestimonialsSection';

import solutionBg from '../assets/service/solution.webp';
import featureVisual from '../assets/service/solution-featue-img.png';

const featureData = {
  titlePart1: "Custom",
  highlightedTitle: "Solution Designing",
  titlePart2: "Agency",
  description: (
    <>
      Partnering with <strong>Big Brand Bucket</strong> for solution designing helps transform complex business challenges into smart, scalable, and result-driven digital solutions.
    </>
  ),
  image: featureVisual,
  features: [
    {
      number: "01.",
      title: "Business-Centric Approach",
      description: "We analyze your business goals, challenges, and workflows to design solutions that deliver real impact."
    },
    {
      number: "02.",
      title: "Strategic Planning",
      description: "Our experts create clear solution roadmaps that align technology, timelines, and resources efficiently."
    },
    {
      number: "03.",
      title: "Custom Architecture Design",
      description: "We design flexible and secure system architectures tailored to your specific requirements."
    },
    {
      number: "04.",
      title: "Scalable & Future-Ready Solutions",
      description: "Our solutions are built to evolve with your business, ensuring long-term scalability and adaptability."
    }
  ]
};

const SolutionDesigningPage = () => {
  return (
    <main>
      <ServiceHero 
        eyebrow="Leading Solution Designing Company"
        title="Strategic, Scalable & Business-Driven Digital Solutions"
        description="Partnering with Big Brand Bucket for solution designing helps transform complex business challenges into smart, scalable, and future-ready digital solutions that drive efficiency, innovation, and growth."
        checklist={[
          "Business requirement analysis & discovery",
          "Solution architecture & system design",
          "Process mapping & workflow optimization",
          "Technology stack selection",
          "Scalable & secure solution planning"
        ]}
        bgImage={solutionBg}
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

export default SolutionDesigningPage;
