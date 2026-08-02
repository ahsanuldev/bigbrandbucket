import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import bgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';
import SplitContentSection from '../components/shared/SplitContentSection';
import SplitCTASection from '../components/shared/SplitCTASection';
import TechStackSection from '../components/homepage/TechStackSection';
import TrustedBy from '../components/shared/TrustedBy';
import TestimonialsSection from '../components/shared/TestimonialsSection';
import GlobalPresenceSection from '../components/shared/GlobalPresenceSection';
import FaqSection from '../components/shared/FaqSection';
import featureImg from '../assets/logistics/2151468806.jpg';
import ctaImg from '../assets/manufacturing/120.jpg';

// Import Shared Sections
import ChallengesSection from '../components/shared/ChallengesSection';
import SolutionsCarousel from '../components/shared/SolutionsCarousel';
import BenefitsGrid from '../components/shared/BenefitsGrid';
import WhoWeServeSection from '../components/shared/WhoWeServeSection';
import WhyChooseUsSection from '../components/shared/WhyChooseUsSection';

import challengesImg from '../assets/logistics/2152005472.jpg';
import icon1 from '../assets/logistics/monitor.png';
import icon2 from '../assets/logistics/cross-docking-300x300.png';
import icon3 from '../assets/logistics/warehouse.png';
import icon4 from '../assets/logistics/delivered-150x150.png';
import icon5 from '../assets/logistics/supply-chain-management-300x300.png';
import icon6 from '../assets/logistics/work-300x300.png';
import icon7 from '../assets/logistics/iot-300x300.png';

import reductionIcon from '../assets/logistics/reduction-150x150.png';
import operationalIcon from '../assets/logistics/operational-150x150.png';
import deliveredIcon from '../assets/logistics/delivered-150x150.png';
import satisfactionIcon from '../assets/logistics/satisfaction-150x150.png';
import paperIcon from '../assets/logistics/paper-150x150.png';
import accountabilityIcon from '../assets/logistics/accountability-150x150.png';
import monitorIcon from '../assets/logistics/monitor.png';
import growthIcon from '../assets/logistics/growth-150x150.webp';

import whoWeServeImg from '../assets/logistics/whoweserve.png';
import whyChooseUsImg from '../assets/logistics/whychooseus.png';

const challengesData = {
  title: "Key Challenges in the",
  titleHighlight: "Logistics Industry",
  description: "The logistics industry faces multiple operational and management challenges:",
  image: challengesImg,
  challengesList: [
    "Lack of shipment visibility and live tracking",
    "Warehouse mismanagement and inventory inaccuracies",
    "Manual paperwork and inefficient processes",
    "Difficulty managing drivers and on-ground workforce",
    "Fleet and route mismanagement",
    "Limited data analytics and performance insights",
    "High fuel consumption and operating costs",
    "Customer dissatisfaction due to poor communication",
    "Delay in deliveries and lack of route optimization",
    "Risk of loss, theft, or cargo damage",
  ],
  bottomText: (
    <>
      Businesses looking to overcome these operational challenges can leverage our <a href="#" className="text-primary hover:underline font-medium">logistics app development company</a> expertise to build custom fleet management, delivery tracking, and transportation management solutions.
    </>
  )
};

const solutionsData = {
  title: <>Our Logistics <span className="text-primary">Software & App</span> Development Solutions</>,
  description: "We deliver custom-built logistics technology products tailored to your business model.",
  solutions: [
    {
      id: 1,
      title: 'Fleet Management Software',
      icon: icon1,
      points: [
        'Vehicle tracking & telematics',
        'Fuel monitoring',
        'Driver behavior analytics',
        'Preventive maintenance alerts',
        'Trip history & reports'
      ]
    },
    {
      id: 2,
      title: 'Transportation & Delivery Management Systems (TMS/DMS)',
      icon: icon2,
      points: [
        'Shipment planning & scheduling',
        'Route optimization & geo-tracking',
        'Proof of delivery (POD)',
        'Order assignment & dispatch automation',
        'Customer notifications & real-time updates'
      ]
    },
    {
      id: 3,
      title: 'Warehouse Management Systems (WMS)',
      icon: icon3,
      points: [
        'Inventory control',
        'Barcode/RFID scanning',
        'Slotting & put-away optimisation',
        'Goods receiving & dispatch management',
        'Stock reporting & forecasting'
      ]
    },
    {
      id: 4,
      title: 'On-Demand Logistics & Courier Apps',
      icon: icon4,
      points: [
        'Customer booking interface',
        'Real-time driver allocation',
        'Live tracking',
        'Fare estimation & digital payments',
        'Ratings & reviews'
      ]
    },
    {
      id: 5,
      title: 'Supply Chain Management (SCM) Software',
      icon: icon5,
      points: [
        'Supplier & vendor management',
        'Demand forecasting',
        'Purchase planning',
        'Logistics & distribution monitoring'
      ]
    },
    {
      id: 6,
      title: 'Driver & Workforce Management Apps',
      icon: icon6,
      points: [
        'Attendance & shift scheduling',
        'Task assignment',
        'Live location & trip monitoring',
        'Performance analytics'
      ]
    },
    {
      id: 7,
      title: 'IoT & GPS Tracking Solutions',
      icon: icon7,
      points: [
        'Live vehicle tracking',
        'Temperature & cargo condition monitoring',
        'Geofencing alerts',
        'Sensor-based analytics'
      ]
    }
  ]
};

const benefitsPageData = {
  title: <>Benefits For<br /><span className="text-primary">Logistics Businesses</span></>,
  description: "By implementing smart, technology-driven logistics solutions, businesses can unlock measurable performance improvements and long-term operational value:",
  benefitsData: [
    {
      icon: reductionIcon,
      title: "30-40% reduction in operational costs",
      description: "through automation and optimized workflows"
    },
    {
      icon: operationalIcon,
      title: "Improved fleet utilization and fuel efficiency",
      description: "with real-time tracking and route optimization"
    },
    {
      icon: deliveredIcon,
      title: "Faster deliveries and reduced turnaround times",
      description: "across transportation networks"
    },
    {
      icon: satisfactionIcon,
      title: "Enhanced customer satisfaction",
      description: "through live shipment updates and transparency"
    },
    {
      icon: paperIcon,
      title: "Minimal paperwork and fewer manual errors",
      description: "via digital documentation"
    },
    {
      icon: accountabilityIcon,
      title: "Greater operational visibility and accountability",
      description: "across teams and partners"
    },
    {
      icon: monitorIcon,
      title: "Data-backed decision-making",
      description: "powered by analytics and performance insights"
    },
    {
      icon: growthIcon,
      title: "Stronger risk management and compliance",
      description: "control with secure, centralized systems"
    }
  ]
};

const whoWeServeData = {
  title: <>Who We <span className="text-primary">Serve</span></>,
  description: "We build industry solutions for:",
  image: whoWeServeImg,
  leftItems: [
    "Transport agencies",
    "Third-party logistics (3PL) companies",
    "Courier & parcel delivery companies",
    "eCommerce logistics providers",
  ],
  rightItems: [
    "Fleet & vehicle rental companies",
    "Freight forwarding & cargo services",
    "Warehouse & distribution centers",
    "Cold chain logistics",
  ]
};

const whyChooseUsData = {
  title: <>Why <span className="text-primary">Choose</span> Us?</>,
  image: whyChooseUsImg,
  leftItems: [
    "Industry-specific development expertise",
    "Custom, scalable & future-ready solutions",
    "Strong focus on UI/UX for easy adoption",
    "Integration with your existing systems",
  ],
  rightItems: [
    "End-to-end development, deployment & support",
    "Data security & compliance-driven architecture",
    "Agile development approach",
  ]
};

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
      
      <ChallengesSection {...challengesData} />
      <SolutionsCarousel {...solutionsData} />
      
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

      <TechStackSection />
      <BenefitsGrid {...benefitsPageData} />
      <WhoWeServeSection {...whoWeServeData} />
      <WhyChooseUsSection {...whyChooseUsData} />
      <TrustedBy />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default LogisticsPage;
