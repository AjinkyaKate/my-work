import React from 'react';
import { Mail, Linkedin, Send, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section contact-section" id="contact">
            {/* Animated Background */}
            <div className="contact-bg">
                <div className="bg-gradient gradient-1"></div>
                <div className="bg-gradient gradient-2"></div>
                <div className="bg-grid"></div>
            </div>

            <div className="container">
                <div className="contact-panel">
                    {/* Icon Badge */}
                    <div className="contact-icon-badge">
                        <Sparkles className="sparkle-icon" size={32} />
                    </div>

                    {/* Title with Gradient */}
                    <h2 className="contact-title">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>

                    <p className="contact-description">
                        Looking for a Product Owner who can turn ideas into impactful products? Let's talk about your next project.
                    </p>

                    {/* Action Buttons */}
                    <div className="actions">
                        <a href="mailto:ajinkyakate2001@gmail.com?subject=Product%20Opportunity&body=Hi%20Ajinkya%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect." className="btn btn-primary">
                            <Mail size={20} />
                            <span>Send Email</span>
                            <ArrowRight size={18} className="btn-arrow" />
                        </a>
                        <a href="https://www.linkedin.com/in/ajinkya-kate/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <Linkedin size={20} />
                            <span>Connect on LinkedIn</span>
                        </a>
                    </div>

                    {/* Quick Contact Info */}
                    <div className="contact-info">
                        <div className="info-item">
                            <Mail size={18} className="info-icon" />
                            <span>ajinkyakate2001@gmail.com</span>
                        </div>
                        <div className="info-divider"></div>
                        <div className="info-item">
                            <MessageCircle size={18} className="info-icon" />
                            <span>Available for opportunities</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .contact-section {
                    position: relative;
                    background: var(--bg-secondary);
                    overflow: hidden;
                }

                /* Animated Background */
                .contact-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 0;
                    pointer-events: none;
                }

                .bg-gradient {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(100px);
                    opacity: 0.06;
                    animation: float-gradient 25s ease-in-out infinite;
                }

                .gradient-1 {
                    width: 500px;
                    height: 500px;
                    background: radial-gradient(circle, var(--accent-primary), transparent 70%);
                    top: -200px;
                    left: -150px;
                    animation-delay: 0s;
                }

                .gradient-2 {
                    width: 450px;
                    height: 450px;
                    background: radial-gradient(circle, var(--accent-primary), transparent 70%);
                    bottom: -150px;
                    right: -100px;
                    animation-delay: 12s;
                }

                @keyframes float-gradient {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(40px, -40px) scale(1.15);
                    }
                }

                .bg-grid {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image:
                        linear-gradient(var(--border-light) 1px, transparent 1px),
                        linear-gradient(90deg, var(--border-light) 1px, transparent 1px);
                    background-size: 60px 60px;
                    opacity: 0.04;
                    mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
                }

                .container {
                    position: relative;
                    z-index: 1;
                }

                .contact-panel {
                    text-align: center;
                    max-width: 900px;
                    margin: 0 auto;
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 32px;
                    padding: 5rem 3rem;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
                    position: relative;
                }

                [data-theme="dark"] .contact-panel {
                    background: rgba(20, 20, 20, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .contact-panel::before {
                    display: none;
                }

                /* Icon Badge */
                .contact-icon-badge {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 2.5rem;
                    background: rgba(59, 130, 246, 0.1);
                    border-radius: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-primary);
                    transition: transform 0.3s ease;
                }

                .contact-icon-badge:hover {
                    transform: scale(1.05);
                    background: rgba(59, 130, 246, 0.15);
                }

                .sparkle-icon {
                    /* No animation */
                }

                /* Title Styling */
                .contact-title {
                    font-size: clamp(2.5rem, 5vw, 3.5rem);
                    font-weight: 900;
                    margin: 0 0 1.5rem 0;
                    color: var(--text-primary);
                    letter-spacing: -0.03em;
                }

                .gradient-text {
                    color: var(--accent-primary);
                }

                .contact-description {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    margin-bottom: 3rem;
                    line-height: 1.8;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Action Buttons */
                .actions {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    margin-bottom: 3rem;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem 2rem;
                    border-radius: 16px;
                    font-weight: 600;
                    font-size: 1rem;
                    text-decoration: none;
                    transition: all 0.3s var(--ease-smooth);
                    position: relative;
                    overflow: hidden;
                }

                .btn-primary {
                    background: var(--accent-primary);
                    color: #ffffff;
                    border: none;
                    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
                }

                .btn-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
                    background: var(--accent-primary);
                    filter: brightness(1.1);
                }

                .btn-arrow {
                    transition: transform 0.3s ease;
                }

                .btn-primary:hover .btn-arrow {
                    transform: translateX(4px);
                }

                .btn-outline {
                    background: transparent;
                    color: var(--text-primary);
                    border: 2px solid var(--border-primary);
                }

                .btn-outline:hover {
                    background: var(--bg-tertiary);
                    border-color: var(--accent-primary);
                    color: var(--accent-primary);
                    transform: translateY(-3px);
                }

                /* Contact Info */
                .contact-info {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    padding: 2rem;
                    background: rgba(255, 255, 255, 0.5);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 20px;
                    max-width: 700px;
                    margin: 0 auto;
                }

                [data-theme="dark"] .contact-info {
                    background: rgba(20, 20, 20, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                }

                .info-icon {
                    color: var(--accent-primary);
                    flex-shrink: 0;
                }

                .info-divider {
                    width: 1px;
                    height: 40px;
                    background: linear-gradient(180deg, transparent, var(--border-primary), transparent);
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .contact-panel {
                        padding: 3rem 1.5rem;
                        border-radius: 24px;
                    }

                    .contact-icon-badge {
                        width: 64px;
                        height: 64px;
                        margin-bottom: 2rem;
                    }

                    .sparkle-icon {
                        width: 28px;
                        height: 28px;
                    }

                    .contact-description {
                        font-size: 1.125rem;
                        margin-bottom: 2rem;
                    }

                    .actions {
                        flex-direction: column;
                        align-items: stretch;
                        margin-bottom: 2rem;
                    }

                    .actions .btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .contact-info {
                        flex-direction: column;
                        gap: 1.5rem;
                        padding: 1.5rem;
                    }

                    .info-divider {
                        display: none;
                    }

                    .info-item {
                        width: 100%;
                        justify-content: center;
                    }
                }

            `}</style>
        </section>
    );
};

export default Contact;
