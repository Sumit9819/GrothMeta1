import React from 'react';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                        Growth Engineering <br />
                        <span className="text-gradient">Services</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        We combine creative strategy with data science to build marketing engines that scale.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
                    {servicesData.map((service, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '2rem',
                            border: '1px solid var(--border-subtle)',
                            background: 'var(--bg-primary)',
                            borderRadius: '8px',
                            transition: 'transform 0.3s ease',
                            height: '100%'
                        }}
                        >
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', flex: 1 }}>
                                {service.description.substring(0, 120)}...
                            </p>
                            <ul style={{ listStyle: 'none', marginBottom: '2rem', fontSize: '0.9rem' }}>
                                {service.features.slice(0, 3).map(feature => (
                                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link to={`/services/${service.slug}`} className="btn btn-outline" style={{ display: 'inline-block', textAlign: 'center', marginTop: 'auto' }}>
                                View Strategy →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <FAQ />

            <CTASection />
        </div>
    );
};

export default ServicesPage;
