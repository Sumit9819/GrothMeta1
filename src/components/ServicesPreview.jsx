import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
    const services = [
        {
            title: "SEO & Content",
            desc: "Dominate search rankings with data-backed content strategies.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            )
        },
        {
            title: "Paid Media (PPC)",
            desc: "High-intent traffic acquisition with maximized ROAS.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="20" x2="12" y2="10"></line>
                    <line x1="18" y1="20" x2="18" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
            )
        },
        {
            title: "Data Analytics",
            desc: "Turn raw data into actionable growth insights.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
            )
        },
        {
            title: "Conversion (CRO)",
            desc: "Optimize user journeys to turn visitors into revenue.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            )
        }
    ];

    return (
        <section className="section" id="services">
            <div className="container">
                <div className="flex-between" style={{ marginBottom: '3rem', alignItems: 'flex-end' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Expertise</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>Comprehensive growth solutions for modern brands.</p>
                    </div>
                    <Link to="/services" className="btn btn-outline">View All Services</Link>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    {services.map((service) => (
                        <div key={service.title} style={{
                            padding: '2rem',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-subtle)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                e.currentTarget.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                {service.desc}
                            </p>
                            <Link to="/services" style={{
                                color: 'var(--accent-primary)',
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                Learn More →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
