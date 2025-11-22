import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Mail, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', icon: <Home size={20} /> },
        { name: 'Work', href: '/#case-studies', icon: <Briefcase size={20} /> },
        { name: 'Story', href: '/#my-story', icon: <User size={20} /> },
        { name: 'Contact', href: 'mailto:ajinkyakate2001@gmail.com', icon: <Mail size={20} /> }
    ];

    return (
        <>
            {/* Top Navbar (Desktop & Mobile Logo/Theme) */}
            <nav className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}>
                <div className="container" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 0,
                    maxWidth: '100%'
                }}>
                    {/* Logo - Gen Z / Quirky Style */}
                    <Link to="/" style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: '700',
                        fontSize: '1.5rem',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.03em',
                        textDecoration: 'none',
                        position: 'relative',
                        zIndex: 1002,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                    }}>
                        ajinkya<span style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>✦</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="desktop-nav" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <div style={{
                            display: 'flex',
                            gap: '0.25rem',
                            background: scrolled ? 'var(--bg-secondary)' : 'transparent',
                            padding: '0.25rem',
                            borderRadius: '999px',
                            transition: 'background 0.3s ease'
                        }}>
                            {navLinks.filter(l => l.name !== 'Contact' && l.name !== 'Home').map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link"
                                    style={{
                                        fontSize: '0.9rem',
                                        fontWeight: '500',
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '999px',
                                        transition: 'all 0.2s ease',
                                        position: 'relative'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = 'var(--text-primary)';
                                        e.target.style.background = 'var(--surface-color)';
                                        e.target.style.boxShadow = 'var(--shadow-sm)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = 'var(--text-secondary)';
                                        e.target.style.background = 'transparent';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div style={{ width: '1px', height: '24px', background: 'var(--border-color)', margin: '0 0.5rem' }}></div>

                        <ThemeToggle />

                        <a href="mailto:ajinkyakate2001@gmail.com" className="btn btn-primary" style={{
                            marginLeft: '0.5rem',
                            padding: '0.6rem 1.2rem',
                            fontSize: '0.9rem',
                            borderRadius: '999px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            Get in touch <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Mobile Top Right (Theme Toggle Only) */}
                    <div className="mobile-toggle" style={{ display: 'none' }}> {/* Hidden via CSS on desktop, visible on mobile via global.css media query if needed, but we want it visible on mobile */}
                        {/* Actually, we want ThemeToggle visible on mobile top right. 
                            In global.css: .desktop-nav { display: none } on mobile.
                            We need a container for mobile top right elements.
                         */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Nav */}
            <div className="mobile-bottom-nav">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="mobile-nav-item"
                        style={{ textDecoration: 'none' }}
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </a>
                ))}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .mobile-toggle {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
