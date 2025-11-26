import React from 'react';
import CTASection from '../../components/CTASection';
import LeadMagnet from '../../components/LeadMagnet';
import SEO from '../../components/SEO';

const CROPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <SEO
                title="Conversion Rate Optimization (CRO)"
                description="Turn more visitors into customers. We use A/B testing, heatmaps, and user research to optimize your website for conversion."
            />
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                        SERVICES / CRO
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', maxWidth: '900px' }}>
                        Conversion Rate <span className="text-gradient">Optimization</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                        Traffic is expensive. Conversion is leverage. We systematically test and improve your user experience to squeeze more revenue out of every visitor.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>

                    {/* Main Content Area */}
                    <article style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '0', marginBottom: '1.5rem' }}>
                            Stop Leaking Revenue
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            You don't need more traffic to grow. You need to fix your bucket. A 1% increase in conversion rate can double your profits without spending a dime more on ads.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            Our CRO process is scientific, not subjective. We combine quantitative data (analytics) with qualitative insights (user feedback) to form hypotheses that we validate through rigorous A/B testing.
                        </p>

                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Our CRO Methodology
                        </h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Heuristic Analysis:</strong> Our experts review your site against 100+ usability checkpoints to identify "low-hanging fruit."
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>User Research:</strong> We watch session recordings, run heatmaps, and conduct user polls to understand the "why" behind the behavior.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>A/B Testing:</strong> We design, build, and run split tests on your landing pages, checkout flows, and pricing pages.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Personalization:</strong> We implement dynamic content that changes based on the user's source, device, or behavior.
                            </li>
                        </ul>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            What We Optimize
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: 'var(--bg-secondary)', padding: '1rem', border: '1px solid var(--border-subtle)' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Landing Pages</strong>
                            </div>
                            <div style={{ background: 'var(--bg-secondary)', padding: '1rem', border: '1px solid var(--border-subtle)' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Checkout Flows</strong>
                            </div>
                            <div style={{ background: 'var(--bg-secondary)', padding: '1rem', border: '1px solid var(--border-subtle)' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Pricing Pages</strong>
                            </div>
                            <div style={{ background: 'var(--bg-secondary)', padding: '1rem', border: '1px solid var(--border-subtle)' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Lead Forms</strong>
                            </div>
                        </div>

                        <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderLeft: '4px solid var(--accent-primary)', marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--text-primary)', marginTop: 0 }}>Case Study: FinTech App</h4>
                            <p style={{ marginBottom: 0 }}>
                                By simplifying the form fields and adding social proof at the point of friction, we reduced Customer Acquisition Cost (CAC) by <strong>60%</strong>.
                            </p>
                        </div>

                    </article>

                    {/* Sidebar */}
                    <aside>
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Related Services</h4>
                            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>PPC Management</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Data Analytics</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>Web Design</li>
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

export default CROPage;
