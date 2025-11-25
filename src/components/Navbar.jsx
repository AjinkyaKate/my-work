import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/', icon: <Home size={20} /> },
        { name: 'Work', href: '/#case-studies', icon: <Briefcase size={20} /> },
        { name: 'Story', href: '/#my-story', icon: <User size={20} /> },
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '0.75rem 0',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-primary)' : '1px solid transparent',
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: '500',
                        fontSize: '1.35rem',
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        letterSpacing: '-0.03em'
                    }}>
                        ajinkya
                    </Link>

                    {/* Desktop Nav */}
                    <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--text-secondary)',
                                        transition: 'color 0.2s ease',
                                        fontWeight: '500'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <ThemeToggle />
                            <a href="mailto:ajinkyakate2001@gmail.com" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="mobile-toggle" style={{ display: 'none' }}>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: '60px',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'var(--bg-primary)',
                    zIndex: 999,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '500',
                                color: 'var(--text-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    ))}
                    <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <ThemeToggle />
                        <span style={{ color: 'var(--text-secondary)' }}>Switch Theme</span>
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </>
    );
};

export default Navbar;
