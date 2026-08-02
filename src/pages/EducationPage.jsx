import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import bgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';
import challengesImg from '../assets/education/6372294_25293-scaled.jpg';
import educationFeaturesImg from '../assets/education/80171-e1769496110677.jpg';
import ctaImg from '../assets/manufacturing/120.jpg';
import whoWeServeImg from '../assets/education/12413-768x512.jpg';
import whyChooseUsImg from '../assets/education/Gemini_Generated_Image_259w54259w54259w-768x768.png';
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

// Education Icons
import lmsIcon from '../assets/education/learning-management-system.png';
import schoolIcon from '../assets/education/school.png';
import eLearningIcon from '../assets/education/online-learning.png';
import examIcon from '../assets/education/online-survey-300x300.png';
import skillIcon from '../assets/education/skill-development.png';
import lectureIcon from '../assets/education/lecture.png';
import monitorIcon from '../assets/education/monitor-150x150.png';
import negotiationIcon from '../assets/education/negotiation-150x150.png';
import shieldIcon from '../assets/education/shield-150x150.png';

const educationChallengesData = {
  title: "Key Challenges in the",
  titleHighlight: "Education Industry",
  description: "Educational institutions and ed-tech providers often face challenges such as:",
  image: challengesImg,
  challengesList: [
    "Manual academic and administrative processes",
    "Inefficient communication between students, teachers, and parents",
    "Limited student engagement and interaction",
    "Managing online and hybrid learning models",
    "Lack of centralized data management",
    "Data security and privacy concerns",
    "Difficulty in tracking student performance",
    "Scaling digital infrastructure"
  ],
  bottomText: (
    <>
      Our technology solutions address these challenges with <strong className="font-semibold text-gray-800">intelligent, user-friendly systems</strong>.
    </>
  )
};

const educationSolutionsData = {
  title: <>Our Education <span className="text-primary">Software & App</span> Development Solutions</>,
  description: "We deliver custom-built education technology products tailored to your business model:",
  solutions: [
    {
      id: 1,
      title: 'Learning Management Systems (LMS)',
      icon: lmsIcon,
      points: [
        'Course creation & content management',
        'Online classes & video lectures',
        'Assignments & assessments',
        'Progress tracking & reports',
        'Certification management'
      ]
    },
    {
      id: 2,
      title: 'School & College Management Systems',
      icon: schoolIcon,
      points: [
        'Student information management',
        'Attendance & timetable management',
        'Fee collection & accounting',
        'Examination & result processing',
        'Library & transport management'
      ]
    },
    {
      id: 3,
      title: 'eLearning & EdTech Platforms',
      icon: eLearningIcon,
      points: [
        'Live & recorded classes',
        'Interactive quizzes & tests',
        'Gamified learning modules',
        'Subscription & payment integration',
        'Multi-device access'
      ]
    },
    {
      id: 4,
      title: 'Online Examination & Assessment Systems',
      icon: examIcon,
      points: [
        'Secure exam platforms',
        'Automated evaluation',
        'Proctoring & monitoring',
        'Performance analytics'
      ]
    },
    {
      id: 5,
      title: 'Training & Skill Development Apps',
      icon: skillIcon,
      points: [
        'Course scheduling',
        'Learning paths & certifications',
        'Skill assessments',
        'Corporate & professional training modules'
      ]
    }
  ]
};

const educationBenefitsData = {
  title: <>Benefits For<br /><span className="text-primary">Educational Institutions &<br />EdTech</span> Companies</>,
  description: "By implementing smart, technology-driven education solutions, organizations can unlock measurable improvements in learning outcomes and operational efficiency:",
  benefitsData: [
    {
      icon: lectureIcon,
      title: "Enhanced student engagement and learning outcomes",
      description: "through interactive content, multimedia, and personalized learning paths"
    },
    {
      icon: monitorIcon,
      title: "Streamlined academic and administrative operations",
      description: "with centralized systems and automated workflows"
    },
    {
      icon: negotiationIcon,
      title: "Improved communication between stakeholders",
      description: "including students, educators, parents, and administrators"
    },
    {
      icon: examIcon,
      title: "Data-driven insights into student performance",
      description: "powered by real-time analytics and progress tracking"
    },
    {
      icon: lmsIcon,
      title: "Scalable online and hybrid learning models",
      description: "supported by cloud-based, flexible platforms"
    },
    {
      icon: shieldIcon,
      title: "Secure and compliant data handling",
      description: "with role-based access, privacy controls, and reliable backups"
    },
    {
      icon: eLearningIcon,
      title: "Better accessibility and inclusivity",
      description: "via mobile-first design and anytime, anywhere access"
    }
  ]
};

const educationWhoWeServeData = {
  title: <>Who We <span className="text-primary">Serve</span></>,
  description: "Our education technology solutions are ideal for:",
  image: whoWeServeImg,
  leftItems: [
    "Schools & colleges",
    "Universities & educational boards",
    "Coaching institutes & training centers"
  ],
  rightItems: [
    "Corporate training providers",
    "Online learning platforms & ed-tech startups"
  ],
  bgColor: "bg-[#f8fafa]"
};

const educationWhyChooseUsData = {
  title: <>Why <span className="text-primary">Choose</span> Us?</>,
  image: whyChooseUsImg,
  leftItems: [
    "Deep understanding of education workflows",
    "Custom-built, scalable digital platforms",
    "Focus on intuitive UI/UX for learners and educators",
    "Seamless integration with existing systems"
  ],
  rightItems: [
    "End-to-end development, deployment & support",
    "Secure, future-ready technology architecture"
  ],
  bgColor: "bg-white"
};

const EducationPage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader
        subtitle="Education Industry Solutions — Software & App Development"
        title={<>Empowering Education with Smart<br />Digital Learning Solutions</>}
        description={
          <>
            The education sector is rapidly embracing digital transformation to enhance learning experiences, streamline administration, and improve student engagement. Our custom education software and mobile app development solutions help schools, colleges, universities, training institutes, and ed-tech companies deliver smarter, more connected, and more effective education.
            <br /><br />
            We design scalable and secure digital platforms that support <strong className="font-semibold">learning, teaching, administration, and collaboration</strong>—all in one ecosystem.
          </>
        }
        bgImage={bgImage}
        className="!py-16 md:!py-20 lg:!py-24"
      >
        <Button variant="secondary" arrow={true}>
          Request A Quote
        </Button>
      </PageHeader>
      
      <ChallengesSection {...educationChallengesData} />
      <SolutionsCarousel {...educationSolutionsData} />
      
      <SplitContentSection 
        title={
          <>
            Core Features of Our<br />
            <span className="text-primary">Education Solutions</span>
          </>
        }
        description="Our education solutions offer user-friendly dashboards for students and educators, with cloud-based, mobile-first access for learning anytime, anywhere. They support interactive multimedia content, real-time notifications, and performance analytics, while ensuring secure data management, privacy controls, and seamless integration with payment gateways and third-party tools."
        listItems={[
          "User-friendly dashboards for students & educators",
          "Cloud-based access anytime, anywhere",
          "Mobile-first learning experience",
          "Interactive content & multimedia support",
          "Real-time notifications & alerts",
          "Analytics & performance insights",
          "Cloud-based accessibility",
          "Secure data management & privacy controls",
          "Integration with payment gateways & third-party tools"
        ]}
        image={educationFeaturesImg}
        imageAlt="Students studying with laptops"
        bgColor="bg-[#ffffff]"
        titleFontWeight="font-bold"
        pillLayout="flex"
      />
      
      <SplitCTASection 
        title="Let's Build the Future of Learning Together"
        description1={<>Whether you want to launch an e-learning platform, modernize your institution's management system, or build a complete ed-tech ecosystem, we help you transform education through <strong className="font-semibold">innovative digital solutions</strong>.</>}
        description2={<strong className="font-semibold text-white">Educate smarter. Engage better. Scale faster.</strong>}
        buttonText="Get Started"
        image={ctaImg}
      />

      <TechStackSection />
      <BenefitsGrid {...educationBenefitsData} />
      <WhoWeServeSection {...educationWhoWeServeData} />
      <WhyChooseUsSection {...educationWhyChooseUsData} />
      
      <TrustedBy />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default EducationPage;
