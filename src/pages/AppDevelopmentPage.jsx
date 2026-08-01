import React from 'react';
import ServiceHero from '../components/shared/ServiceHero';

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
    </main>
  );
};

export default AppDevelopmentPage;
