import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import aboutBgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';

const AboutPage = () => {
  return (
    <main>
      <PageHeader 
        subtitle="Top-Notch Support"
        title="Committed to Smarter Solutions"
        description="We combine innovative thinking, advanced technology, and customer-focused design to deliver smarter solutions that drive lasting impact."
        bgImage={aboutBgImage}
      />
    </main>
  );
};

export default AboutPage;
