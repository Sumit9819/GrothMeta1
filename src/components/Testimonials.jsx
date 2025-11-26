import React, { useEffect, useState } from 'react';
import { client } from '../client';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const query = `*[_type == "testimonial"]{
            clientName,
            clientRole,
            quote
        }`;

        client.fetch(query)
            .then(data => setTestimonials(data))
            .catch(console.error);
    }, []);

    const displayTestimonials = testimonials.length > 0 ? testimonials : [
        {
            quote: "GrowthMeta completely transformed our acquisition strategy. Our CAC dropped by 40% in just 3 months.",
            clientName: "Sarah Jenkins",
            clientRole: "CMO, TechFlow"
        },
        {
            quote: "The level of transparency and data depth they provide is unmatched. Finally, an agency that speaks our language.",
            clientName: "Michael Chen",
            clientRole: "Founder, Luxe Commerce"
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Client Feedback</h2>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {displayTestimonials.map((item, i) => (
                        <div key={i} style={{
                            padding: '2.5rem',
                            border: '1px solid var(--border-subtle)',
                            background: 'var(--bg-tertiary)'
                        }}>
                            <div style={{ color: 'var(--accent-primary)', fontSize: '2rem', lineHeight: 1, marginBottom: '1rem' }}>"</div>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontStyle: 'italic' }}>{item.quote}</p>
                            <div>
                                <div style={{ fontWeight: '600' }}>{item.clientName}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.clientRole}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
