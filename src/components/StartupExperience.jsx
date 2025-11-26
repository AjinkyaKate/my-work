import React from 'react';
import { ArrowUpRight, Calendar, Users, TrendingUp, Sparkles } from 'lucide-react';
import qportLogo from '../assets/qport_logo.jpg';

const StartupExperience = () => {
    return (
        <section className="section" id="startup-experience">
            <div className="container">
                <div className="header-content animate-fade-up">
                    <h2 className="section-title">Startup Journey</h2>
                    <p className="section-subtitle">
                        Building 0→1 products and scaling with impact.
                    </p>
                </div>

                <div className="timeline-container">
                    {/* Timeline Connector */}
                    <div className="timeline-line"></div>

                    {/* Qport Card */}
                    <div className="experience-card animate-fade-up delay-100" data-index="01">
                        <div className="card-number">01</div>
                        <div className="gradient-border"></div>
                        <div className="card-header">
                            <div className="brand-row">
                                <div className="logo-wrapper">
                                    <img src={qportLogo} alt="Qport" />
                                </div>
                                <div className="brand-info">
                                    <h3>Qport</h3>
                                    <span className="role-text">Product Manager • 0-1 Build</span>
                                </div>
                                <a href="#" className="arrow-link" aria-label="Visit Qport">
                                    <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="section-block">
                                <span className="label">MISSION</span>
                                <p className="mission-text">
                                    Turn a fragmented, manual logistics environment into a seamless digital product.
                                </p>
                            </div>

                            <div className="section-block">
                                <span className="label">KEY IMPACT</span>
                                <ul className="impact-list">
                                    <li>Launched MVP in ~3 months</li>
                                    <li>Reduced turnaround time by ~40%</li>
                                    <li>Established Agile processes</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card-footer">
                            <div className="meta-item">
                                <Calendar size={16} />
                                <span>2021 - 2023</span>
                            </div>
                            <div className="meta-item">
                                <Users size={16} />
                                <span>10-50 Employees</span>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Marker */}
                    <div className="timeline-marker">
                        <div className="marker-dot"></div>
                        <span className="marker-label">2021 - 2023</span>
                    </div>

                    {/* Denner Card */}
                    <div className="experience-card recent-badge animate-fade-up delay-200" data-index="02">
                        <div className="card-number">02</div>
                        <div className="gradient-border"></div>
                        <div className="recent-indicator">
                            <Sparkles size={14} />
                            <span>Recent</span>
                        </div>
                        <div className="card-header">
                            <div className="brand-row">
                                <div className="logo-wrapper">
                                    <img src="https://media.licdn.com/dms/image/v2/D4D0BAQH5yyMCUma4UA/company-logo_200_200/B4DZlNGTztGsAI-/0/1757935126497/denner_india_logo?e=2147483647&v=beta&t=b4b4zS4G8GKS5q0HqB_TplId3mA5KqhOavi0QIjGT0I" alt="Denner" />
                                </div>
                                <div className="brand-info">
                                    <h3>Denner</h3>
                                    <span className="role-text">Analytics Consultant • Growth</span>
                                </div>
                                <a href="#" className="arrow-link" aria-label="Visit Denner">
                                    <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="section-block">
                                <span className="label">MISSION</span>
                                <p className="mission-text">
                                    Move the founding team from gut-feel to data-driven decisions.
                                </p>
                            </div>

                            <div className="section-block">
                                <span className="label">KEY IMPACT</span>
                                <ul className="impact-list">
                                    <li>Implemented Mixpanel tracking</li>
                                    <li>Identified key drop-off screens</li>
                                    <li>Instilled early data culture</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card-footer">
                            <div className="meta-item">
                                <Calendar size={16} />
                                <span>2020 - 2021</span>
                            </div>
                            <div className="meta-item">
                                <TrendingUp size={16} />
                                <span>Growth Stage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .header-content {
                    margin-bottom: 5rem;
                    text-align: center;
                }

                .section-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 700;
                    margin: 0 0 1rem 0;
                    letter-spacing: -0.02em;
                    color: var(--text-primary);
                }
                
                .section-subtitle {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    margin: 0;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .timeline-container {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                }

                /* Timeline Line */
                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        var(--accent-primary) 20%,
                        var(--accent-primary) 80%,
                        transparent
                    );
                    transform: translateX(-50%);
                    z-index: 0;
                }

                /* Timeline Marker */
                .timeline-marker {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 2rem 0;
                    z-index: 1;
                }

                .marker-dot {
                    width: 16px;
                    height: 16px;
                    background: var(--accent-primary);
                    border-radius: 50%;
                    border: 3px solid var(--bg-primary);
                    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
                    animation: pulse-dot 2s infinite;
                }

                .marker-label {
                    position: absolute;
                    left: calc(50% + 30px);
                    font-size: 0.85rem;
                    color: var(--text-tertiary);
                    font-weight: 500;
                    background: var(--bg-primary);
                    padding: 0.25rem 0.75rem;
                    border-radius: 100px;
                    border: 1px solid var(--border-primary);
                    white-space: nowrap;
                }

                @keyframes pulse-dot {
                    0%, 100% {
                        transform: scale(1);
                        box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
                    }
                    50% {
                        transform: scale(1.1);
                        box-shadow: 0 0 0 8px rgba(79, 70, 229, 0.1);
                    }
                }

                .experience-card {
                    position: relative;
                    background: var(--bg-secondary);
                    border-radius: 24px;
                    padding: 3rem;
                    border: 1px solid var(--border-primary);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 3rem;
                    z-index: 1;
                    overflow: hidden;
                }

                .experience-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
                    border-color: transparent;
                }

                .experience-card:hover .gradient-border {
                    opacity: 1;
                }

                /* Gradient Border Effect */
                .gradient-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 24px;
                    padding: 1px;
                    background: linear-gradient(135deg, var(--accent-primary), var(--secondary-emerald));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                /* Card Number Badge */
                .card-number {
                    position: absolute;
                    top: -12px;
                    left: 3rem;
                    width: 48px;
                    height: 48px;
                    background: var(--bg-primary);
                    border: 2px solid var(--accent-primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 1.1rem;
                    color: var(--accent-primary);
                    z-index: 2;
                    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
                }

                /* Recent Indicator */
                .recent-indicator {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(16, 185, 129, 0.1));
                    border: 1px solid var(--accent-primary);
                    border-radius: 100px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--accent-primary);
                    animation: pulse-glow 2s infinite;
                }

                .recent-indicator svg {
                    animation: sparkle 1.5s infinite;
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 0 10px rgba(79, 70, 229, 0.3);
                    }
                    50% {
                        box-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
                    }
                }

                @keyframes sparkle {
                    0%, 100% { transform: rotate(0deg) scale(1); }
                    25% { transform: rotate(-10deg) scale(1.1); }
                    75% { transform: rotate(10deg) scale(1.1); }
                }

                /* Header */
                .card-header {
                    margin-bottom: 2.5rem;
                }

                .brand-row {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                }

                .logo-wrapper {
                    width: 64px;
                    height: 64px;
                    background: #fff;
                    border-radius: 16px;
                    padding: 4px;
                    flex-shrink: 0;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;
                }

                .experience-card:hover .logo-wrapper {
                    transform: scale(1.05);
                }

                .logo-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }

                .brand-info {
                    flex-grow: 1;
                }

                .brand-info h3 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0 0 0.25rem 0;
                    letter-spacing: -0.01em;
                }

                .role-text {
                    font-size: 0.95rem;
                    color: #22d3ee;
                    font-weight: 500;
                }

                .arrow-link {
                    color: var(--text-tertiary);
                    transition: all 0.3s ease;
                    padding: 0.5rem;
                    border-radius: 50%;
                }

                .experience-card:hover .arrow-link {
                    color: var(--accent-primary);
                    background: rgba(79, 70, 229, 0.1);
                    transform: translate(2px, -2px);
                }

                /* Body */
                .card-body {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;
                    margin-bottom: 3rem;
                }

                .section-block {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--accent-primary);
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .label::before {
                    content: '';
                    width: 24px;
                    height: 2px;
                    background: var(--accent-primary);
                }

                .mission-text {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin: 0;
                }

                .impact-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }

                .impact-list li {
                    position: relative;
                    padding-left: 1.5rem;
                    color: var(--text-secondary);
                    font-size: 1rem;
                    line-height: 1.5;
                    transition: color 0.3s ease;
                }

                .experience-card:hover .impact-list li {
                    color: var(--text-primary);
                }

                .impact-list li::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    color: var(--accent-primary);
                    font-size: 1.2rem;
                    font-weight: 700;
                    line-height: 1.5;
                }

                /* Footer */
                .card-footer {
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--border-primary);
                    display: flex;
                    gap: 2rem;
                    color: var(--text-tertiary);
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: color 0.3s ease;
                }

                .experience-card:hover .meta-item {
                    color: var(--text-secondary);
                }

                @media(max-width: 968px) {
                    .timeline-line {
                        left: 24px;
                    }

                    .timeline-marker {
                        justify-content: flex-start;
                        padding-left: 16px;
                    }

                    .marker-label {
                        left: 50px;
                    }

                    .header-content {
                        text-align: left;
                        margin-bottom: 4rem;
                    }
                    
                    .section-subtitle {
                        text-align: left;
                        margin-left: 0;
                    }

                    .experience-card {
                        padding: 2rem;
                        margin-left: 40px;
                    }

                    .card-number {
                        left: -54px;
                    }

                    .recent-indicator {
                        top: 1rem;
                        right: 1rem;
                        padding: 0.4rem 0.8rem;
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default StartupExperience;
