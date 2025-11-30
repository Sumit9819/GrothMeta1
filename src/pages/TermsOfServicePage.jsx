import React from 'react';
import CTASection from '../components/CTASection';

const TermsOfServicePage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                        Terms of <span className="text-gradient">Service</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. Acceptance of Terms</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            By accessing and using the website of GrowthMeta ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Use License</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            Permission is granted to temporarily download one copy of the materials (information or software) on GrowthMeta's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            <li style={{ marginBottom: '0.5rem' }}>modify or copy the materials;</li>
                            <li style={{ marginBottom: '0.5rem' }}>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li style={{ marginBottom: '0.5rem' }}>attempt to decompile or reverse engineer any software contained on GrowthMeta's website;</li>
                            <li style={{ marginBottom: '0.5rem' }}>remove any copyright or other proprietary notations from the materials; or</li>
                            <li style={{ marginBottom: '0.5rem' }}>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Disclaimer</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            The materials on GrowthMeta's website are provided "as is". GrowthMeta makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Limitations</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            In no event shall GrowthMeta or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GrowthMeta's Internet site, even if GrowthMeta or a GrowthMeta authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Governing Law</h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            Any claim relating to GrowthMeta's website shall be governed by the laws of Nepal without regard to its conflict of law provisions.
                        </p>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default TermsOfServicePage;
