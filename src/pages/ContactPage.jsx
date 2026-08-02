import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ContactCards from '../components/contact/ContactCards';
import ContactFormMap from '../components/contact/ContactFormMap';
import GlobalPresenceSection from '../components/shared/GlobalPresenceSection';
import FaqSection from '../components/shared/FaqSection';
import bgImage from '../assets/about-page/25079.jpg';

const ContactPage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader
        subtitle="Contact Us"
        title="We're Here to Help You Succeed"
        description="Our team combines innovative thinking, advanced technology, and a customer-first approach to understand your needs, answer your questions, and deliver reliable solutions that move your business forward."
        bgImage={bgImage}
        className="!pb-40" // Add padding to allow cards to overlap
      />
      
      <ContactCards />
      <ContactFormMap />
      
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default ContactPage;
