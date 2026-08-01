import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import bgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';
import KeyChallengesSection from '../components/logistics/KeyChallengesSection';
import LogisticsSolutions from '../components/logistics/LogisticsSolutions';
import SplitContentSection from '../components/shared/SplitContentSection';
import SplitCTASection from '../components/shared/SplitCTASection';
import featureImg from '../assets/logistics/2151468806.jpg';
import ctaImg from '../assets/manufacturing/120.jpg';

const LogisticsPage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader
        subtitle="Logistics Industry Solutions — Software & App Development"
        title={<>Transforming Logistics Through<br />Smart Technology</>}
        description={
          <>
            The logistics and supply chain sector is evolving rapidly — driven by increasing customer expectations, rising operational costs, and the demand for real-time visibility. Our logistics software and mobile app development solutions help logistics companies streamline operations, automate processes, and achieve complete end-to-end control over shipments, fleets, warehouses, and last-mile deliveries.
            <br /><br />
            We build robust, scalable, and secure digital solutions that empower logistics businesses to become <strong className="font-semibold">faster, smarter, and more profitable.</strong>
          </>
        }
        bgImage={bgImage}
        className="!py-16 md:!py-20 lg:!py-24"
      >
        <Button variant="secondary" arrow={true}>
          Request A Quote
        </Button>
      </PageHeader>
      <KeyChallengesSection />
      <LogisticsSolutions />
      <SplitContentSection 
        title={
          <>
            Core Features of Our<br />
            <span className="text-primary">Logistics Solutions</span>
          </>
        }
        description="Our logistics solutions deliver real-time visibility and operational control through GPS tracking, AI-powered route optimization, smart dashboards, and automated billing. With secure cloud access, offline functionality, and seamless ERP, CRM, and accounting integrations, we provide a scalable and future-ready logistics ecosystem."
        listItems={[
          "Real-time GPS tracking",
          "Interactive dashboards & analytics",
          "Automated billing & invoicing",
          "Digital proof of delivery (e-signature/OTP)",
          "Multi-language & multi-currency support",
          "AI-based route optimization",
          "Cloud-based accessibility",
          "API integration with ERP, CRM & accounting tools",
          "Secure data encryption",
          "Offline functionality"
        ]}
        image={featureImg}
        imageAlt="Warehouse Interior"
        bgColor="bg-[#f8fafa]"
        titleFontWeight="font-medium"
        pillLayout="grid"
      />
      
      <SplitCTASection 
        title="Let's Build Your Logistics Software Solution"
        description1="Whether you're looking to build a new logistics platform, upgrade your existing system, or develop a custom mobile app — we help transform your logistics operations with powerful digital capabilities."
        description2={<strong className="font-semibold text-white">Boost efficiency. Reduce costs. Deliver smarter.</strong>}
        buttonText="Get Started"
        image={ctaImg}
      />
    </main>
  );
};

export default LogisticsPage;
