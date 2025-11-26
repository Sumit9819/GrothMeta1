import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontWeight: '500',
                    fontSize: '1.1rem'
                }}
            >
                {question}
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem' }}>
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            {isOpen && (
                <div style={{ paddingBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Frequently Asked Questions</h2>

                <div>
                    <FAQItem
                        question="What industries do you specialize in?"
                        answer="We primarily work with B2B SaaS, E-commerce, FinTech, and Enterprise Technology companies. Our data-driven approach is best suited for high-growth sectors."
                    />
                    <FAQItem
                        question="What is your minimum engagement period?"
                        answer="We typically require a 3-month initial commitment. This allows us sufficient time to audit, strategize, execute, and gather enough data to demonstrate meaningful results."
                    />
                    <FAQItem
                        question="How do you report on performance?"
                        answer="We provide live dashboards (Looker Studio) accessible 24/7, along with bi-weekly strategy calls and comprehensive monthly reports focusing on ROI, ROAS, and revenue impact."
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
