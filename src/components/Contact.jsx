import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" style={{ paddingBottom: '4rem', position: 'relative' }}>
            {/* Gradient Background for Section */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '100%',
                background: 'linear-gradient(180deg, transparent 0%, var(--bg-secondary) 100%)',
                zIndex: -1
            }} />

            <div className="container">
                <div className="glass-panel animate-fade-up contact-panel" style={{
                    textAlign: 'center',
                    borderRadius: 'var(--radius-lg)',
                    maxWidth: '900px',
                    margin: '0 auto',
                    // Use CSS variable for background to handle dark mode automatically via global.css
                }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', letterSpacing: '-0.03em', fontFamily: 'var(--font-serif)' }}>Let's build something great.</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
                        I'm always open to discussing product roles, collaborations, or startup opportunities. Feel free to reach out.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:ajinkyakate2001@gmail.com" className="btn btn-primary" style={{ animation: 'pulse 2s infinite', minWidth: '140px' }}>
                            <Mail size={20} style={{ marginRight: '0.5rem' }} />
                            Email Me
                        </a>
                        <a href="https://linkedin.com/in/ajinkyakate" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ minWidth: '140px' }}>
                            <Linkedin size={20} style={{ marginRight: '0.5rem' }} />
                            LinkedIn
                        </a>
                        <a href="https://x.com/Ajinkya_Kate_" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ minWidth: '140px' }}>
                            <Twitter size={20} style={{ marginRight: '0.5rem' }} />
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
