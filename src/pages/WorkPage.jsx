import React from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import TrustSection from '../components/TrustSection';

const WorkPage = () => {
    const industries = [
        {
            title: "Lifestyle",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78 7.65 7.65 7.65-7.65.77-.78a5.4 5.4 0 0 0 0-7.65Z"></path></svg>,
            description: "Blending data-driven marketing with aspirational storytelling to make your brand part of everyday life.",
            expertise: "Trend-aligned content, Influencer partnerships, Brand building"
        },
        {
            title: "Wellness",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
            description: "Communicating mission with clarity to nurture loyal communities and drive long-term engagement.",
            expertise: "Retention flows, Credibility content, Scalable growth"
        },
        {
            title: "Technology",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
            description: "Simplifying complex offerings into compelling narratives that attract users, investors, and partners.",
            expertise: "SaaS performance, Product storytelling, Demand gen"
        },
        {
            title: "Hospitality",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M5 21V7a8 8 0 0 1 14 0v14"></path><path d="M9 10a2 2 0 1 1-4 0"></path><path d="M9 14a2 2 0 1 1-4 0"></path><path d="M19 10a2 2 0 1 1-4 0"></path><path d="M19 14a2 2 0 1 1-4 0"></path></svg>,
            description: "Delivering unforgettable digital experiences that elevate brand perception and increase bookings.",
            expertise: "Brand revamps, Localized SEO, Reputation enhancement"
        },
        {
            title: "Construction",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20"></path><path d="M6 22V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v20"></path><path d="M6 12h12"></path><path d="M6 7h12"></path><path d="M6 17h12"></path></svg>,
            description: "Showcasing expertise and strengthening digital footprints to build trust with investors and clients.",
            expertise: "B2B lead gen, Project content, Industry SEO"
        },
        {
            title: "E-Commerce",
            icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>,
            description: "Scalable growth for online stores. We optimize every touchpoint from discovery to checkout.",
            expertise: "CRO, Shopping Ads, Retention, Analytics"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#050505', color: '#ffffff' }}>
            <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '0' }}>
                {/* Abstract 3D Graphic / Data Viz Background */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-10%',
                    transform: 'translateY(-50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle at center, rgba(0, 229, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '5%',
                    width: '400px',
                    height: '400px',
                    border: '1px solid rgba(0, 229, 255, 0.1)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    border: '1px solid rgba(0, 229, 255, 0.2)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ maxWidth: '800px' }}
                    >
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                            Driving Growth for <br />
                            <span style={{
                                background: 'linear-gradient(to right, #00E5FF, #00E676)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: '0 0 30px rgba(0, 229, 255, 0.3)'
                            }}>High-Impact Industries</span>
                        </h1>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#e0e0e0', fontWeight: '400' }}>
                            Strategic Expertise That Elevates Your Brand
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#a0a0a0', marginBottom: '3rem', lineHeight: '1.6', maxWidth: '600px' }}>
                            We don't believe in one-size-fits-all. We craft tailored digital solutions designed to maximize visibility, strengthen brand authority, and generate measurable growth for your specific market.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Trusted By Strip */}
            <div style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', background: '#0a0a0a' }}>
                <TrustSection />
            </div>

            <section className="section">
                <div className="container">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '2rem'
                        }}
                    >
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 20px 40px -10px rgba(0, 229, 255, 0.15)',
                                    borderColor: 'rgba(0, 229, 255, 0.3)'
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: '#0F0F0F',
                                    padding: '2.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid #1f1f1f',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'default'
                                }}
                            >
                                <div style={{
                                    marginBottom: '1.5rem',
                                    color: '#00E5FF',
                                    background: 'rgba(0, 229, 255, 0.05)',
                                    width: 'fit-content',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0, 229, 255, 0.1)'
                                }}>
                                    {industry.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ffffff', fontWeight: '600' }}>
                                    {industry.title}
                                </h3>
                                <p style={{ color: '#a0a0a0', marginBottom: '1.5rem', flex: 1, lineHeight: '1.6', fontSize: '1rem' }}>
                                    {industry.description}
                                </p>
                                <div style={{
                                    paddingTop: '1.5rem',
                                    borderTop: '1px solid #1f1f1f',
                                    color: '#e0e0e0',
                                    fontWeight: '500',
                                    fontSize: '0.85rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <span style={{ color: '#00E5FF' }}>•</span>
                                    {industry.expertise}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default WorkPage;
