import React from 'react';
import { Rocket, Target, Zap, ArrowRight, TrendingUp, CheckCircle2, Calendar, ArrowUpRight, Building2, Users, Clock } from 'lucide-react';
import qportLogo from '../assets/qport_logo.jpg';

const StartupExperience = () => {
    return (
        <section className="section" id="startup-experience">
            <div className="container" style={{ maxWidth: '1100px' }}>
                <div className="animate-fade-up" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Startup Journey</h2>
                    <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Building from 0 to 1 and scaling with impact.
                    </p>
                </div>

                <div className="journey-list">
                    {/* Qport Experience */}
                    <div className="journey-card-wrapper animate-fade-up delay-100">
                        <div className="journey-card">
                            {/* Left: Brand Panel */}
                            <div className="brand-panel">
                                <div className="brand-content">
                                    <div className="logo-container">
                                        <img src={qportLogo} alt="Qport Logo" />
                                    </div>
                                    <h3 className="brand-name">Qport</h3>
                                    <div className="brand-meta">
                                        <span className="meta-badge"><Calendar size={12} /> 2021 - 2023</span>
                                        <span className="meta-badge"><Users size={12} /> 10-50 Employees</span>
                                    </div>
                                </div>
                                <div className="panel-overlay"></div>
                            </div>

                            {/* Right: Content Panel */}
                            <div className="content-panel">
                                <div className="panel-header">
                                    <div className="role-info">
                                        <h3>Product Manager • 0-1 Build</h3>
                                        <div className="mission-tag">
                                            <Rocket size={14} className="text-indigo" />
                                            <span>Mission: Turn a fragmented, manual logistics environment into a seamless digital product.</span>
                                        </div>
                                    </div>
                                    <a href="#" className="view-btn">
                                        View <ArrowUpRight size={16} />
                                    </a>
                                </div>

                                <p className="description">
                                    Entered a chaotic environment to transform a document-heavy PRD into a usable product. Bridged the gap between non-technical stakeholders and engineering to launch the first digital booking platform.
                                </p>

                                <div className="results-container">
                                    <h4 className="results-title">Key Impact</h4>
                                    <div className="results-grid">
                                        <div className="result-pill">
                                            <CheckCircle2 size={14} className="text-emerald" />
                                            <span>Launched MVP in ~3 months</span>
                                        </div>
                                        <div className="result-pill">
                                            <CheckCircle2 size={14} className="text-emerald" />
                                            <span>Reduced turnaround time by ~40%</span>
                                        </div>
                                        <div className="result-pill">
                                            <CheckCircle2 size={14} className="text-emerald" />
                                            <span>Established Agile processes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Connecting Line */}
                        <div className="card-connector"></div>
                    </div>

                    {/* Denner Experience */}
                    <div className="journey-card-wrapper animate-fade-up delay-200">
                        <div className="journey-card">
                            {/* Left: Brand Panel */}
                            <div className="brand-panel">
                                <div className="brand-content">
                                    <div className="logo-container">
                                        <img src="https://media.licdn.com/dms/image/v2/D4D0BAQH5yyMCUma4UA/company-logo_200_200/B4DZlNGTztGsAI-/0/1757935126497/denner_india_logo?e=2147483647&v=beta&t=b4b4zS4G8GKS5q0HqB_TplId3mA5KqhOavi0QIjGT0I" alt="Denner Logo" />
                                    </div>
                                    <h3 className="brand-name">Denner</h3>
                                    <div className="brand-meta">
                                        <span className="meta-badge"><Calendar size={12} /> 2020 - 2021</span>
                                        <span className="meta-badge"><TrendingUp size={12} /> Growth Stage</span>
                                    </div>
                                </div>
                                <div className="panel-overlay"></div>
                            </div>

                            {/* Right: Content Panel */}
                            <div className="content-panel">
                                <div className="panel-header">
                                    <div className="role-info">
                                        <h3>Analytics Consultant • Growth</h3>
                                        <div className="mission-tag">
                                            <Zap size={14} className="text-indigo" />
                                            <span>Mission: Move the founding team from gut-feel to data-driven decisions.</span>
                                        </div>
                                    </div>
                                    <a href="#" className="view-btn">
                                        View <ArrowUpRight size={16} />
                                    </a>
                                </div>

                                <p className="description">
                                    Implemented full-stack analytics to track user behavior. Built funnels to identify drop-off points and partnered with founders to prioritize UX improvements based on real data.
                                </p>

                                <div className="results-container">
                                    <h4 className="results-title">Key Impact</h4>
                                    <div className="results-grid">
                                        <div className="result-pill">
                                            <CheckCircle2 size={14} className="text-emerald" />
                                            <span>Implemented Mixpanel tracking</span>
                                        </div>
                                        <div className="result-pill">
                                            <CheckCircle2 size={14} className="text-emerald" />
                                            <span>Identified key drop-off screens</span>
                                        </div>
                                        <div className="result-pill">
                                            <CheckCircle2 size={14} className="text-emerald" />
                                            <span>Instilled early data culture</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .journey-list {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                    position: relative;
                }

                .journey-card-wrapper {
                    position: relative;
                }

                .card-connector {
                    position: absolute;
                    left: 15%; /* Align with brand panel center */
                    bottom: -3rem;
                    height: 3rem;
                    width: 2px;
                    background: linear-gradient(to bottom, var(--border-primary), transparent);
                    opacity: 0.5;
                }

                .journey-card {
                    display: flex;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                    min-height: 320px;
                }

                .journey-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--primary-indigo); /* Indigo Border on Hover */
                }

                /* Left: Brand Panel */
                .brand-panel {
                    width: 30%;
                    background: linear-gradient(135deg, rgba(79, 70, 229, 0.03) 0%, rgba(79, 70, 229, 0.08) 100%); /* Indigo Gradient */
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid var(--border-primary);
                    padding: 2rem;
                    flex-shrink: 0;
                }

                .panel-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%);
                    pointer-events: none;
                }

                .brand-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                }

                .logo-container {
                    width: 80px;
                    height: 80px;
                    border-radius: 16px;
                    background: #fff;
                    padding: 4px;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15); /* Indigo Shadow */
                    border: 1px solid rgba(79, 70, 229, 0.2);
                }

                .logo-container img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }

                .brand-name {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0 0 1rem 0;
                    color: var(--primary-indigo); /* Indigo Text */
                }

                .brand-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    width: 100%;
                }

                .meta-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    background: rgba(255, 255, 255, 0.5);
                    padding: 0.4rem 0.8rem;
                    border-radius: 6px;
                    border: 1px solid rgba(79, 70, 229, 0.1);
                }

                /* Right: Content Panel */
                .content-panel {
                    width: 70%;
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                }

                .panel-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                }

                .role-info h3 {
                    font-size: 1.25rem;
                    margin: 0 0 0.75rem 0;
                    color: var(--text-primary);
                }

                .mission-tag {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    color: var(--primary-indigo); /* Indigo Text */
                    background: rgba(79, 70, 229, 0.05);
                    padding: 0.5rem 0.75rem;
                    border-radius: 8px;
                    border: 1px solid rgba(79, 70, 229, 0.1);
                }

                .text-indigo {
                    color: var(--primary-indigo);
                }

                .view-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    border: 1px solid var(--border-primary);
                }

                .view-btn:hover {
                    background: var(--primary-indigo);
                    color: #fff;
                    border-color: var(--primary-indigo);
                }

                .description {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                    flex-grow: 1;
                }

                .results-container {
                    margin-top: auto;
                }

                .results-title {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-tertiary);
                    margin-bottom: 1rem;
                }

                .results-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .result-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    color: var(--secondary-emerald); /* Dark Emerald Text */
                    background: rgba(16, 185, 129, 0.1); /* Light Emerald Background */
                    padding: 0.5rem 1rem;
                    border-radius: 100px;
                    border: 1px solid var(--secondary-emerald); /* Emerald Border */
                }

                .text-emerald {
                    color: var(--secondary-emerald);
                }

                @media (max-width: 968px) {
                    .journey-card {
                        flex-direction: column;
                    }

                    .brand-panel {
                        width: 100%;
                        border-right: none;
                        border-bottom: 1px solid var(--border-primary);
                        padding: 2rem 1.5rem;
                    }

                    .brand-content {
                        flex-direction: row;
                        text-align: left;
                        gap: 1.5rem;
                    }

                    .logo-container {
                        margin-bottom: 0;
                        width: 64px;
                        height: 64px;
                    }

                    .brand-name {
                        margin-bottom: 0.5rem;
                    }

                    .brand-meta {
                        flex-direction: row;
                        flex-wrap: wrap;
                        width: auto;
                    }

                    .content-panel {
                        width: 100%;
                        padding: 1.5rem;
                    }

                    .card-connector {
                        display: none;
                    }
                    
                    .panel-header {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    .view-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
                
                @media (max-width: 600px) {
                    .brand-content {
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    .brand-meta {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default StartupExperience;
