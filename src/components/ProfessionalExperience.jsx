import React from 'react';
import { Building2, Globe, ShoppingCart, Code2, Megaphone, Calendar, MapPin, ArrowUpRight, Clock } from 'lucide-react';

const ProfessionalExperience = () => {
    return (
        <section className="section" id="experience">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2>Experience</h2>
                    <p>My professional journey.</p>
                </div>

                <div className="profile-layout">

                    {/* Left Column: Company Profile (Sticky) */}
                    <div className="company-profile animate-fade-up delay-100">
                        <div className="profile-card">
                            <div className="logo-container">
                                <div className="logo-backdrop"></div>
                                <div className="logo-box">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqm2aMyM2LCSBWAxpEtX1ABwS93AuB_lKX_tfkteFLmQrXVsyG8o9VU9matezOk6EoQVI&usqp=CAU"
                                        alt="Dengage Logo"
                                    />
                                </div>
                            </div>

                            <div className="company-details">
                                <h3>D·engage</h3>
                                <p className="industry">B2B Marketing Automation / CDP</p>

                                <div className="meta-grid">
                                    <div className="meta-item">
                                        <MapPin size={14} />
                                        <span>Remote / India</span>
                                    </div>
                                    <div className="meta-item">
                                        <Globe size={14} />
                                        <a href="#" className="company-link">dengage.com <ArrowUpRight size={12} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Connector for Desktop */}
                        <div className="desktop-connector"></div>
                    </div>

                    {/* Right Column: Role Timeline (Scrollable) */}
                    <div className="roles-column animate-fade-up delay-200">

                        {/* Role 1: Product Owner */}
                        <div className="role-card current">
                            <div className="role-header">
                                <div className="role-main">
                                    <div className="icon-box">
                                        <Code2 size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <h4>Product Owner</h4>
                                        <span className="role-period">Jan 2025 - Present</span>
                                    </div>
                                </div>
                                <span className="status-pill">Current</span>
                            </div>

                            <p className="role-description">
                                Leading the product development for the Shopify coupon engine and integration. I manage the backlog, define sprint goals, and ensure technical implementation aligns with business objectives.
                            </p>

                            <div className="tags-container">
                                {['Product Management', 'Agile/Scrum', 'Shopify Integration', 'Backlog Management', 'Stakeholder Management'].map((skill, index) => (
                                    <span key={index} className="tech-tag">{skill}</span>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <style jsx>{`
                .section-header {
                    margin-bottom: 4rem;
                    max-width: 600px;
                }

                .section-header h2 {
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                .section-header p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    max-width: 500px;
                }

                .profile-layout {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 4rem;
                    align-items: start;
                }

                /* Left Column */
                .company-profile {
                    position: sticky;
                    top: 2rem;
                }

                .profile-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-lg); /* 32px */
                    padding: 2.5rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                }

                .logo-container {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 1.5rem auto;
                }

                .logo-backdrop {
                    position: absolute;
                    inset: -10px;
                    background: radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, transparent 70%);
                    filter: blur(10px);
                    z-index: 0;
                }

                .logo-box {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                    background: #fff;
                    border: 1px solid var(--border-primary);
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                    box-shadow: var(--shadow-sm);
                }

                .logo-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .company-details h3 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin: 0 0 0.5rem 0;
                    color: var(--text-primary);
                    letter-spacing: -0.01em;
                }

                .industry {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                }

                .meta-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                    align-items: center;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    color: var(--text-tertiary);
                }

                .company-link {
                    color: var(--accent-primary);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    transition: color 0.2s ease;
                }
                
                .company-link:hover {
                    color: #fff;
                }

                .tenure-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.6rem 1.2rem;
                    background: var(--bg-tertiary);
                    border-radius: 999px;
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                    border: 1px solid var(--border-primary);
                }

                .desktop-connector {
                    height: 100px;
                    width: 2px;
                    background: linear-gradient(to bottom, var(--border-primary), transparent);
                    margin: 0 auto;
                    margin-top: 1rem;
                }

                /* Right Column */
                .roles-column {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .role-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-lg); /* 32px */
                    padding: 3rem;
                    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
                }

                .role-card.current {
                    border-color: var(--accent-primary);
                    background: linear-gradient(to bottom right, var(--bg-secondary), rgba(79, 70, 229, 0.05));
                }

                .role-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-lg);
                }

                .role-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 2rem;
                }

                .role-main {
                    display: flex;
                    gap: 1.25rem;
                    align-items: center;
                }

                .icon-box {
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background: var(--bg-tertiary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--border-primary);
                }

                .text-accent {
                    color: var(--accent-primary);
                }

                .role-main h4 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0 0 0.25rem 0;
                    color: var(--text-primary);
                    letter-spacing: -0.01em;
                }

                .role-period {
                    font-size: 1rem;
                    color: var(--text-tertiary);
                }

                .status-pill {
                    font-size: 0.8rem;
                    color: var(--accent-primary);
                    background: rgba(79, 70, 229, 0.1);
                    padding: 0.4rem 1rem;
                    border-radius: 100px;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .role-description {
                    font-size: 1.1rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 2.5rem;
                    max-width: 95%;
                }

                .tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .tech-tag {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    background: var(--bg-tertiary);
                    padding: 0.5rem 1.2rem;
                    border-radius: 100px;
                    border: 1px solid var(--border-primary);
                    transition: all 0.2s ease;
                    font-weight: 500;
                }

                .tech-tag:hover {
                    border-color: var(--secondary-emerald);
                    background: rgba(16, 185, 129, 0.1);
                    color: var(--secondary-emerald);
                    transform: translateY(-2px);
                }

                .role-connector {
                    height: 2rem;
                    width: 2px;
                    background: var(--border-primary);
                    margin-left: 3rem; /* Align with icon center approx */
                }

                @media (max-width: 968px) {
                    .profile-layout {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }

                    .company-profile {
                        position: static;
                        margin-bottom: 1rem;
                    }

                    .desktop-connector {
                        display: none;
                    }

                    .role-connector {
                        margin-left: 2rem;
                        height: 1.5rem;
                    }
                    
                    .role-card {
                        padding: 2rem;
                    }

                    .role-header {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .status-pill {
                        align-self: flex-start;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProfessionalExperience;

