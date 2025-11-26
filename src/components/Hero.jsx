import React, { Suspense } from 'react';
import CountUp from './CountUp';
const Hero3D = React.lazy(() => import('./Hero3D'));

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            overflow: 'hidden'
        }}>
            {/* 3D Background */}
            <Suspense fallback={null}>
                <Hero3D />
            </Suspense>

            {/* Background Grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(var(--border-subtle) 1px, transparent 1px),
          linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)
        `,
                backgroundSize: '40px 40px',
                opacity: 0.1,
                zIndex: -2
            }} />


            <div className="container grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center' }}>
                <div className="animate-fade-in">
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        border: '1px solid var(--accent-primary)',
                        color: 'var(--accent-primary)',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.1em'
                    }}>
                        DATA INTELLIGENCE AGENCY
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1'
                    }}>
                        Turn Data Into <br />
                        <span className="text-gradient">Measurable Growth.</span>
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '500px',
                        marginBottom: '2.5rem'
                    }}>
                        We decode market complexities using advanced analytics to engineer precision marketing strategies that scale revenue.
                    </p>

                    <div className="flex">
                        <button className="btn btn-primary">
                            Start Your Growth Engine
                        </button>
                        <button className="btn btn-outline">
                            View Case Studies
                        </button>
                    </div>
                </div>

                {/* Abstract Data Visual */}
                <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="animate-fade-in">
                    {/* Glow effect behind circle */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                        zIndex: 0,
                        opacity: 0.7
                    }} />

                    <div style={{
                        position: 'relative',
                        width: '300px',
                        height: '300px',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1
                    }}>
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: '1px solid var(--accent-primary)',
                            borderRadius: '50%',
                            borderTopColor: 'transparent',
                            borderLeftColor: 'transparent',
                            transform: 'rotate(45deg)'
                        }} />

                        <div style={{
                            width: '200px',
                            height: '200px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-subtle)',
                            zIndex: 2
                        }}>
                            <span style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                                <CountUp end={99} suffix="%" />
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Retention Rate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
