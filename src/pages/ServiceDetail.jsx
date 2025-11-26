import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import CTASection from '../components/CTASection';
import LeadMagnet from '../components/LeadMagnet';
import { servicesData } from '../data/services';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData.find(s => s.slug === slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        SERVICES / {service.title}
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', maxWidth: '900px' }}>
                        {service.subtitle}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                        {service.description}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Main Content Area */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <article style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>

                            <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '0', marginBottom: '1.5rem' }}>
                                Why Choose Our {service.title}?
                            </h2>
                            <p style={{ marginBottom: '2rem' }}>
                                In today's digital landscape, {service.title.toLowerCase()} is essential for growth.
                                We take a data-first approach to ensure every action we take contributes to your bottom line.
                            </p>

                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                                Key Features
                            </h3>
                            <ul style={{ marginBottom: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {service.features.map((feature, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                                Benefits for Your Business
                            </h3>
                            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
                                {service.benefits.map((benefit, index) => (
                                    <div key={index} style={{
                                        padding: '1.5rem',
                                        background: 'var(--bg-secondary)',
                                        borderLeft: '4px solid var(--accent-primary)',
                                        borderRadius: '0 8px 8px 0'
                                    }}>
                                        <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: '500' }}>{benefit}</p>
                                    </div>
                                ))}
                            </div>

                        </article>
                    </div>

                    {/* Sidebar */}
                    <aside>
                        <div style={{ marginBottom: '2rem', position: 'sticky', top: '100px' }}>
                            <LeadMagnet />

                            <div style={{ marginTop: '2rem', padding: '2rem', border: '1px solid var(--border-subtle)', borderRadius: '8px' }}>
                                <h4 style={{ marginBottom: '1rem' }}>Need Help?</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                    Not sure if {service.title} is right for you? Book a free strategy call.
                                </p>
                                <a href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                    Book Free Audit
                                </a>
                            </div>
                        </div>
                    </aside>

                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default ServiceDetail;
