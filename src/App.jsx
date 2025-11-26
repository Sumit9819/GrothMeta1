import React, { useEffect, lazy, Suspense } from 'react';
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

// Lazy load pages for better performance
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SEOStrategyPage = lazy(() => import('./pages/services/SEOStrategyPage'));
const PPCPage = lazy(() => import('./pages/services/PPCPage'));
const AnalyticsPage = lazy(() => import('./pages/services/AnalyticsPage'));
const CROPage = lazy(() => import('./pages/services/CROPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
