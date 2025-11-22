import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            background: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <div>
                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-secondary)',
                            fontWeight: '500'
                        }}>
                            Building digital products with clarity and purpose.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="mailto:ajinkyakate2001@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover:text-primary">
                            <Mail size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ajinkya-kate/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover:text-primary">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com/ajinkyakate" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} className="hover:text-primary">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div style={{
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '0.85rem',
                    color: 'var(--text-tertiary)'
                }}>
                    <div>
                        © {new Date().getFullYear()} Ajinkya Kate. All rights reserved.
                    </div>
                </div>
            </div>
            <style>{`
                .hover\\:text-primary:hover {
                    color: var(--text-primary) !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
