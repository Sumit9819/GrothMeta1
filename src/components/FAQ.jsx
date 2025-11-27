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
                        question="Do you have experience with my specific industry?"
                        answer="We specialize in Lifestyle, Wellness, Technology, Hospitality, and Construction sectors. Our strategies are tailored to the unique dynamics of these industries."
                    />
                    <FAQItem
                        question="What services will help me grow?"
                        answer="We offer a comprehensive suite of digital marketing services including SEO, PPC (Paid Media), Data Analytics, and Conversion Rate Optimization (CRO)."
                    />
                    <FAQItem
                        question="Am I locked into a long-term contract?"
                        answer="We typically recommend a 3-month initial commitment. This allows us sufficient time to audit, strategize, execute, and gather enough data to demonstrate meaningful results."
                    />
                    <FAQItem
                        question="How will I track my ROI and results?"
                        answer="We provide live dashboards (Looker Studio) accessible 24/7, along with bi-weekly strategy calls and comprehensive monthly reports focusing on ROI, ROAS, and revenue impact."
                    />
                    <FAQItem
                        question="How quickly can we get started?"
                        answer="Our onboarding is streamlined: we start with a kickoff call to align on goals, followed by a deep-dive audit of your current assets. We then build a custom strategy roadmap within the first 2 weeks."
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
