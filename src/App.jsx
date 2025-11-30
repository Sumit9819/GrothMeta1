import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
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
import NotFoundPage from './pages/NotFoundPage';

// Lazy load pages for better performance
// Lazy load pages for better performance
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));

// Loading component
const PageLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)'
  }}>
    Loading...
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Hero />
            <TrustSection />
            <ServicesPreview />
            <Process />
            <CaseStudies />
            <Testimonials />
            <FAQ />
            <CTASection />
          </PageTransition>
        } />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
        <Route path="/work" element={<PageTransition><WorkPage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPostPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfServicePage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
