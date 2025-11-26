import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, User, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Work', href: '/#case-studies', icon: <Briefcase size={18} /> },
    { name: 'Story', href: '/#my-story', icon: <User size={18} /> },
];

return (
    <>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo">
                    <div className="logo-icon">A</div>
                    <span className="logo-text">ajinkya</span>
                </Link>

                {/* Desktop Nav */}
                <div className="desktop-nav">
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="nav-link">
                                {link.name}
                                <span className="link-dot"></span>
                            </a>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <ThemeToggle />
                        <a
                            href="mailto:ajinkyakate2001@gmail.com?subject=Product%20Opportunity%20%2F%20Collaboration&body=Hi%20Ajinkya%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding..."
                            className="contact-btn"
                        >
                            <Mail size={16} />
                            <span>Contact</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-content">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mobile-link"
                    >
                        {link.icon}
                        {link.name}
                    </a>
                ))}
                <div className="mobile-actions">
                    <ThemeToggle />
                    <span className="theme-text">Switch Theme</span>
                </div>
            </div>
        </div>

        <style jsx>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    padding: 1.5rem 0;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .navbar.scrolled {
                    padding: 1rem 0;
                }

                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: all 0.4s ease;
                }

                .navbar.scrolled .nav-container {
                    background: rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 100px;
                    padding: 0.75rem 2rem;
                    max-width: 900px;
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
                }

                /* Dark mode adjustments for scrolled navbar */
                :global([data-theme='dark']) .navbar.scrolled .nav-container {
                    background: rgba(30, 30, 35, 0.8);
                    border-color: rgba(255, 255, 255, 0.1);
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                    color: var(--text-primary);
                    font-weight: 600;
                    font-size: 1.25rem;
                    letter-spacing: -0.02em;
                }

                .logo-icon {
                    width: 32px;
                    height: 32px;
                    background: var(--accent-primary);
                    color: white;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 1rem;
                    transform: rotate(-5deg);
                    transition: transform 0.3s ease;
                }

                .logo:hover .logo-icon {
                    transform: rotate(0deg) scale(1.1);
                }

                .desktop-nav {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                }

                .nav-links {
                    display: flex;
                    gap: 2.5rem;
                }

                .nav-link {
                    position: relative;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.95rem;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    padding: 0.5rem 0;
                }

                .nav-link:hover {
                    color: var(--text-primary);
                }

                .link-dot {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 4px;
                    height: 4px;
                    background: var(--accent-primary);
                    border-radius: 50%;
                    transform: translateX(-50%) scale(0);
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                }

                .nav-link:hover .link-dot {
                    transform: translateX(-50%) scale(1);
                    opacity: 1;
                }

                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }

                .contact-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.6rem 1.2rem;
                    background: var(--text-primary);
                    color: var(--bg-primary);
                    border-radius: 100px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .contact-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    background: var(--accent-primary);
                    color: white;
                }

                .mobile-toggle {
                    display: none;
                    background: none;
                    border: none;
                    color: var(--text-primary);
                    cursor: pointer;
                    padding: 0.5rem;
                }

                /* Mobile Menu */
                .mobile-menu {
                    position: fixed;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(4px);
                    z-index: 999;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                }

                .mobile-menu.open {
                    opacity: 1;
                    pointer-events: all;
                }

                .mobile-menu-content {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 300px;
                    background: var(--bg-primary);
                    padding: 6rem 2rem 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    transform: translateX(100%);
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
                }

                .mobile-menu.open .mobile-menu-content {
                    transform: translateX(0);
                }

                .mobile-link {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: var(--text-primary);
                    text-decoration: none;
                    padding: 1rem;
                    border-radius: 12px;
                    transition: background 0.2s ease;
                }

                .mobile-link:hover {
                    background: var(--bg-secondary);
                }

                .mobile-actions {
                    margin-top: auto;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem;
                    border-top: 1px solid var(--border-primary);
                }

                .theme-text {
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none;
                    }

                    .mobile-toggle {
                        display: block;
                    }

                    .nav-container {
                        padding: 0 1.5rem;
                    }

                    .navbar.scrolled .nav-container {
                        width: calc(100% - 2rem);
                        padding: 0.75rem 1.5rem;
                    }
                }
            `}</style>
    </>
);
};

export default Navbar;
