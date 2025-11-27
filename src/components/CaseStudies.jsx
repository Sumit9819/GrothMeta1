import React, { useEffect, useState } from 'react';
import CountUp from './CountUp';
import { client } from '../client';

const CaseStudies = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        const query = `*[_type == "caseStudy"]{
            title,
            keyStatValue,
            keyStatPrefix,
            keyStatSuffix,
            keyStatLabel,
            summary,
            tags
        }`;

        client.fetch(query)
            .then(data => setCases(data))
            .catch(console.error);
    }, []);

    // Fallback if no data
    const displayCases = cases.length > 0 ? cases : [
        {
            title: "Lifestyle Brand Growth",
            keyStatValue: 240,
            keyStatPrefix: "+",
            keyStatSuffix: "%",
            keyStatLabel: "Revenue Increase",
            summary: "Scaled D2C lifestyle brand through influencer partnerships and paid social.",
            tags: ["Lifestyle", "D2C"]
        },
        {
            title: "Wellness App Scale",
            keyStatValue: 8.5,
            keyStatSuffix: "x",
            keyStatLabel: "ROAS",
            summary: "Optimized user acquisition for a wellness application using targeted video ads.",
            tags: ["Wellness", "App"]
        },
        {
            title: "Tech Solutions B2B",
            keyStatValue: 60,
            keyStatPrefix: "-",
            keyStatSuffix: "%",
            keyStatLabel: "Lead Cost",
            summary: "Revamped lead generation strategy for a technology service provider.",
            tags: ["Technology", "B2B"]
        }
    ];

    return (
        <section className="section" id="work">
            <div className="container">
                <div className="flex-between" style={{ marginBottom: '3rem', alignItems: 'flex-end' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Proven Results</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>We don't just promise growth. We engineer it.</p>
                    </div>

                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {displayCases.map((item, index) => (
                        <div key={index} style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-subtle)',
                            padding: '2rem',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                            }}
                        >
                            <div style={{
                                fontSize: '3.5rem',
                                fontWeight: '700',
                                color: 'var(--success)',
                                marginBottom: '0.5rem',
                                lineHeight: 1
                            }}>
                                <CountUp
                                    end={item.keyStatValue}
                                    prefix={item.keyStatPrefix}
                                    suffix={item.keyStatSuffix}
                                />
                            </div>
                            <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                marginBottom: '2rem',
                                borderBottom: '1px solid var(--border-subtle)',
                                paddingBottom: '1rem'
                            }}>
                                {item.keyStatLabel}
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                                {item.summary}
                            </p>

                            <div className="flex" style={{ gap: '0.5rem', marginBottom: '2rem' }}>
                                {item.tags && item.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.75rem',
                                        padding: '0.25rem 0.75rem',
                                        background: 'var(--bg-tertiary)',
                                        borderRadius: '100px',
                                        color: 'var(--text-muted)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
