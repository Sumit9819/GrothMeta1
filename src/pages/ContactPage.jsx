import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef();
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setStatus({ loading: false, success: true, error: null });
                e.target.reset();
                setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
            }, (error) => {
                setStatus({ loading: false, success: false, error: "Failed to send message. Please try again." });
                console.error(error.text);
            });
    };

    return (
        <div style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                            Let's Talk <br />
                            <span className="text-gradient">Growth.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.6' }}>
                            Ready to see what GrowthMeta can do for your business? Fill out the form and we'll be in touch within 24 hours.
                        </p>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'rgba(var(--accent-rgb), 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--accent)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Email Us</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>info@growthmeta.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'rgba(var(--accent-rgb), 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--accent)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Call Us</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>9764183384</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'rgba(var(--accent-rgb), 0.1)', padding: '0.8rem', borderRadius: '12px', color: 'var(--accent)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>Visit Us</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>
                                        Taudaha, Kirtipur<br />
                                        Nepal
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: '2.5rem',
                            borderRadius: '16px',
                            border: '1px solid var(--border-subtle)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                        }}
                    >
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                            <input type="text" name="user_name" required style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-primary)',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                                placeholder="John Doe" />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                            <input type="email" name="user_email" required style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-primary)',
                                borderRadius: '8px',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                                placeholder="john@company.com" />
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                            <textarea name="message" required style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'var(--bg-primary)',
                                border: '1px solid var(--border-subtle)',
                                color: 'var(--text-primary)',
                                borderRadius: '8px',
                                minHeight: '150px',
                                outline: 'none',
                                transition: 'border-color 0.2s',
                                resize: 'vertical'
                            }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                                placeholder="Tell us about your goals..." />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '1rem', fontSize: '1rem', opacity: status.loading ? 0.7 : 1 }}
                            disabled={status.loading}
                        >
                            {status.loading ? 'Sending...' : 'Send Message'}
                        </motion.button>

                        {status.success && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ marginTop: '1rem', color: '#00E676', textAlign: 'center' }}
                            >
                                Message sent successfully!
                            </motion.p>
                        )}

                        {status.error && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ marginTop: '1rem', color: '#FF5252', textAlign: 'center' }}
                            >
                                {status.error}
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
