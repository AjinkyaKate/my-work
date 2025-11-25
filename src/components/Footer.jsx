import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '6rem 0 3rem 0',
            background: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-primary)',
            textAlign: 'center'
        }}>
            <div className="container">

                {/* Main CTA Section */}
                <div className="footer-cta animate-fade-up">
                    <h2 className="footer-title">Let's build something great.</h2>
                    <p className="footer-subtitle">
                        I'm always open to discussing product roles, collaborations, or startup opportunities. Feel free to reach out.
                    </p>

                    <div className="footer-actions">
                        <a href="mailto:ajinkyakate@gmail.com" className="btn btn-primary email-btn">
                            <Mail size={18} /> Email Me
                        </a>
                        <a href="https://linkedin.com/in/ajinkyakate" target="_blank" rel="noopener noreferrer" className="btn btn-outline social-btn">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a href="https://twitter.com/ajinkyakate" target="_blank" rel="noopener noreferrer" className="btn btn-outline social-btn">
                            <Twitter size={18} /> Twitter
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="tagline">Building digital products with clarity and purpose.</p>
                    <p className="copyright">© {new Date().getFullYear()} Ajinkya Kate. All rights reserved.</p>
                </div>
            </div>

            <style jsx>{`
                .footer-cta {
                    margin-bottom: 6rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .footer-title {
                    font-size: clamp(2.5rem, 5vw, 3.5rem);
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    letter-spacing: -0.02em;
                }

                .footer-subtitle {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    max-width: 500px;
                    margin: 0 auto 2.5rem auto;
                    line-height: 1.6;
                }

                .footer-actions {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .email-btn {
                    background: #a8c7fa; /* Light Blue from screenshot */
                    color: #000;
                    border: none;
                    padding: 0.8rem 1.8rem;
                    font-weight: 600;
                    gap: 0.5rem;
                }
                
                .email-btn:hover {
                    background: #8ab4f8;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(168, 199, 250, 0.3);
                }

                .social-btn {
                    border-color: var(--border-secondary);
                    color: var(--text-primary);
                    padding: 0.8rem 1.5rem;
                    gap: 0.5rem;
                    border-radius: 999px;
                }

                .social-btn:hover {
                    background: var(--bg-tertiary);
                    border-color: var(--text-primary);
                }

                .footer-bottom {
                    border-top: 1px solid var(--border-primary);
                    padding-top: 3rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                }

                .tagline {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                }

                .copyright {
                    font-size: 0.85rem;
                    color: var(--text-tertiary);
                }
            `}</style>
        </footer>
    );
};

export default Footer;
