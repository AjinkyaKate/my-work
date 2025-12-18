import React, { useState } from 'react';
import { Mail, Linkedin, FileText, ArrowRight, Sparkles, Zap, Target, Users, Share2 } from 'lucide-react';
import DocumentViewerModal from './DocumentViewerModal';

const Hero = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const resumeUrl = '/Ajinkya_Kate_Resume.pdf';

    return (
        <>
            <section className="hero-section">
                {/* Animated Background */}
                <div className="hero-bg">
                    <div className="bg-gradient gradient-1"></div>
                    <div className="bg-gradient gradient-2"></div>
                    <div className="bg-grid"></div>
                </div>

                <div className="container">
                    <div className="hero-content">
                        {/* Badge with Animation */}
                        <div className="hero-badge animate-fade-in">
                            <div className="badge-glow"></div>
                            <Sparkles size={16} className="badge-icon" />
                            <span>Product Owner</span>
                            <span className="badge-dot"></span>
                            <span className="badge-status">Available for opportunities</span>
                        </div>

                        {/* Main Heading with Stagger Animation */}
                        <h1 className="hero-title animate-slide-up">
                            <span className="title-line">Turning ideas into</span>
                            <span className="gradient-text title-line delay-1"> products people love</span>
                        </h1>

                        {/* Description */}
                        <p className="hero-description animate-slide-up delay-2">
                            Hi, I'm <span className="highlight-name">Ajinkya</span> — a <strong>CSPO®-certified Product Owner</strong> with 3+ years of experience shipping B2B SaaS and logistics-tech products. I help teams build the right things, the right way.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-actions animate-slide-up delay-3">
                            <button
                                onClick={() => setIsViewerOpen(true)}
                                className="btn btn-primary"
                            >
                                <FileText size={20} />
                                View Resume
                                <ArrowRight size={18} className="btn-arrow" />
                            </button>
                            <a
                                href="https://www.linkedin.com/in/ajinkya-kate/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                <Linkedin size={20} />
                                Let's Connect
                            </a>
                        </div>

                        {/* Quick Stats with Icons */}
                        <div className="hero-stats animate-slide-up delay-4">
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <Zap size={24} />
                                </div>
                                <div className="stat-number">3+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <Target size={24} />
                                </div>
                                <div className="stat-number">15+</div>
                                <div className="stat-label">Products Shipped</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-icon">
                                    <Users size={24} />
                                </div>
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Clients Supported</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span className="scroll-text">Scroll to explore</span>
                </div>
            </section>

            <style jsx>{`
                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    padding: 8rem 0 4rem;
                    position: relative;
                    overflow: hidden;
                }

                /* Animated Background */
                .hero-bg {
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
                    filter: blur(80px);
                    opacity: 0.08;
                    animation: float-slow 20s ease-in-out infinite;
                }

                .gradient-1 {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, var(--accent-primary), transparent 70%);
                    top: -150px;
                    right: -100px;
                    animation-delay: 0s;
                }

                .gradient-2 {
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(circle, var(--accent-primary), transparent 70%);
                    bottom: -100px;
                    left: -50px;
                    animation-delay: 10s;
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    50% {
                        transform: translate(30px, -30px) scale(1.1);
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
                    background-size: 50px 50px;
                    opacity: 0.03;
                    mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                    max-width: 900px;
                    margin: 0 auto;
                    text-align: center;
                }

                /* Badge Styling */
                .hero-badge {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1.5rem;
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: var(--radius-full);
                    margin-bottom: 2.5rem;
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    font-weight: 600;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }

                [data-theme="dark"] .hero-badge {
                    background: rgba(20, 20, 20, 0.7);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .badge-glow {
                    display: none;
                }

                .badge-icon {
                    color: var(--accent-primary);
                }

                .badge-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--accent-success);
                }

                .badge-status {
                    color: var(--text-tertiary);
                }

                /* Title Styling */
                .hero-title {
                    font-size: clamp(2.5rem, 6vw, 4.5rem);
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                    color: var(--text-primary);
                    letter-spacing: -0.03em;
                }

                .title-line {
                    display: block;
                }

                .gradient-text {
                    color: var(--accent-primary);
                    position: relative;
                }

                /* Description */
                .hero-description {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    margin-bottom: 3rem;
                    line-height: 1.8;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .highlight-name {
                    color: var(--accent-primary);
                    font-weight: 700;
                }

                /* Actions */
                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 5rem;
                }

                .btn-arrow {
                    transition: transform 0.3s ease;
                }

                .btn-primary:hover .btn-arrow {
                    transform: translateX(4px);
                }

                .btn-ghost {
                    background: transparent;
                    color: var(--text-secondary);
                    border: 1px solid var(--border-light);
                }

                .btn-ghost:hover {
                    background: var(--bg-secondary);
                    border-color: var(--accent-primary);
                    color: var(--accent-primary);
                    transform: translateY(-2px);
                }

                /* Stats */
                .hero-stats {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 3rem;
                    padding: 2.5rem 3rem;
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 24px;
                    max-width: 800px;
                    margin: 0 auto;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
                    position: relative;
                }

                [data-theme="dark"] .hero-stats {
                    background: rgba(20, 20, 20, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .hero-stats::before {
                    display: none;
                }

                .stat-item {
                    text-align: center;
                    flex: 1;
                    position: relative;
                }

                .stat-icon {
                    width: 56px;
                    height: 56px;
                    margin: 0 auto 1rem;
                    background: rgba(59, 130, 246, 0.1);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-primary);
                    transition: transform 0.3s ease;
                }

                .stat-item:hover .stat-icon {
                    transform: translateY(-2px);
                    background: rgba(59, 130, 246, 0.15);
                }

                .stat-number {
                    font-family: var(--font-display);
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.03em;
                }

                .stat-label {
                    font-size: 0.875rem;
                    color: var(--text-tertiary);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .stat-divider {
                    width: 1px;
                    height: 80px;
                    background: linear-gradient(180deg, transparent, var(--border-primary), transparent);
                }

                /* Scroll Indicator */
                .scroll-indicator {
                    position: absolute;
                    bottom: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    opacity: 0.6;
                    animation: fade-in-up 1s ease 2s both;
                }

                .scroll-mouse {
                    width: 24px;
                    height: 36px;
                    border: 2px solid var(--text-tertiary);
                    border-radius: 12px;
                    position: relative;
                }

                .scroll-wheel {
                    width: 3px;
                    height: 8px;
                    background: var(--text-tertiary);
                    border-radius: 2px;
                    position: absolute;
                    top: 6px;
                    left: 50%;
                    transform: translateX(-50%);
                    animation: scroll-wheel 1.5s ease-in-out infinite;
                }

                @keyframes scroll-wheel {
                    0%, 100% {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                    50% {
                        opacity: 0.3;
                        transform: translateX(-50%) translateY(10px);
                    }
                }

                .scroll-text {
                    font-size: 0.75rem;
                    color: var(--text-tertiary);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: 600;
                }

                /* Animations */
                .animate-fade-in {
                    animation: fade-in 0.8s ease both;
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease both;
                }

                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.2s; }
                .delay-3 { animation-delay: 0.3s; }
                .delay-4 { animation-delay: 0.4s; }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(20px);
                    }
                    to {
                        opacity: 0.6;
                        transform: translateX(-50%) translateY(0);
                    }
                }

                /* Responsive */
                @media (max-width: 968px) {
                    .hero-section {
                        min-height: auto;
                        padding: 6rem 0 3rem;
                    }

                    .hero-badge {
                        flex-wrap: wrap;
                        justify-content: center;
                        font-size: 0.8rem;
                        padding: 0.625rem 1.25rem;
                    }

                    .badge-status {
                        display: none;
                    }

                    .hero-description {
                        font-size: 1.125rem;
                    }

                    .hero-stats {
                        flex-direction: column;
                        gap: 2rem;
                        padding: 2rem 1.5rem;
                    }

                    .stat-divider {
                        display: none;
                    }

                    .stat-icon {
                        width: 48px;
                        height: 48px;
                    }

                    .stat-number {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    .hero-actions {
                        flex-direction: column;
                        align-items: stretch;
                        width: 100%;
                        max-width: 400px;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .hero-actions .btn {
                        width: 100%;
                    }

                    .scroll-indicator {
                        display: none;
                    }
                }
            `}</style>

            {/* Document Viewer Modal */}
            <DocumentViewerModal
                isOpen={isViewerOpen}
                onClose={() => setIsViewerOpen(false)}
                documentUrl={resumeUrl}
                documentTitle="Ajinkya Kate - Resume.pdf"
            />
        </>
    );
};

export default Hero;
