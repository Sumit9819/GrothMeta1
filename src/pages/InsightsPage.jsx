import React from 'react';
import CTASection from '../components/CTASection';

const InsightsPage = () => {
    const articles = [
        {
            title: "The Death of Third-Party Cookies: What's Next?",
            category: "Analytics",
            date: "Oct 12, 2025"
        },
        {
            title: "How to Scale LinkedIn Ads for B2B SaaS",
            category: "Paid Media",
            date: "Sep 28, 2025"
        },
        {
            title: "Programmatic SEO: A Guide to 10x Traffic",
            category: "SEO",
            date: "Sep 15, 2025"
        }
    ];

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                        Growth <span className="text-gradient">Insights</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        Latest trends, strategies, and data from the frontlines of digital marketing.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {articles.map((article, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            border: '1px solid var(--border-subtle)',
                            background: 'var(--bg-primary)',
                            cursor: 'pointer',
                            transition: 'border-color 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
                        >
                            <div style={{
                                fontSize: '0.8rem',
                                color: 'var(--accent-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                marginBottom: '1rem'
                            }}>
                                {article.category} • {article.date}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{article.title}</h3>
                            <div style={{ color: 'var(--text-secondary)' }}>Read Article →</div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default InsightsPage;
