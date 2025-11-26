import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" id="contact" style={{ paddingBottom: '4rem', position: 'relative' }}>
            {/* Gradient Background for Section */}
            <div className="section-gradient" />

            <div className="container">
                <div className="glass-panel animate-fade-up">
                    <h2>Let's build something great.</h2>
                    <p>
                        I'm always open to discussing product roles, collaborations, or startup opportunities. Feel free to reach out.
                    </p>

                    <div className="actions">
                        <a href="mailto:ajinkyakate2001@gmail.com" className="btn btn-primary pulse-btn">
                            <Mail size={20} />
                            Email Me
                        </a>
                        <a href="https://linkedin.com/in/ajinkyakate" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a href="https://x.com/Ajinkya_Kate_" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <Twitter size={20} />
                            Twitter
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-gradient {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100%;
                    background: linear-gradient(180deg, transparent 0%, var(--bg-secondary) 100%);
                    z-index: -1;
                }

                .glass-panel {
                    text-align: center;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-lg); /* 32px */
                    padding: 4rem 2rem;
                    max-width: 900px;
                    margin: 0 auto;
                    box-shadow: var(--shadow-lg);
                }

                h2 {
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    margin-bottom: 2.5rem;
                    max-width: 600px;
                    margin: 0 auto 2.5rem;
                    line-height: 1.6;
                }

                .actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .btn {
                    min-width: 140px;
                    gap: 0.5rem;
                }

                .pulse-btn {
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.4);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(34, 211, 238, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(34, 211, 238, 0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
