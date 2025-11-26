import React from 'react';
import CountUp from './CountUp';

const TrustSection = () => {
    return (
        <section className="section" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <div className="container">

                {/* Trust Badges Removed */}

                <p style={{
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '2rem'
                }}>
                    Expertise Across Industries
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '4rem'
                }}>
                    {['Lifestyle', 'Wellness', 'Technology', 'Hospitality', 'Construction'].map((sector) => (
                        <div key={sector} style={{
                            padding: '0.75rem 1.5rem',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '100px',
                            color: 'var(--text-secondary)',
                            fontSize: '0.95rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--accent-primary)';
                                e.target.style.color = 'var(--text-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'var(--border-subtle)';
                                e.target.style.color = 'var(--text-secondary)';
                            }}
                        >
                            {sector}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {[
                        { label: 'Ad Spend Managed', value: 500, prefix: '$', suffix: 'k+' },
                        { label: 'Campaigns Launched', value: 1200, suffix: '+' },
                        { label: 'Average ROI', value: 450, suffix: '%' }
                    ].map((stat) => (
                        <div key={stat.label} style={{
                            textAlign: 'center',
                            padding: '2rem',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-subtle)'
                        }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
