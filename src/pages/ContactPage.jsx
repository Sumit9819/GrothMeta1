import React from 'react';

const ContactPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                            Let's Talk <br />
                            <span className="text-gradient">Growth.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                            Ready to see what GrowthMeta can do for your business? Fill out the form and we'll be in touch within 24 hours.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Email Us</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>hello@growthmeta.com</p>
                        </div>

                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Visit Us</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                123 Growth Street, Suite 400<br />
                                San Francisco, CA 94107
                            </p>
                        </div>
                    </div>

                    <form style={{
                        background: 'var(--bg-secondary)',
                        padding: '2rem',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px'
                    }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Name</label>
                            <input type="text" style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-primary)',
                                borderRadius: '4px'
                            }} placeholder="John Doe" />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email</label>
                            <input type="email" style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-primary)',
                                borderRadius: '4px'
                            }} placeholder="john@company.com" />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
                            <textarea style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-primary)',
                                borderRadius: '4px',
                                minHeight: '150px'
                            }} placeholder="Tell us about your goals..." />
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
