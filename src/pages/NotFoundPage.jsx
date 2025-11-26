import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <SEO title="404 Not Found" />

            {/* Animated background */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '30rem',
                fontWeight: '900',
                color: 'var(--bg-tertiary)',
                opacity: '0.05',
                userSelect: 'none',
                zIndex: 0
            }}>404</div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    fontSize: 'clamp(6rem, 15vw, 12rem)',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    marginBottom: '1rem'
                }}>404</div>

                <h1 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    marginBottom: '1rem',
                    fontWeight: '600'
                }}>Page Not Found</h1>

                <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem',
                    maxWidth: '500px',
                    fontSize: '1.1rem',
                    lineHeight: '1.6'
                }}>
                    Looks like this page took a wrong turn in the growth funnel. Let's get you back on track.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/" className="btn btn-primary">
                        Back to Homepage
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
