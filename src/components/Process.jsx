import React from 'react';

const Process = () => {
    const steps = [
        { num: "01", title: "Audit & Strategy", desc: "We analyze your current performance and identify high-impact opportunities." },
        { num: "02", title: "Execution", desc: "Our team deploys precision campaigns across optimal channels." },
        { num: "03", title: "Optimization", desc: "Continuous A/B testing and refinement to maximize ROI." },
        { num: "04", title: "Scale", desc: "Doubling down on winning strategies for exponential growth." }
    ];

    return (
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The GrowthMeta Process</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>A scientific approach to scaling your business.</p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    {steps.map((step, index) => (
                        <div key={step.num} style={{ position: 'relative' }}>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: '700',
                                color: 'var(--border-subtle)',
                                lineHeight: 1,
                                marginBottom: '1rem'
                            }}>
                                {step.num}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{step.desc}</p>

                            {/* Connector Line (Desktop only) */}
                            {index < steps.length - 1 && (
                                <div className="connector" style={{
                                    position: 'absolute',
                                    top: '2rem',
                                    right: '-1rem',
                                    width: '2rem',
                                    height: '1px',
                                    background: 'var(--border-subtle)',
                                    display: 'none' // Hidden by default, shown via CSS if needed
                                }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
