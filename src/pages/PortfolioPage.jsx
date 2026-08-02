import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import GlobalPresenceSection from '../components/shared/GlobalPresenceSection';
import FaqSection from '../components/shared/FaqSection';
import bgImage from '../assets/portfolio/2180.jpg';

const PortfolioPage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader
        subtitle="Our Portfolio"
        title="Where Ideas Turn into Impact"
        description="Discover projects that demonstrate our commitment to quality, performance, and smart digital solutions across industries."
        bgImage={bgImage}
      />
      <PortfolioGrid />
      
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default PortfolioPage;
