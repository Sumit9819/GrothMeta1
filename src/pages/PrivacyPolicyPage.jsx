import React from 'react';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <SEO
                title="Privacy Policy"
                description="GrowthMeta's privacy policy and data handling practices."
            />
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                        Privacy <span className="text-gradient">Policy</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Introduction</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            GrowthMeta ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                        </p>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Information We Collect</h2>
                        <p style={{ marginBottom: '1rem' }}>We may collect information about you in a variety of ways, including:</p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Personal data (name, email address, phone number) that you voluntarily provide</li>
                            <li>Usage data (IP address, browser type, pages visited)</li>
                            <li>Cookies and tracking technologies</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>How We Use Your Information</h2>
                        <p style={{ marginBottom: '1rem' }}>We use the information we collect to:</p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Provide, operate, and maintain our services</li>
                            <li>Improve, personalize, and expand our services</li>
                            <li>Communicate with you about services and updates</li>
                            <li>Send you marketing communications (with your consent)</li>
                            <li>Analyze usage and trends to improve user experience</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Data Security</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                        </p>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Third-Party Services</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            We may employ third-party companies and individuals (e.g., analytics providers, payment processors) who have access to your personal information only to perform tasks on our behalf.
                        </p>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Your Rights</h2>
                        <p style={{ marginBottom: '1rem' }}>Depending on your location, you may have the right to:</p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Access the personal data we hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Contact Us</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            If you have questions about this Privacy Policy, please contact us at privacy@growthmeta.com
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;
