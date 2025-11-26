import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="section" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div className="container">
                <div style={{
                    background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                    padding: '4rem 2rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-subtle)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Glow Effect */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                        opacity: 0.3,
                        zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                            Ready to Scale Your Revenue?
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
                            Stop guessing. Start growing. Get a comprehensive audit of your current digital presence and a roadmap to market dominance.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Get Your Free Proposal
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
