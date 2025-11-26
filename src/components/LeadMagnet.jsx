import React from 'react';

const LeadMagnet = () => {
    return (
        <div style={{
            background: 'var(--bg-tertiary)',
            padding: '2rem',
            border: '1px solid var(--border-subtle)',
            borderRadius: '8px',
            position: 'sticky',
            top: '100px'
        }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📘</div>
            <h3 style={{ marginBottom: '1rem' }}>The 2025 Growth Handbook</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Unlock the exact strategies we used to scale 50+ SaaS companies. Includes checklists, templates, and benchmarks.
            </p>
            <button className="btn btn-primary" style={{ width: '100%', fontSize: '0.9rem' }}>
                Download Free Guide
            </button>
        </div>
    );
};

export default LeadMagnet;
