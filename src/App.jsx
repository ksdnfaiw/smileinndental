import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import ThankYou from './pages/ThankYou';

// New Treatment Pages
import Treatments from './pages/Treatments';
import GeneralDentistry from './pages/GeneralDentistry';
import Orthodontics from './pages/Orthodontics';
import CosmeticDentistry from './pages/CosmeticDentistry';
import CategoryDetail from './pages/CategoryDetail';
import OralSurgery from './pages/OralSurgery';
import EmergencyCare from './pages/EmergencyCare';
import PediatricCare from './pages/PediatricCare';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      style={{
        animation: 'pageFadeIn 0.4s ease-out forwards',
      }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/services/:categorySlug" element={<CategoryDetail />} />
        
        {/* Treatment Routes */}
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments/general-dentistry" element={<GeneralDentistry />} />
        <Route path="/treatments/orthodontics" element={<Orthodontics />} />
        <Route path="/treatments/emergency-care" element={<EmergencyCare />} />
        <Route path="/treatments/cosmetic-dentistry" element={<CosmeticDentistry />} />
        <Route path="/treatments/oral-surgery" element={<OralSurgery />} />
        <Route path="/treatments/pediatric-care" element={<PediatricCare />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <style>{`
        @keyframes pageFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <FloatingActions />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
