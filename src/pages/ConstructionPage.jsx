import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import bgImage from '../assets/construction/11267.jpg';
import challengesImg from '../assets/construction/11267.jpg';
import constructionFeaturesImg from '../assets/construction/8335.jpg';
import ctaImg from '../assets/manufacturing/120.jpg';
import whoWeServeImg from '../assets/construction/Gemini_Generated_Image_veo6vaveo6vaveo6-e1768044235691-768x755.png';
import whyChooseUsImg from '../assets/logistics/whychooseus.png';
import ChallengesSection from '../components/shared/ChallengesSection';
import SolutionsCarousel from '../components/shared/SolutionsCarousel';
import SplitContentSection from '../components/shared/SplitContentSection';
import SplitCTASection from '../components/shared/SplitCTASection';
import TechStackSection from '../components/homepage/TechStackSection';
import BenefitsGrid from '../components/shared/BenefitsGrid';
import WhoWeServeSection from '../components/shared/WhoWeServeSection';
import WhyChooseUsSection from '../components/shared/WhyChooseUsSection';
import TrustedBy from '../components/homepage/TrustedBy';
import TestimonialsSection from '../components/homepage/TestimonialsSection';
import GlobalPresenceSection from '../components/homepage/GlobalPresenceSection';
import FaqSection from '../components/homepage/FaqSection';

// Icons for Solutions Carousel and Benefits
import helmetIcon from '../assets/construction/helmet.png';
import siteMapIcon from '../assets/construction/site-map.png';
import erpIcon from '../assets/construction/erp-300x300.png';
import monitorIcon from '../assets/construction/monitor-150x150.png';
import safetyIcon from '../assets/construction/shield-150x150.png';
import negotiationIcon from '../assets/construction/negotiation-300x300.png';
import reductionIcon from '../assets/construction/reduction-150x150.png';
import operationalIcon from '../assets/construction/operational-300x300.png';
import binIcon from '../assets/construction/bin-150x150.png';
import paperIcon from '../assets/construction/paper-150x150.png';

const constructionChallengesData = {
  title: "Key Challenges in the",
  titleHighlight: "Construction Industry",
  description: "Construction companies commonly face challenges such as:",
  image: challengesImg,
  challengesList: [
    "Project delays and cost overruns",
    "Poor coordination between teams, contractors, and vendors",
    "Manual reporting and paperwork",
    "Lack of real-time project visibility",
    "Inefficient resource and material management",
    "Safety compliance issues",
    "Inaccurate project tracking and forecasting",
    "Communication gaps between site and office teams"
  ],
  bottomText: (
    <>
      Our digital solutions are designed to <strong className="font-semibold text-gray-800">eliminate inefficiencies and bring complete control</strong> to construction
    </>
  )
};

const constructionSolutionsData = {
  title: <>Our Construction <span className="text-primary">Software & App</span> Development Solutions</>,
  description: "We deliver custom-built construction technology products tailored to your business model:",
  solutions: [
    {
      id: 1,
      title: 'Construction Project Management Software',
      icon: helmetIcon,
      points: [
        'Project planning & scheduling',
        'Task and milestone tracking',
        'Budget & cost control',
        'Real-time progress updates',
        'Document management'
      ]
    },
    {
      id: 2,
      title: 'Site Management & Field Force Apps',
      icon: siteMapIcon,
      points: [
        'Daily site reports',
        'Attendance & workforce tracking',
        'Material usage logging',
        'Photo & video-based progress tracking',
        'Issue reporting & resolution'
      ]
    },
    {
      id: 3,
      title: 'ERP Solutions for Construction',
      icon: erpIcon,
      points: [
        'Procurement & vendor management',
        'Inventory & material tracking',
        'Billing, invoicing & payments',
        'Equipment management',
        'Compliance & audit readiness'
      ]
    },
    {
      id: 4,
      title: 'BIM & Construction Analytics Solutions',
      icon: monitorIcon,
      points: [
        'Data-driven project insights',
        'Performance dashboards',
        'Risk prediction & mitigation',
        'Schedule and cost forecasting'
      ]
    },
    {
      id: 5,
      title: 'Safety & Compliance Management Systems',
      icon: safetyIcon,
      points: [
        'Safety checklists & inspections',
        'Incident reporting',
        'Compliance tracking',
        'Training and certification records'
      ]
    },
    {
      id: 6,
      title: 'Client & Stakeholder Communication Platforms',
      icon: negotiationIcon,
      points: [
        'Real-time project status updates',
        'Approval workflows',
        'Document sharing',
        'Transparent reporting'
      ]
    }
  ]
};

const constructionBenefitsData = {
  title: <>Benefits For<br /><span className="text-primary">Construction Businesses</span></>,
  description: "By implementing smart, technology-driven construction solutions, companies can unlock measurable performance improvements and long-term project value:",
  benefitsData: [
    {
      icon: reductionIcon,
      title: "Improved project timelines and cost control",
      description: "through real-time tracking, planning, and automated workflows"
    },
    {
      icon: negotiationIcon,
      title: "Better coordination between site and office teams",
      description: "with cloud-based collaboration and centralized communication"
    },
    {
      icon: operationalIcon,
      title: "Increased workforce productivity",
      description: "enabled by mobile-first tools and instant on-site data updates"
    },
    {
      icon: binIcon,
      title: "Reduced material wastage",
      description: "using accurate inventory tracking and resource optimization"
    },
    {
      icon: helmetIcon,
      title: "Enhanced safety compliance",
      description: "with digital safety checks, alerts, and audit-ready records"
    },
    {
      icon: paperIcon,
      title: "Transparent project reporting",
      description: "via live dashboards and automated progress reports"
    },
    {
      icon: monitorIcon,
      title: "Faster, data-driven decision-making",
      description: "powered by real-time analytics and performance insights"
    },
    {
      icon: safetyIcon,
      title: "Higher client satisfaction and trust",
      description: "through clear visibility, accountability, and timely delivery"
    }
  ]
};

const constructionWhoWeServeData = {
  title: <>Who We <span className="text-primary">Serve</span></>,
  description: "Our construction technology solutions are built for:",
  image: whoWeServeImg,
  leftItems: [
    "Real estate developers",
    "Infrastructure & EPC companies",
    "Residential & commercial builders",
    "Civil & structural contractors"
  ],
  rightItems: [
    "Project management consultants",
    "Architecture & engineering firms"
  ],
  bgColor: "bg-[#f8fafa]"
};

const constructionWhyChooseUsData = {
  title: <>Why <span className="text-primary">Choose</span> Us?</>,
  image: whyChooseUsImg,
  leftItems: [
    "Deep understanding of construction workflows",
    "Custom-built, scalable solutions",
    "User-friendly mobile apps for site teams",
    "Seamless integration with existing systems"
  ],
  rightItems: [
    "End-to-end development, deployment & support",
    "Secure, reliable, and future-ready architecture"
  ],
  bgColor: "bg-white"
};

const ConstructionPage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader
        subtitle="Construction Industry Solutions — Software & App Development"
        title={<>Building Smarter Construction<br />Operations with Digital Innovation</>}
        description={
          <>
            The construction industry is becoming increasingly complex, with tight deadlines, rising costs, multiple stakeholders, and strict compliance requirements. Our custom software and mobile app development solutions help construction companies digitize workflows, improve project visibility, and deliver projects on time and within budget.
            <br /><br />
            We empower construction businesses with <strong className="font-semibold">technology-driven tools</strong> that enhance planning, execution, monitoring, and collaboration across every stage of the construction lifecycle.
          </>
        }
        bgImage={bgImage}
        className="!py-16 md:!py-20 lg:!py-24"
      >
        <Button variant="secondary" arrow={true}>
          Request A Quote
        </Button>
      </PageHeader>
      
      <ChallengesSection {...constructionChallengesData} />
      <SolutionsCarousel {...constructionSolutionsData} />
      
      <SplitContentSection 
        title={
          <>
            Core Features of Our<br />
            <span className="text-primary">Construction Solutions</span>
          </>
        }
        description="Our construction solutions streamline project execution with real-time dashboards that provide clear visibility into progress, resources, and timelines. Cloud-based and mobile-first tools enable seamless collaboration and instant on-site updates—even offline. Automated reports, alerts, secure role-based access, and ERP/accounting integration ensure faster decisions and a connected, efficient construction management ecosystem."
        listItems={[
          "Real-time project dashboards",
          "Cloud-based access from anywhere",
          "Mobile-first field applications",
          "Automated reports & alerts",
          "Role-based access control",
          "Integration with accounting & ERP systems",
          "Secure data storage & backups",
          "Offline data capture for remote sites"
        ]}
        image={constructionFeaturesImg}
        imageAlt="Construction Site Silhouette"
        bgColor="bg-[#ffffff]"
        titleFontWeight="font-medium"
        pillLayout="grid"
      />
      
      <SplitCTASection 
        title="Let's Digitize Your Construction Operations"
        description1={<>Whether you need a construction management platform, a site reporting app, or a fully integrated ERP system, we help you build <strong className="font-semibold">smarter, safer, and more efficient construction operations</strong> with technology.</>}
        description2={<strong className="font-semibold text-white">Build better. Build faster. Build smarter.</strong>}
        buttonText="Get Started"
        image={ctaImg}
      />

      <TechStackSection />
      <BenefitsGrid {...constructionBenefitsData} />
      <WhoWeServeSection {...constructionWhoWeServeData} />
      <WhyChooseUsSection {...constructionWhyChooseUsData} />
      <TrustedBy />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default ConstructionPage;
