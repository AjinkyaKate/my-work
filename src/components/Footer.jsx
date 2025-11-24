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
                <div>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        fontWeight: '500'
                    }}>
                        Building digital products with clarity and purpose.
                    </p>
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
        </footer >
    );
};

export default Footer;
