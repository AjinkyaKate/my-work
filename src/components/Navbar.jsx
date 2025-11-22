import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Skills', href: '#skills' },
        { name: 'Writing', href: '#writing' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            width: scrolled ? '95%' : '90%',
            maxWidth: '1200px'
        }}>
            <div style={{
                background: scrolled
                    ? 'rgba(26, 26, 36, 0.8)'
                    : 'rgba(26, 26, 36, 0.6)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: scrolled
                    ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 4px 16px rgba(0, 0, 0, 0.2)',
                padding: '0.75rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'var(--transition)'
            }}>
                {/* Logo */}
                <a
                    href="#"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: '800',
                        fontSize: '1.3rem',
                        background: 'var(--gradient-primary)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.02em',
                        transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                    }}
                >
                    AK.
                </a>

                {/* Desktop Nav */}
                <div className="desktop-nav" style={{
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontSize: '0.95rem',
                                fontWeight: '500',
                                color: 'var(--text-secondary)',
                                position: 'relative',
                                transition: 'var(--transition)',
                                paddingBottom: '4px'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = 'var(--text-primary)';
                                const underline = e.target.querySelector('.nav-underline');
                                if (underline) {
                                    underline.style.width = '100%';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = 'var(--text-secondary)';
                                const underline = e.target.querySelector('.nav-underline');
                                if (underline) {
                                    underline.style.width = '0%';
                                }
                            }}
                        >
                            {link.name}
                            <div
                                className="nav-underline"
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '0%',
                                    height: '2px',
                                    background: 'var(--gradient-primary)',
                                    transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}
                            />
                        </a>
                    ))}
                    <a
                        href="mailto:ajinkyakate2001@gmail.com"
                        className="btn btn-primary"
                        style={{
                            padding: '0.6rem 1.5rem',
                            fontSize: '0.9rem'
                        }}
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none',
                        color: 'var(--text-primary)',
                        padding: '0.5rem'
                    }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    marginTop: '1rem',
                    background: 'rgba(26, 26, 36, 0.95)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '1.5rem',
                    display: 'none'
                }} className="mobile-menu">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    color: 'var(--text-secondary)',
                                    padding: '0.75rem',
                                    borderRadius: 'var(--radius-sm)',
                                    transition: 'var(--transition)'
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="mailto:ajinkyakate2001@gmail.com"
                            className="btn btn-primary"
                            style={{ marginTop: '0.5rem' }}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                    .mobile-menu {
                        display: block !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
