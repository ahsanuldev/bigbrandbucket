import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import UiUxPage from './pages/UiUxPage';
import SolutionDesigningPage from './pages/SolutionDesigningPage';
import CloudComputingPage from './pages/CloudComputingPage';
import CrossPlatformDevelopmentPage from './pages/CrossPlatformDevelopmentPage';
import ManufacturingPage from './pages/ManufacturingPage';
import LogisticsPage from './pages/LogisticsPage';
import ConstructionPage from './pages/ConstructionPage';
import EducationPage from './pages/EducationPage';
import TravelPage from './pages/TravelPage';
import AutomotivePage from './pages/AutomotivePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Default is 1.2, gives a nice lightweight smooth feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
    });

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen font-san overflow-x-clip">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Services */}
          <Route path="/app-development" element={<AppDevelopmentPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/software-development-company-in-gurgaon" element={<SoftwareDevelopmentPage />} />
          <Route path="/ui-ux" element={<UiUxPage />} />
          <Route path="/solution-designing" element={<SolutionDesigningPage />} />
          <Route path="/cloud-computing" element={<CloudComputingPage />} />
          <Route path="/cross-platform-development" element={<CrossPlatformDevelopmentPage />} />

          {/* Industries */}
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/logistics" element={<LogisticsPage />} />
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/automotive" element={<AutomotivePage />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;