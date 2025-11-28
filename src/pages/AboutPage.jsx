import React, { useEffect, useState } from 'react';
import CTASection from '../components/CTASection';
import { client, urlFor } from '../client';

const AboutPage = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const query = `*[_type == "teamMember"]{
            name,
            role,
            bio,
            photo,
            linkedinUrl
        }`;

        client.fetch(query)
            .then(data => setTeam(data))
            .catch(console.error);
    }, []);

    const displayTeam = team.length > 0 ? team : [
        { name: "Alex Rivera", role: "CEO & Founder", bio: "Ex-Google Data Scientist with 10+ years in predictive analytics.", color: "#FF5722" },
        { name: "Sarah Chen", role: "Head of Strategy", bio: "Scaled 3 SaaS unicorns from Series A to IPO.", color: "#00E5FF" },
        { name: "Marcus Johnson", role: "Lead Developer", bio: "Full-stack engineer specializing in technical SEO and automation.", color: "#00E676" }
    ];

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                        About <span className="text-gradient">GrowthMeta</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        We are a team of data scientists, creatives, and strategists obsessed with growth.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                Digital marketing has become too complex and opaque. Agencies hide behind vanity metrics while businesses struggle to see real ROI.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                GrowthMeta was founded to change that. We believe in radical transparency and data-driven decision making. We don't guess; we test, measure, and optimize.
                            </p>
                        </div>
                        <div style={{
                            height: '400px',
                            border: '1px solid var(--border-subtle)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="/team.jpg"
                                alt="GrowthMeta Team"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Meet The Team</h2>
                    <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {displayTeam.map((member, index) => (
                            <div key={index} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
                                <div style={{ height: '250px', background: `linear-gradient(135deg, ${member.color ? member.color : 'var(--accent-primary)'}22, var(--bg-primary))`, display: 'flex', alignItems: 'flex-end', padding: '1rem', position: 'relative' }}>
                                    {member.photo ? (
                                        <img
                                            src={urlFor(member.photo).width(400).url()}
                                            alt={member.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                                        />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', opacity: 0.5 }}>
                                            👤
                                        </div>
                                    )}
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                                    <div style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: '600' }}>{member.role}</div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default AboutPage;
