import React, { useEffect, useState } from 'react';
import CTASection from '../components/CTASection';
import { client } from '../client';

const ServicesPage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const query = `*[_type == "service"]{
            title,
            shortDescription,
            features,
            "slug": slug.current
        }`;

        client.fetch(query)
            .then(data => setServices(data))
            .catch(console.error);
    }, []);

    const displayServices = services.length > 0 ? services : [
        {
            title: "SEO & Content Strategy",
            shortDescription: "We don't just chase keywords; we dominate topics. Our programmatic SEO approach ensures you capture high-intent traffic at every stage of the funnel.",
            features: ["Technical SEO Audit", "Content Architecture", "Link Building", "Local SEO"],
            slug: "seo"
        },
        {
            title: "Paid Media (PPC)",
            shortDescription: "Stop wasting budget on broad targeting. We use algorithmic bidding and granular audience segmentation to maximize your ROAS.",
            features: ["Google Ads", "LinkedIn B2B", "Meta Advertising", "Retargeting"],
            slug: "ppc"
        },
        {
            title: "Data Analytics & BI",
            shortDescription: "Move beyond vanity metrics. We build custom dashboards that connect marketing activities directly to revenue outcomes.",
            features: ["Looker Studio Dashboards", "GA4 Configuration", "Attribution Modeling", "Conversion Tracking"],
            slug: "analytics"
        },
        {
            title: "Conversion Rate Optimization",
            shortDescription: "Traffic is useless if it doesn't convert. We use heatmaps, A/B testing, and user recording to optimize every touchpoint.",
            features: ["Landing Page Design", "A/B Testing", "User Journey Mapping", "Form Optimization"],
            slug: "cro"
        }
    ];

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
                <div className="container grid" style={{ gap: '4rem' }}>
                    {displayServices.map((service, index) => (
                        <div key={index} style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            alignItems: 'center',
                            padding: '2rem',
                            border: '1px solid var(--border-subtle)',
                            background: 'var(--bg-primary)'
                        }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.title}</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
                                    {service.shortDescription}
                                </p>
                                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                                    {service.features && service.features.map(feature => (
                                        <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                            <span style={{ color: 'var(--accent-primary)' }}>✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href={`/services/${service.slug}`} className="btn btn-outline" style={{ display: 'inline-block' }}>
                                    View Strategy →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default ServicesPage;
