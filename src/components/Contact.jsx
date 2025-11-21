import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

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
                background: 'linear-gradient(180deg, transparent 0%, rgba(94, 106, 210, 0.03) 100%)',
                zIndex: -1
            }} />

            <div className="container">
                <div className="glass animate-in" style={{
                    padding: '5rem 2rem',
                    textAlign: 'center',
                    borderRadius: '24px',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Let's build something great.</h2>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.5' }}>
                        I'm always open to discussing product roles, collaborations, or startup opportunities. Feel free to reach out.
                    </p>

                    <div className="flex" style={{ justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="mailto:ajinkyakate2001@gmail.com" className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                            <Mail size={18} /> Email Me
                        </a>
                        <a href="https://www.linkedin.com/in/ajinkya-kate/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.875rem 2rem', fontSize: '1rem', background: 'rgba(255,255,255,0.5)' }}>
                            <Linkedin size={18} /> Connect on LinkedIn
                        </a>
                    </div>
                </div>

                <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem' }}>
                    <span>© {new Date().getFullYear()} Ajinkya Kate.</span>
                    <div className="flex" style={{ gap: '1.5rem' }}>
                        <a href="mailto:ajinkyakate2001@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Email</a>
                        <a href="https://www.linkedin.com/in/ajinkya-kate/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>LinkedIn</a>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
