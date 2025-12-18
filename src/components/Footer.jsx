import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Twitter, ArrowUp, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        Navigation: [
            { name: 'Home', href: '/' },
            { name: 'Work', href: '/#case-studies' },
            { name: 'Story', href: '/#my-story' },
            { name: 'Writing', href: '/#blog' }
        ],
        Connect: [
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ajinkya-kate/', external: true },
            { name: 'Twitter', href: 'https://x.com/Ajinkya_Kate_', external: true },
            { name: 'Medium', href: 'https://medium.com/@Ajinkya_Kate', external: true },
            { name: 'Email', href: 'mailto:ajinkyakate2001@gmail.com?subject=Product%20Opportunity%20%2F%20Collaboration&body=Hi%20Ajinkya%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding...' }
        ]
    };

    return (
        <footer className="footer">
            <div className="container">
                {/* Top Border Gradient */}
                <div className="top-gradient"></div>

                {/* Main Footer Content */}
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <h3 className="brand-name">Ajinkya Kate</h3>
                        <p className="brand-tagline">
                            Product Manager building 0→1 solutions for real-world problems.
                        </p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/ajinkya-kate/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/Ajinkya_Kate_" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="mailto:ajinkyakate2001@gmail.com?subject=Product%20Opportunity%20%2F%20Collaboration&body=Hi%20Ajinkya%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding..." className="social-icon" aria-label="Email">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="footer-column">
                        <h4>Navigation</h4>
                        <ul className="footer-links">
                            {footerLinks.Navigation.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Links */}
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <ul className="footer-links">
                            {footerLinks.Connect.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                    >
                                        {link.name}
                                        {link.external && <ExternalLink size={12} className="external-icon" />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick CTA */}
                    <div className="footer-column">
                        <h4>Let's Talk</h4>
                        <p className="cta-text">
                            Open to product roles and collaborations.
                        </p>
                        <a href="mailto:ajinkyakate2001@gmail.com?subject=Product%20Opportunity%20%2F%20Collaboration&body=Hi%20Ajinkya%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding..." className="footer-cta-btn">
                            <Mail size={16} />
                            <span>Get in Touch</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} Ajinkya Kate. Built with <Heart size={14} className="heart-icon" /> using React + Vite
                    </p>
                    <p className="tagline">
                        Shipping products that solve real problems
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="scroll-top-btn"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            <style jsx>{`
                .footer {
                    position: relative;
                    padding: 6rem 0 3rem 0;
                    background: var(--bg-primary);
                    border-top: 1px solid var(--border-primary);
                }

                .top-gradient {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, 
                        transparent,
                        var(--accent-primary) 25%,
                        var(--secondary-emerald) 75%,
                        transparent
                    );
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
                    gap: 4rem;
                    margin-bottom: 4rem;
                }

                /* Brand Column */
                .footer-brand {
                    max-width: 350px;
                }

                .brand-name {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0 0 1rem 0;
                    letter-spacing: -0.01em;
                }

                .brand-tagline {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 2rem;
                }

                .social-icons {
                    display: flex;
                    gap: 0.75rem;
                }

                .social-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .social-icon:hover {
                    background: var(--accent-primary);
                    color: white;
                    border-color: var(--accent-primary);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 20px rgba(251, 191, 36, 0.3);
                }

                /* Footer Columns */
                .footer-column h4 {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-tertiary);
                    margin: 0 0 1.5rem 0;
                    font-weight: 600;
                }

                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .footer-links a {
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 0.95rem;
                    transition: all 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                }

                .footer-links a:hover {
                    color: var(--accent-primary);
                    padding-left: 4px;
                }

                .external-icon {
                    opacity: 0.5;
                }

                /* CTA Column */
                .cta-text {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin: 0 0 1.5rem 0;
                    line-height: 1.5;
                }

                .footer-cta-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.25rem;
                    background: var(--accent-primary);
                    color: white;
                    border-radius: 10px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                    border: none;
                }

                .footer-cta-btn:hover {
                    background: #fcd34d;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(251, 191, 36, 0.4);
                }

                /* Bottom Bar */
                .footer-bottom {
                    border-top: 1px solid var(--border-primary);
                    padding-top: 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }

                .copyright {
                    font-size: 0.85rem;
                    color: var(--text-tertiary);
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    flex-wrap: wrap;
                }

                .heart-icon {
                    color: #F28B82;
                    animation: heartbeat 1.5s infinite;
                }

                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    10%, 30% { transform: scale(1.1); }
                    20%, 40% { transform: scale(1); }
                }

                .tagline {
                    font-size: 0.85rem;
                    color: var(--text-tertiary);
                    margin: 0;
                    font-style: italic;
                }

                /* Scroll to Top Button */
                .scroll-top-btn {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: var(--accent-primary);
                    color: white;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 20px rgba(251, 191, 36, 0.4);
                    transition: all 0.3s ease;
                    z-index: 100;
                    animation: fadeInUp 0.3s ease;
                }

                .scroll-top-btn:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px rgba(251, 191, 36, 0.6);
                    background: #fcd34d;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @media (max-width: 968px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }

                    .footer-brand {
                        max-width: 100%;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                        gap: 0.75rem;
                    }

                    .scroll-top-btn {
                        bottom: 1.5rem;
                        right: 1.5rem;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
