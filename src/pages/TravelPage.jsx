import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import bgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';
import challengesImg from '../assets/travel/top-view-hand-holding-smartphone-scaled.jpg';
import travelFeaturesImg from '../assets/travel/2151873108.jpg';
import ctaImg from '../assets/manufacturing/120.jpg';
import whoWeServeImg from '../assets/travel/Gemini_Generated_Image_xb6vcmxb6vcmxb6v-e1767953947211-768x615.png';
import whyChooseUsImg from '../assets/travel/Gemini_Generated_Image_tvkzx5tvkzx5tvkz-768x768.png';
import ChallengesSection from '../components/shared/ChallengesSection';
import SolutionsCarousel from '../components/shared/SolutionsCarousel';
import SplitContentSection from '../components/shared/SplitContentSection';
import SplitCTASection from '../components/shared/SplitCTASection';
import TechStackSection from '../components/homepage/TechStackSection';
import BenefitsGrid from '../components/shared/BenefitsGrid';
import WhoWeServeSection from '../components/shared/WhoWeServeSection';
import WhyChooseUsSection from '../components/shared/WhyChooseUsSection';
import TrustedBy from '../components/shared/TrustedBy';
import TestimonialsSection from '../components/shared/TestimonialsSection';
import GlobalPresenceSection from '../components/shared/GlobalPresenceSection';
import FaqSection from '../components/shared/FaqSection';

// Travel Icons
import bookingIcon from '../assets/travel/booking.png';
import tourIcon from '../assets/travel/tour.png';
import supportIcon from '../assets/travel/support-manager.png';
import mobileIcon from '../assets/travel/available.png';
import hotelIcon from '../assets/travel/id.png';
import monitorIcon from '../assets/travel/monitor.png';
import satisfactionIcon from '../assets/travel/satisfaction-150x150.png';
import supplyChainIcon from '../assets/travel/supply-chain-management-150x150.png';
import reductionIcon from '../assets/travel/reduction-150x150.png';
import accountabilityIcon from '../assets/travel/accountability-150x150.png';
import innovationIcon from '../assets/travel/innovation-1-150x150.png';

const travelChallengesData = {
  title: "Key Challenges in the",
  titleHighlight: "Travel Industry",
  description: "Travel businesses commonly face challenges such as:",
  image: challengesImg,
  challengesList: [
    "Fragmented booking and reservation systems",
    "Manual itinerary and vendor management",
    "Limited real-time availability and pricing visibility",
    "Payment and refund complexities",
    "Managing multi-channel bookings",
    "Scalability during peak travel seasons",
    "Poor customer engagement and communication",
    "Lack of data-driven insights"
  ],
  bottomText: (
    <>
      Our digital solutions help overcome these challenges by <strong className="font-semibold text-gray-800">automating operations and enhancing customer journeys</strong>.
    </>
  )
};

const travelSolutionsData = {
  title: <>Our Travel <span className="text-primary">Software & App</span> Development Solutions</>,
  description: "We deliver custom-built travel technology products tailored to your business model:",
  solutions: [
    {
      id: 1,
      title: 'Travel Booking & Reservation Systems',
      icon: bookingIcon,
      points: [
        'Flight, hotel, and package bookings',
        'Real-time availability & pricing',
        'Multi-currency & multi-language support',
        'Secure online payments',
        'Booking modifications & cancellations'
      ]
    },
    {
      id: 2,
      title: 'Tour & Itinerary Management Software',
      icon: tourIcon,
      points: [
        'Custom itinerary creation',
        'Vendor & supplier management',
        'Day-wise travel planning',
        'Automated confirmations & vouchers'
      ]
    },
    {
      id: 3,
      title: 'Travel Agency & Tour Operator Management Systems',
      icon: supportIcon,
      points: [
        'CRM & customer management',
        'Lead tracking & conversion',
        'Quotation & invoicing',
        'Commission management'
      ]
    },
    {
      id: 4,
      title: 'Travel Mobile Apps',
      icon: mobileIcon,
      points: [
        'User-friendly traveler interface',
        'Live booking & itinerary access',
        'Push notifications & alerts',
        'Location-based services',
        'In-app support & chat'
      ]
    },
    {
      id: 5,
      title: 'Hotel & Hospitality Management Solutions',
      icon: hotelIcon,
      points: [
        'Room inventory & rate management',
        'Guest check-in/check-out systems',
        'Channel manager integration',
        'Housekeeping & staff management'
      ]
    },
    {
      id: 6,
      title: 'Travel Analytics & Reporting Platforms',
      icon: monitorIcon,
      points: [
        'Booking & revenue analytics',
        'Customer behavior insights',
        'Performance dashboards',
        'Forecasting & trend analysis'
      ]
    }
  ]
};

const travelBenefitsData = {
  title: <>Benefits For<br /><span className="text-primary">Travel Businesses</span></>,
  description: "By implementing smart, technology-driven travel solutions, businesses can unlock measurable performance improvements and long-term growth:",
  benefitsData: [
    {
      icon: bookingIcon,
      title: "Faster and smoother booking experiences",
      description: "through real-time availability, instant confirmations, and secure payments"
    },
    {
      icon: supportIcon,
      title: "Improved customer satisfaction & loyalty",
      description: "with personalized journeys and seamless digital interactions"
    },
    {
      icon: satisfactionIcon,
      title: "Increased operational efficiency",
      description: "by automating reservations, invoicing, and backend processes"
    },
    {
      icon: supplyChainIcon,
      title: "Better inventory & vendor management",
      description: "via centralized control and live supplier integrations"
    },
    {
      icon: reductionIcon,
      title: "Reduced manual errors and operational costs",
      description: "with automated workflows and digital documentation"
    },
    {
      icon: accountabilityIcon,
      title: "Scalable platforms for seasonal demand",
      description: "supported by cloud-based infrastructure"
    },
    {
      icon: monitorIcon,
      title: "Actionable insights through analytics",
      description: "to track performance, trends, and customer behavior"
    },
    {
      icon: innovationIcon,
      title: "Enhanced brand visibility and market reach",
      description: "across web, mobile, and global travel platforms"
    }
  ]
};

const travelWhoWeServeData = {
  title: <>Who We <span className="text-primary">Serve</span></>,
  description: "Our travel technology solutions are built for:",
  image: whoWeServeImg,
  leftItems: [
    "Travel agencies & tour operators",
    "Online travel portals",
    "Hospitality & hotel groups"
  ],
  rightItems: [
    "Destination management companies (DMCs)",
    "Corporate travel management firms"
  ]
};

const travelWhyChooseUsData = {
  title: <>Why <span className="text-primary">Choose</span> Us?</>,
  image: whyChooseUsImg,
  leftItems: [
    "Strong domain expertise in travel",
    "Custom-built, scalable digital platforms",
    "Seamless third-party API integrations",
    "Intuitive UI/UX for travelers and agents"
  ],
  rightItems: [
    "End-to-end development & support",
    "Secure and high-performance architecture"
  ]
};

const TravelPage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader
        subtitle="Travel Industry Solutions — Software & App Development"
        title={<>Powering Seamless Travel<br />Experiences with Smart Digital<br />Solutions</>}
        description={
          <>
            The travel and tourism industry thrives on convenience, speed, and memorable customer experiences. With increasing digital bookings, real-time expectations, and global competition, travel businesses need powerful technology to manage operations and delight travelers.
            <br /><br />
            Our custom travel software and mobile app development solutions help travel agencies, tour operators, and hospitality brands deliver <strong className="font-semibold">seamless, personalized, and efficient travel experiences</strong>.
          </>
        }
        bgImage={bgImage}
        className="!py-16 md:!py-20 lg:!py-24"
      >
        <Button variant="secondary" arrow={true}>
          Request A Quote
        </Button>
      </PageHeader>
      
      <ChallengesSection {...travelChallengesData} />
      <SolutionsCarousel {...travelSolutionsData} />
      
      <SplitContentSection 
        title={
          <>
            Core Features of Our <span className="text-primary">Travel<br />Solutions</span>
          </>
        }
        description="Our travel solutions deliver real-time booking and availability management with integrated payment gateways, automated confirmations, and reminders. Built on a cloud-based, scalable architecture, they offer secure data handling, CRM-driven customer engagement, multi-device compatibility, and seamless API integration with GDS, OTAs, and travel suppliers."
        listItems={[
          "Real-time booking & availability management",
          "Integrated payment gateways",
          "Automated confirmations & reminders",
          "CRM & customer engagement tools",
          "Multi-device & cross-platform compatibility",
          "API integration with GDS, OTAs & suppliers",
          "Secure data handling & compliance",
          "Cloud-based scalability"
        ]}
        image={travelFeaturesImg}
        imageAlt="Traveler at airport with smart tech"
        bgColor="bg-[#ffffff]"
        titleFontWeight="font-bold"
        pillLayout="flex"
      />
      
      <SplitCTASection 
        title="Let's Digitize Your Travel Business"
        description1={<>Whether you want to launch a travel booking platform, build a mobile travel app, or modernize your tourism operations, we help you deliver <strong className="font-semibold">exceptional travel experiences through technology</strong>.</>}
        description2={<strong className="font-semibold text-white">Travel smarter. Engage better. Grow faster.</strong>}
        buttonText="Get Started"
        image={ctaImg}
      />

      <TechStackSection />
      <BenefitsGrid {...travelBenefitsData} />
      <WhoWeServeSection {...travelWhoWeServeData} />
      <WhyChooseUsSection {...travelWhyChooseUsData} />
      <TrustedBy />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default TravelPage;
