import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Story', path: '/#my-story' },
        { name: 'Experience', path: '/#experience' },
        { name: 'Work', path: '/#case-studies' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Writing', path: '/#blog' },
    ];

    const handleNavClick = (e, path) => {
        if (path.startsWith('/#')) {
            e.preventDefault();
            const id = path.substring(2);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            } else if (location.pathname !== '/') {
                // If not on home page, navigate to home then scroll
                window.location.href = path;
            }
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    Ajinkya<span className="text-accent">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, link.path)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Social Icons (Desktop) */}
                <div className="nav-social desktop-only">
                    <a href="https://github.com/ajinkyakate" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/ajinkya-kate" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com/ajinkya_kate" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Dropdown */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <div className="mobile-nav-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="mobile-nav-link"
                                onClick={(e) => handleNavClick(e, link.path)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="mobile-social">
                        <a href="https://github.com/ajinkyakate" target="_blank" rel="noopener noreferrer">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/ajinkya-kate" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://twitter.com/ajinkya_kate" target="_blank" rel="noopener noreferrer">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 80px;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    background: transparent;
                }

                .navbar.scrolled {
                    background: rgba(34, 40, 49, 0.8); /* Glassmorphism base */
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    height: 70px;
                }

                .nav-container {
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .nav-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    text-decoration: none;
                    letter-spacing: -0.02em;
                }

                .text-accent {
                    color: var(--accent-primary);
                }

                .nav-links {
                    display: flex;
                    gap: 2rem;
                }

                .nav-link {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                    transition: color 0.2s ease;
                    position: relative;
                }

                .nav-link:hover {
                    color: var(--text-primary);
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--accent-primary);
                    transition: width 0.3s ease;
                }

                .nav-link:hover::after {
                    width: 100%;
                }

                .nav-social {
                    display: flex;
                    gap: 1rem;
                }

                .nav-social a {
                    color: var(--text-secondary);
                    transition: all 0.2s ease;
                }

                .nav-social a:hover {
                    color: var(--accent-primary);
                    transform: translateY(-2px);
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: var(--text-primary);
                    cursor: pointer;
                    z-index: 1001;
                }

                /* Mobile Menu Styles */
                .mobile-menu {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: var(--bg-primary);
                    padding: 6rem 2rem 2rem;
                    transform: translateY(-100%);
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 3rem;
                    z-index: 999;
                }

                .mobile-menu.open {
                    transform: translateY(0);
                }

                .mobile-nav-links {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                }

                .mobile-nav-link {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    text-decoration: none;
                }

                .mobile-social {
                    display: flex;
                    gap: 2rem;
                    margin-top: 2rem;
                }

                .mobile-social a {
                    color: var(--text-secondary);
                }

                @media (max-width: 768px) {
                    .desktop-only {
                        display: none;
                    }

                    .mobile-menu-btn {
                        display: block;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
