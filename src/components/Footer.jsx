import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-secondary)', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '4rem', gap: '2rem' }}>
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-display)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <img src="/logo.png" alt="GrowthMeta Logo" style={{ height: '32px', width: 'auto' }} />
                            GROWTHMETA
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '250px' }}>
                            Data-driven digital marketing for ambitious brands ready to scale.
                        </p>
                    </div>

                    <div>
                        <div style={{ marginBottom: '1.5rem', fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Services</div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem', padding: 0 }}>
                            <li><Link to="/services/seo" style={{ color: 'inherit', textDecoration: 'none' }}>SEO & Content</Link></li>
                            <li><Link to="/services/ppc" style={{ color: 'inherit', textDecoration: 'none' }}>Paid Media (PPC)</Link></li>
                            <li><Link to="/services/smm" style={{ color: 'inherit', textDecoration: 'none' }}>Social Media</Link></li>
                            <li><Link to="/services/email-marketing" style={{ color: 'inherit', textDecoration: 'none' }}>Email Marketing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div style={{ marginBottom: '1.5rem', fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Contact Us</div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem', padding: 0 }}>
                            <li>Taudaha, Kirtipur, Nepal</li>
                            <li><a href="tel:9861040565" style={{ color: 'inherit', textDecoration: 'none' }}>9861040565</a></li>
                            <li><a href="mailto:info@growthmeta.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@growthmeta.com</a></li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem'
                }}>
                    <div>© 2025 GrowthMeta. All rights reserved.</div>
                    <div className="flex" style={{ gap: '1.5rem' }}>
                        <Link to="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            Privacy Policy
                        </Link>
                        <span style={{ color: 'var(--text-muted)' }}>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
