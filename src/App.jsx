import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ServicesPreview from './components/ServicesPreview';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

// Pages
import ServicesPage from './pages/ServicesPage';
import SEOStrategyPage from './pages/services/SEOStrategyPage';
import PPCPage from './pages/services/PPCPage';
import AnalyticsPage from './pages/services/AnalyticsPage';
import CROPage from './pages/services/CROPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <TrustSection />
                <ServicesPreview />
                <Process />
                <CaseStudies />
                <Testimonials />
                <FAQ />
                <CTASection />
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/seo" element={<SEOStrategyPage />} />
            <Route path="/services/ppc" element={<PPCPage />} />
            <Route path="/services/analytics" element={<AnalyticsPage />} />
            <Route path="/services/cro" element={<CROPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
