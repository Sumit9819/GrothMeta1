import React from 'react';
import CTASection from '../../components/CTASection';
import LeadMagnet from '../../components/LeadMagnet';

const SEOStrategyPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                        SERVICES / SEO
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', maxWidth: '900px' }}>
                        Data-Driven <span className="text-gradient">SEO Strategies</span> for Market Dominance
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                        We move beyond basic keyword stuffing. Our programmatic and technical SEO frameworks are designed to capture high-intent traffic at scale and drive measurable revenue growth.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>

                    {/* Main Content Area */}
                    <article style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '0', marginBottom: '1.5rem' }}>
                            The Modern SEO Landscape
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Search engines are evolving faster than ever. With the rise of AI Overviews (SGE) and zero-click searches, traditional SEO tactics are becoming obsolete. To win in 2025, you need a strategy that prioritizes <strong>Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)</strong> while leveraging technical excellence to ensure crawlability.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            At GrowthMeta, we don't just optimize for bots; we optimize for revenue. Our holistic approach connects search intent with business outcomes.
                        </p>

                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Our 4-Pillar SEO Framework
                        </h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Technical Foundation:</strong> We start with a comprehensive audit of your site's architecture. Core Web Vitals, schema markup, and renderability are non-negotiable.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Semantic Content Strategy:</strong> We map content to the buyer's journey. From top-of-funnel educational guides to bottom-of-funnel comparison pages, we ensure you own the topic, not just the keyword.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Authority Building:</strong> Quality over quantity. Our digital PR team secures high-DR backlinks from reputable industry publications, signaling trust to search algorithms.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Conversion Optimization:</strong> Traffic is vanity; revenue is sanity. We rigorously test meta descriptions, headlines, and on-page CTAs to maximize click-through and conversion rates.
                            </li>
                        </ul>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Why Programmatic SEO?
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            For businesses with large inventories or scalable services, manual page creation is a bottleneck. <strong>Programmatic SEO (pSEO)</strong> allows us to generate thousands of high-quality, unique landing pages targeting long-tail keywords.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            By leveraging structured data and templates, we can dominate niche queries that your competitors are ignoring. This strategy has helped our SaaS clients increase organic traffic by over 300% in under 6 months.
                        </p>

                        <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderLeft: '4px solid var(--accent-primary)', marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--text-primary)', marginTop: 0 }}>Case Study: FinTech Unicorn</h4>
                            <p style={{ marginBottom: 0 }}>
                                We implemented a pSEO strategy targeting "comparison" keywords (e.g., "Competitor A vs Competitor B"). The result? <strong>$1.2M in attributed ARR</strong> within the first year.
                            </p>
                        </div>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Our Deliverables
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Transparency is key. You will never have to guess what we are working on. Our monthly deliverables include:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Detailed Technical Audit & Fix Log</li>
                            <li style={{ marginBottom: '0.5rem' }}>Content Briefs & Published Articles</li>
                            <li style={{ marginBottom: '0.5rem' }}>Backlink Acquisition Report</li>
                            <li style={{ marginBottom: '0.5rem' }}>Keyword Ranking & Traffic Analysis</li>
                            <li style={{ marginBottom: '0.5rem' }}>ROI & Attribution Dashboard</li>
                        </ul>

                    </article>

                    {/* Sidebar */}
                    <aside>
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Related Services</h4>
                            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Content Marketing</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Link Building</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Local SEO</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Technical Audits</li>
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

export default SEOStrategyPage;
