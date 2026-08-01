import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

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

const App = () => {
  return (
    <BrowserRouter>
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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;