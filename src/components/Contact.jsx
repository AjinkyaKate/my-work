import React from 'react';
import { Mail, Linkedin, Twitter, Send, Sparkles } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" id="contact" style={{ paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
            {/* Animated Background Elements */}
            <div className="bg-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            {/* Gradient Background for Section */}
            <div className="section-gradient" />

            <div className="container">
                <div className="glass-panel animate-fade-up">
                    <div className="sparkle-accent">
                        <Sparkles size={20} />
                    </div>

                    <h2>Let's build something great.</h2>
                    <p>
                        I'm always open to discussing product roles, collaborations, or startup opportunities. Feel free to reach out.
                    </p>

                    <div className="actions">
                        <a href="mailto:ajinkyakate2001@gmail.com" className="btn btn-primary pulse-btn">
                            <Mail size={20} />
                            <span>Email Me</span>
                            <div className="btn-shine"></div>
                        </a>
                        <a href="https://linkedin.com/in/ajinkyakate" target="_blank" rel="noopener noreferrer" className="btn btn-outline social-btn">
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://x.com/Ajinkya_Kate_" target="_blank" rel="noopener noreferrer" className="btn btn-outline social-btn">
                            <Twitter size={20} />
                            <span>Twitter</span>
                        </a>
                    </div>

                    <div className="divider"></div>

                    <div className="quick-stats">
                        <div className="stat-item">
                            <div className="stat-value">2+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">5+</div>
                            <div className="stat-label">Products Shipped</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">100%</div>
                            <div className="stat-label">Committed</div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* Animated Background Orbs */
                .bg-orbs {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    overflow: hidden;
                    z-index: 0;
                }

                .orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.3;
                    animation: float 20s infinite ease-in-out;
                }

                .orb-1 {
                    width: 400px;
                    height: 400px;
                    background: var(--accent-primary);
                    top: -200px;
                    left: -100px;
                    animation-delay: 0s;
                }

                .orb-2 {
                    width: 350px;
                    height: 350px;
                    background: var(--secondary-emerald);
                    bottom: -100px;
                    right: -100px;
                    animation-delay: 7s;
                }

                .orb-3 {
                    width: 300px;
                    height: 300px;
                    background: #F28B82;
                    top: 50%;
                    right: 20%;
                    animation-delay: 14s;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }

                .section-gradient {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 100%;
                    background: linear-gradient(180deg, transparent 0%, var(--bg-primary) 100%);
                    z-index: 0;
                }

                .glass-panel {
                    position: relative;
                    text-align: center;
                    background: rgba(30, 41, 59, 0.6);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: var(--radius-lg);
                    padding: 5rem 3rem;
                    max-width: 900px;
                    margin: 0 auto;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
                                inset 0 1px 0 rgba(255, 255, 255, 0.1);
                    z-index: 1;
                }

                .sparkle-accent {
                    width: 48px;
                    height: 48px;
                    background: linear-gradient(135deg, var(--accent-primary), var(--secondary-emerald));
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    margin: 0 auto 2rem;
                    animation: sparkle-bounce 2s infinite;
                }

                @keyframes sparkle-bounce {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-8px) rotate(-5deg);
                    }
                    75% {
                        transform: translateY(-4px) rotate(5deg);
                    }
                }

                .glass-panel h2 {
                    font-size: clamp(2rem, 5vw, 3rem);
                    margin: 0 0 1.5rem 0;
                    color: var(--text-primary);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }

                .glass-panel p {
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto 3rem;
                    line-height: 1.7;
                }

                .actions {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    margin-bottom: 3rem;
                }

                .btn {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    min-width: 160px;
                    padding: 1rem 2rem;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 1rem;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    overflow: hidden;
                }

                .btn-primary {
                    background: linear-gradient(135deg, var(--accent-primary), #6366f1);
                    color: white;
                    border: none;
                    box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
                }

                .btn-primary:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px rgba(79, 70, 229, 0.6);
                }

                /* Button Shine Effect */
                .btn-shine {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                }

                .btn-primary:hover .btn-shine {
                    animation: shine 0.8s;
                }

                @keyframes shine {
                    to {
                        left: 100%;
                    }
                }

                .pulse-btn {
                    animation: pulse-border 2s infinite;
                }

                @keyframes pulse-border {
                    0%, 100% {
                        box-shadow: 0 4px 20px rgba(79, 70, 229, 0.4);
                    }
                    50% {
                        box-shadow: 0 4px 30px rgba(79, 70, 229, 0.7);
                    }
                }

                .btn-outline {
                    background: transparent;
                    color: var(--text-primary);
                    border: 2px solid var(--border-primary);
                }

                .btn-outline:hover {
                    background: var(--bg-tertiary);
                    border-color: var(--accent-primary);
                    transform: translateY(-2px);
                    color: var(--accent-primary);
                }

                .social-btn {
                    min-width: 140px;
                }

                /* Divider */
                .divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--border-primary), transparent);
                    margin: 3rem 0;
                }

                /* Quick Stats */
                .quick-stats {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-value {
                    font-size: 2.5rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, var(--accent-primary), var(--secondary-emerald));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 0.5rem;
                }

                .stat-label {
                    font-size: 0.9rem;
                    color: var(--text-tertiary);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                @media (max-width: 768px) {
                    .glass-panel {
                        padding: 3rem 1.5rem;
                    }

                    .actions {
                        flex-direction: column;
                        align-items: stretch;
                    }

                    .btn {
                        width: 100%;
                    }

                    .quick-stats {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }

                    .stat-value {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;
