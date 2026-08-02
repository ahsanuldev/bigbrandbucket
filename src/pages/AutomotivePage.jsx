import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import bgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';
import FeatureCardsCarousel from '../components/shared/FeatureCardsCarousel';
import AutomotiveExpertise from '../components/automotive/AutomotiveExpertise';
import SplitContentSection from '../components/shared/SplitContentSection';
import SplitCTASection from '../components/shared/SplitCTASection';
import IndustriesWeServeSection from '../components/shared/IndustriesWeServeSection';
import TrustedBy from '../components/shared/TrustedBy';
import TestimonialsSection from '../components/shared/TestimonialsSection';
import GlobalPresenceSection from '../components/shared/GlobalPresenceSection';
import FaqSection from '../components/shared/FaqSection';

// Automotive Icons
import autonomousIcon from '../assets/automotive/autonomous.png';
import mlIcon from '../assets/automotive/ml.png';
import navigateIcon from '../assets/automotive/navigate.png';
import smartCarIcon from '../assets/automotive/smart-car.png';
import evIcon from '../assets/automotive/electric-car.png';
import smartBikeIcon from '../assets/automotive/smart.png';
import hmiIcon from '../assets/automotive/digital.png';
import securityIcon from '../assets/automotive/cyber-security.png';

// Images
import transformationImg from '../assets/automotive/580.jpg';
import ctaImg from '../assets/manufacturing/120.jpg';

const automotiveCarouselData = [
  {
    id: 1,
    title: 'Autonomous & ADAS',
    description: 'Advanced software systems supporting driver assistance and autonomous features to enhance safety, accuracy, and driving intelligence.',
    icon: autonomousIcon
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    description: 'Leverage AI-driven insights for predictive maintenance, intelligent automation, and smarter automotive decision-making.',
    icon: mlIcon
  },
  {
    id: 3,
    title: 'Navigation & Mapping',
    description: 'High-precision navigation and mapping solutions delivering real-time routing, traffic intelligence, and location-based services.',
    icon: navigateIcon
  },
  {
    id: 4,
    title: 'Connected & Internet Cars',
    description: 'Enable connected vehicle ecosystems with real-time data exchange, infotainment, remote diagnostics, and over-the-air updates.',
    icon: smartCarIcon
  },
  {
    id: 5,
    title: 'EV Charging Software',
    description: 'Smart software solutions for EV charging management, monitoring, billing, and seamless integration with charging infrastructure.',
    icon: evIcon
  },
  {
    id: 6,
    title: 'Smart Bikes',
    description: 'Connected and intelligent software solutions for smart two-wheelers, enhancing rider safety, performance, and experience.',
    icon: smartBikeIcon
  },
  {
    id: 7,
    title: 'Human-Machine Interface (HMI)',
    description: 'Intuitive and user-centric vehicle interfaces designed for seamless interaction, safety, and superior driving experience.',
    icon: hmiIcon
  },
  {
    id: 8,
    title: 'Security',
    description: 'Robust automotive cybersecurity solutions protecting vehicles, data, and connected systems from digital threats.',
    icon: securityIcon
  }
];

const AutomotivePage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader
        title={<>Transforming Automotive Industry<br />with Smart IT Solutions</>}
        description="We empower automotive manufacturers with intelligent IT solutions that enhance production efficiency, supply chain visibility, and operational excellence."
        bgImage={bgImage}
        className="!py-16 md:!py-20 lg:!py-24 md:!pb-40 lg:!pb-48"
      >
        <Button variant="secondary" arrow={true}>
          Request A Quote
        </Button>
      </PageHeader>
      
      <FeatureCardsCarousel items={automotiveCarouselData} />
      <AutomotiveExpertise />
      
      <SplitContentSection 
        title={
          <>
            Driving <span className="text-primary">Automotive</span> Business<br />
            <span className="text-primary">Transformation</span>
          </>
        }
        description="In an era of connected vehicles and smart manufacturing, digital transformation is essential. Our automotive IT solutions streamline production, enhance operational visibility, and enable data-driven decision-making—helping manufacturers improve efficiency, reduce costs, and accelerate innovation."
        listItems={[
          "Smart Vehicle Solutions",
          "AI, ML & IoT Integration",
          "Data & Advanced Analytics",
          "Electric Vehicle (EV) Solutions",
          "Autonomous & ADAS Technologies"
        ]}
        image={transformationImg}
        imageAlt="Automotive manufacturing assembly line"
        bgColor="bg-[#ffffff]"
        titleFontWeight="font-bold"
        pillLayout="flex"
      />

      <SplitCTASection 
        title="Ready to Transform Your Digital Presence"
        description1="Big Brand Bucket visions to provide better lives and days by solving everyday situations with the help of flawless design and IT solutions. We have cheerful and fulfilled customers spread everywhere throughout the world."
        buttonText="Get Started"
        image={ctaImg}
      />
      
      <IndustriesWeServeSection bgColor="bg-white" />
      
      <TrustedBy />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default AutomotivePage;
