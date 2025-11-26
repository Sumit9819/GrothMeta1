import React from 'react';
import CTASection from '../../components/CTASection';
import LeadMagnet from '../../components/LeadMagnet';
import SEO from '../../components/SEO';

const PPCPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <SEO
                title="PPC & Paid Media Management"
                description="Maximize your ROAS with our data-driven PPC strategies. We manage Google Ads, LinkedIn, and Meta campaigns for high-growth brands."
            />
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                        SERVICES / PAID MEDIA
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', maxWidth: '900px' }}>
                        Precision <span className="text-gradient">Paid Media</span> Campaigns
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                        Stop wasting ad spend on broad targeting. We use algorithmic bidding, granular audience segmentation, and creative testing to scale your revenue.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>

                    {/* Main Content Area */}
                    <article style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '0', marginBottom: '1.5rem' }}>
                            The Science of Scale
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Paid media is no longer just about "buying traffic." It's about buying <strong>revenue</strong>. In an era of privacy changes (iOS 14+) and rising CPMs, you need a strategy that prioritizes first-party data and creative excellence.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            We manage over $50M in annual ad spend across Google, Meta, LinkedIn, and TikTok. Our approach is simple: we test ruthlessly, kill losers quickly, and scale winners aggressively.
                        </p>

                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Our Capabilities
                        </h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Google Ads (Search & Shopping):</strong> Capture high-intent demand with perfectly structured campaigns and shopping feeds optimized for profitability.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>LinkedIn B2B:</strong> Target decision-makers by job title, industry, and company size. Perfect for SaaS and Enterprise lead gen.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Social Advertising (Meta/TikTok):</strong> Generate demand with thumb-stopping creative and full-funnel retargeting sequences.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Programmatic & Display:</strong> Expand your reach with targeted display and video ads across the open web.
                            </li>
                        </ul>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Our "Alpha-Beta" Testing Framework
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We don't guess. We use a rigorous testing framework to isolate variables and identify what drives performance.
                        </p>
                        <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Alpha Phase:</strong> Rapid testing of new angles, creatives, and audiences with small budgets.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Beta Phase:</strong> Validating winning concepts with statistical significance.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Scale Phase:</strong> Aggressively increasing budget on proven winners while maintaining ROAS efficiency.</li>
                        </ol>

                        <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderLeft: '4px solid var(--accent-primary)', marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--text-primary)', marginTop: 0 }}>Case Study: E-commerce Brand</h4>
                            <p style={{ marginBottom: 0 }}>
                                By restructuring their Google Shopping feed and implementing our "Alpha-Beta" creative testing on Meta, we increased ROAS from 2.5x to <strong>8.5x</strong> in 90 days.
                            </p>
                        </div>

                    </article>

                    {/* Sidebar */}
                    <aside>
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Related Services</h4>
                            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Conversion Optimization</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Data Analytics</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Creative Strategy</li>
                            </ul>
                        </div>
                        <LeadMagnet />
                    </aside>

                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default PPCPage;
