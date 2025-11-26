import React from 'react';
import CTASection from '../../components/CTASection';
import LeadMagnet from '../../components/LeadMagnet';
import SEO from '../../components/SEO';

const AnalyticsPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <SEO
                title="Data Analytics & BI"
                description="Turn data into actionable insights. We build custom dashboards, configure GA4, and implement attribution modeling."
            />
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                        SERVICES / ANALYTICS
                    </div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', maxWidth: '900px' }}>
                        Advanced <span className="text-gradient">Data Analytics</span> & BI
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                        Move beyond vanity metrics. We build the infrastructure you need to connect marketing activities directly to revenue outcomes.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>

                    {/* Main Content Area */}
                    <article style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '0', marginBottom: '1.5rem' }}>
                            Data is Your Competitive Advantage
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Most companies are drowning in data but starving for insights. They have Google Analytics installed, but they don't trust the numbers. They have a CRM, but it doesn't talk to their ad platforms.
                        </p>
                        <p style={{ marginBottom: '2rem' }}>
                            We fix the plumbing. We build a "Single Source of Truth" that aligns your marketing, sales, and product teams around the metrics that actually matter: CAC, LTV, and ROI.
                        </p>

                        <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Our Analytics Stack
                        </h3>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>GA4 Migration & Configuration:</strong> Don't let the sunset of UA leave you in the dark. We set up GA4 with custom events, audiences, and exploration reports.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Server-Side Tracking:</strong> Bypass ad blockers and browser restrictions (ITP) with robust server-side tagging (GTM Server-Side).
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Marketing Attribution:</strong> Understand the full customer journey. We implement multi-touch attribution models to show you exactly which channels are driving growth.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>Looker Studio Dashboards:</strong> Beautiful, real-time dashboards that visualize your KPIs. No more manual spreadsheets.
                            </li>
                        </ul>

                        <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>
                            From Insight to Action
                        </h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Data is useless if it doesn't lead to action. Our analysts don't just report the news; they make the news. Every report comes with a "Key Insights & Recommendations" section outlining exactly what to do next.
                        </p>

                        <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderLeft: '4px solid var(--accent-primary)', marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--text-primary)', marginTop: 0 }}>Case Study: SaaS Platform</h4>
                            <p style={{ marginBottom: 0 }}>
                                We identified a 40% drop-off in the onboarding flow using custom event tracking. After implementing our recommended UI fixes, activation rates doubled, leading to an extra <strong>$500k in ARR</strong>.
                            </p>
                        </div>

                    </article>

                    {/* Sidebar */}
                    <aside>
                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Related Services</h4>
                            <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>PPC Management</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>SEO Strategy</li>
                                <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>CRO</li>
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

export default AnalyticsPage;
