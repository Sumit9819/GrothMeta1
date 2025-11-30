import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-secondary)', padding: '5rem 0 2rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '4rem', gap: '3rem' }}>

                    {/* Brand Section */}
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-display)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <img src="/logo.png" alt="GrowthMeta Logo" style={{ height: '32px', width: 'auto' }} />
                            GROWTHMETA
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                            Data-driven digital marketing for ambitious brands ready to scale. We combine strategy, creativity, and technology to drive measurable growth.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[
                                {
                                    name: 'Facebook',
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                },
                                {
                                    name: 'LinkedIn',
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                },
                                {
                                    name: 'Instagram',
                                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                }
                            ].map(social => (
                                <div key={social.name} style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--bg-primary)',
                                    border: '1px solid var(--border-subtle)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    color: 'var(--text-secondary)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        e.currentTarget.style.color = 'var(--accent-primary)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                    }}
                                >
                                    {social.icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Section */}
                    <div>
                        <div style={{ marginBottom: '1.5rem', fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Services</div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem', padding: 0 }}>
                            {servicesData.slice(0, 6).map(service => (
                                <li key={service.slug}>
                                    <Link to={`/services/${service.slug}`} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                                        onMouseLeave={(e) => e.target.style.color = 'inherit'}
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link to="/services" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '500' }}>View All Services →</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <div style={{ marginBottom: '1.5rem', fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Company</div>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem', padding: 0 }}>
                            <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</Link></li>
                            <li><Link to="/work" style={{ color: 'inherit', textDecoration: 'none' }}>Our Work</Link></li>
                            <li><Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link></li>
                            <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link></li>
                            <li><span style={{ color: 'var(--text-muted)', cursor: 'not-allowed' }}>Careers (Hiring)</span></li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <div style={{ marginBottom: '1.5rem', fontWeight: '600', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Stay Updated</div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            Get the latest digital marketing insights and strategies delivered to your inbox.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--border-subtle)',
                                    background: 'var(--bg-primary)',
                                    color: 'var(--text-primary)',
                                    outline: 'none',
                                    fontSize: '0.9rem'
                                }}
                            />
                            <button className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '0.9rem' }}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '2rem',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem'
                }}>
                    <div>© {new Date().getFullYear()} GrowthMeta. All rights reserved.</div>
                    <div className="flex" style={{ gap: '2rem' }}>
                        <Link to="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
