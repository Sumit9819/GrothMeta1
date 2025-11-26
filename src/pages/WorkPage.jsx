import React from 'react';
import CaseStudies from '../components/CaseStudies';
import CTASection from '../components/CTASection';

const WorkPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                        Our <span className="text-gradient">Work</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        Real results for real businesses. Explore how we've helped our clients scale.
                    </p>
                </div>
            </section>

            {/* Reusing the CaseStudies component for now, but in a real app this would be a more extensive list */}
            <CaseStudies />

            <CTASection />
        </div>
    );
};

export default WorkPage;
