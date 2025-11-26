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

                <div className="startup-grid">
                    {/* Qport Card */}
                    <div className="experience-card animate-fade-up delay-100">
                        <div className="card-header-compact">
                            <div className="logo-wrapper-compact">
                                <img src={qportLogo} alt="Qport" />
                            </div>
                            <div className="brand-info-compact">
                                <div className="brand-top">
                                    <h3>Qport</h3>
                                    <div className="recent-badge-compact">
                                        <Sparkles size={10} />
                                        <span>Recent</span>
                                    </div>
                                </div>
                                <span className="role-text-compact">Product Manager • 0-1 Build</span>
                            </div>
                            <a href="#" className="arrow-link-compact" aria-label="Visit Qport">
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        <div className="card-body-compact">
                            <p className="mission-text-compact">
                                Turn a fragmented, manual logistics environment into a seamless digital product.
                            </p>
                            <div className="impact-tags">
                                <span>Launched MVP in ~3mo</span>
                                <span>-40% Turnaround Time</span>
                                <span>Agile Processes</span>
                            </div>
                        </div>

                        <div className="card-footer-compact">
                            <div className="meta-item-compact">
                                <Calendar size={14} />
                                <span>Aug 2025 - Present</span>
                            </div>
                            <div className="meta-item-compact">
                                <Users size={14} />
                                <span>10-50 Employees</span>
                            </div>
                        </div>
                    </div>

                    {/* Denner Card */}
                    <div className="experience-card animate-fade-up delay-200">
                        <div className="card-header-compact">
                            <div className="logo-wrapper-compact">
                                <img src="https://media.licdn.com/dms/image/v2/D4D0BAQH5yyMCUma4UA/company-logo_200_200/B4DZlNGTztGsAI-/0/1757935126497/denner_india_logo?e=2147483647&v=beta&t=b4b4zS4G8GKS5q0HqB_TplId3mA5KqhOavi0QIjGT0I" alt="Denner" />
                            </div>
                            <div className="brand-info-compact">
                                <h3>Denner</h3>
                                <span className="role-text-compact">Analytics Consultant • Growth</span>
                            </div>
                            <a href="http://denner.in" target="_blank" rel="noopener noreferrer" className="arrow-link-compact" aria-label="Visit Denner">
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        <div className="card-body-compact">
                            <p className="mission-text-compact">
                                Move the founding team from gut-feel to data-driven decisions.
                            </p>
                            <div className="impact-tags">
                                <span>Mixpanel Tracking</span>
                                <span>Drop-off Analysis</span>
                                <span>Data Culture</span>
                            </div>
                        </div>

                        <div className="card-footer-compact">
                            <div className="meta-item-compact">
                                <Calendar size={14} />
                                <span>Mar 2024 - Dec 2024</span>
                            </div>
                            <div className="meta-item-compact">
                                <TrendingUp size={14} />
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

                .startup-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }

                @media (max-width: 768px) {
                    .startup-grid {
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                    }
                }

                @media (min-width: 768px) {
                    .startup-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                .experience-card {
                    background: var(--bg-secondary);
                    border-radius: 20px;
                    padding: 2rem;
                    border: 1px solid var(--border-primary);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .experience-card:hover {
                    transform: translateY(-6px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--accent-primary);
                }

                @media (max-width: 768px) {
                    .experience-card {
                        padding: 1.5rem;
                        width: 100%;
                    }
                    
                    .card-header-compact {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                    
                    .recent-badge-compact {
                        position: relative;
                        top: 0;
                        right: 0;
                        align-self: flex-start;
                    }
                }

                .card-header-compact {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .logo-wrapper-compact {
                    width: 56px;
                    height: 56px;
                    background: #fff;
                    border-radius: 12px;
                    padding: 4px;
                    flex-shrink: 0;
                    box-shadow: var(--shadow-sm);
                }

                .logo-wrapper-compact img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 8px;
                }

                .brand-info-compact {
                    flex-grow: 1;
                }

                .brand-top {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.25rem;
                }

                .brand-info-compact h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                    letter-spacing: -0.01em;
                }

                .recent-badge-compact {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    padding: 0.2rem 0.5rem;
                    background: rgba(79, 70, 229, 0.1);
                    border: 1px solid var(--accent-primary);
                    border-radius: 100px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    color: var(--accent-primary);
                }

                .role-text-compact {
                    font-size: 0.9rem;
                    color: #22d3ee;
                    font-weight: 500;
                }

                .arrow-link-compact {
                    color: var(--text-tertiary);
                    transition: all 0.3s ease;
                    padding: 0.5rem;
                    border-radius: 50%;
                }

                .experience-card:hover .arrow-link-compact {
                    color: var(--accent-primary);
                    background: rgba(79, 70, 229, 0.1);
                }

                .card-body-compact {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .mission-text-compact {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin: 0;
                }

                .impact-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .impact-tags span {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    background: var(--bg-tertiary);
                    padding: 0.4rem 0.8rem;
                    border-radius: 8px;
                    border: 1px solid var(--border-primary);
                }

                .card-footer-compact {
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--border-primary);
                    display: flex;
                    justify-content: space-between;
                    color: var(--text-tertiary);
                    font-size: 0.85rem;
                    font-weight: 500;
                }

                .meta-item-compact {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }

                @media(max-width: 768px) {
                    .startup-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default StartupExperience;
