import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '1rem 0' : '2rem 0',
        backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(var(--backdrop-blur))' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/logo.png" alt="GrowthMeta Logo" style={{ height: '40px', width: 'auto' }} />
          GROWTHMETA
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                fontSize: '0.9rem',
                color: location.pathname === item.path ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: '500'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) e.target.style.color = 'var(--text-secondary)';
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-outline">
            Get Free Audit
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ fontSize: '1.5rem', color: 'var(--text-primary)', zIndex: 1001 }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Nav Overlay */}
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '300px',
          background: 'var(--bg-secondary)',
          padding: '6rem 2rem 2rem',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          borderLeft: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          zIndex: 1000
        }}>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: location.pathname === item.path ? 'var(--accent-primary)' : 'var(--text-primary)'
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', textAlign: 'center' }}>
            Get Free Audit
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
