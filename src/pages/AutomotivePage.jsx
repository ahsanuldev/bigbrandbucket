import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import bgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';

const AutomotivePage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader
        title={<>Transforming Automotive Industry<br />with Smart IT Solutions</>}
        description="We empower automotive manufacturers with intelligent IT solutions that enhance production efficiency, supply chain visibility, and operational excellence."
        bgImage={bgImage}
        className="!py-16 md:!py-20 lg:!py-24"
      >
        <Button variant="secondary" arrow={true}>
          Request A Quote
        </Button>
      </PageHeader>
    </main>
  );
};

export default AutomotivePage;
