import React from 'react';
import ServiceHero from '../components/shared/ServiceHero';
import TrustedBy from '../components/shared/TrustedBy';
import WorkingProcess from '../components/shared/WorkingProcess';
import PortfolioSection from '../components/shared/PortfolioSection';
import DistinctiveEdge from '../components/shared/DistinctiveEdge';
import FaqSection from '../components/shared/FaqSection';
import TestimonialsSection from '../components/shared/TestimonialsSection';

import softwareBg from '../assets/service/solution.webp';

const SoftwareDevelopmentPage = () => {
  return (
    <main>
      <ServiceHero 
        eyebrow="Software Development Company in Gurgaon"
        title="Build Custom Software Solutions That Accelerate Business Growth"
        description={
          <>
            <p>Businesses running with outdated systems, manual operations and broken workflows can reduce growth and productivity and increase operational costs. As a leading software development company in Gurgaon, we help businesses to win these challenges with our scalable, secure, and productivity-focused software solutions tailored to fulfil unique requirements.</p>
            <p>At Big Brand Bucket, we develop custom software applications, SaaS platforms, ERP systems, CRM software and enterprise-level digital solutions that give smooth operation experiences and improve business efficiency.</p>
            <p>Whether you are a new company in Cyber City Gurgaon, an enterprise in Udyog Vihar, or a growing company on Sohna Road, our expert software developers create futuristic software designed to help your business scale rapidly.</p>
          </>
        }
        checklist={[
          "Custom Software Development",
          "ERP & CRM Solutions",
          "SaaS Product Development",
          "Business Automation Software",
          "Enterprise Web Applications",
          "Ongoing Technical Support"
        ]}
        bgImage={softwareBg}
      />

      <TrustedBy />
      <WorkingProcess />
      <PortfolioSection />
      <DistinctiveEdge />
      <FaqSection />
      <TestimonialsSection />
    </main>
  );
};

export default SoftwareDevelopmentPage;
