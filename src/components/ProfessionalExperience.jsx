import React from 'react';
import { Building2, Globe, ShoppingCart, Code2, Megaphone, Calendar, MapPin, ArrowUpRight, Clock } from 'lucide-react';

const ProfessionalExperience = () => {
    return (
        <section className="section" id="experience">
            <div className="container" style={{ maxWidth: '1100px' }}>
                <div className="animate-fade-up" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Experience</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>My professional journey.</p>
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

                                <div className="tenure-badge">
                                    <Clock size={14} />
                                    <span>2 Years 8 Months Total</span>
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

                        {/* Connector Line */}
                        <div className="role-connector"></div>

                        {/* Role 2: Marketing & Support */}
                        <div className="role-card">
                            <div className="role-header">
                                <div className="role-main">
                                    <div className="icon-box">
                                        <Megaphone size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <h4>Marketing & Support</h4>
                                        <span className="role-period">May 2022 - Dec 2024</span>
                                    </div>
                                </div>
                            </div>

                            <p className="role-description">
                                Managed customer relationships and support across multiple regions. I drove product discovery through direct user feedback and executed targeted marketing campaigns to increase adoption.
                            </p>

                            <div className="tags-container">
                                {['Customer Support', 'Product Discovery', 'Marketing Automation', 'User Feedback Analysis', 'Campaign Management'].map((skill, index) => (
                                    <span key={index} className="tech-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <style jsx>{`
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
                    border-radius: var(--radius-lg);
                    padding: 2rem;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
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
                    box-shadow: var(--shadow-md);
                }

                .logo-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .company-details h3 {
                    font-size: 1.5rem;
                    margin: 0 0 0.5rem 0;
                    color: var(--text-primary);
                }

                .industry {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                }

                .meta-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                    align-items: center;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    color: var(--text-tertiary);
                }

                .company-link {
                    color: var(--accent-primary);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .tenure-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: var(--bg-tertiary);
                    border-radius: 999px;
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    font-weight: 500;
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
                    border-radius: var(--radius-lg);
                    padding: 2.5rem;
                    transition: transform 0.2s ease, border-color 0.2s ease;
                }

                .role-card.current {
                    border-color: var(--accent-primary);
                    background: linear-gradient(to bottom right, var(--bg-secondary), rgba(79, 70, 229, 0.05));
                }

                .role-card:hover {
                    transform: translateY(-2px);
                }

                .role-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                }

                .role-main {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }

                .icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
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
                    font-size: 1.25rem;
                    margin: 0 0 0.25rem 0;
                    color: var(--text-primary);
                }

                .role-period {
                    font-size: 0.9rem;
                    color: var(--text-tertiary);
                }

                .status-pill {
                    font-size: 0.75rem;
                    color: var(--accent-primary);
                    background: rgba(79, 70, 229, 0.1);
                    padding: 0.25rem 0.75rem;
                    border-radius: 100px;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .role-description {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                    max-width: 90%;
                }

                .tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .tech-tag {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    background: var(--bg-tertiary);
                    padding: 0.4rem 1rem;
                    border-radius: 8px;
                    border: 1px solid var(--border-primary);
                    transition: all 0.2s ease;
                }

                .tech-tag:hover {
                    border-color: var(--secondary-emerald);
                    background: rgba(16, 185, 129, 0.1);
                    color: var(--secondary-emerald);
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
                        gap: 3rem;
                    }

                    .company-profile {
                        position: static;
                    }

                    .desktop-connector {
                        display: none;
                    }

                    .role-connector {
                        margin-left: 2rem;
                    }
                    
                    .role-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProfessionalExperience;
