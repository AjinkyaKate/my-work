import React from 'react';
import { Building2, Globe, ShoppingCart, Code2, Megaphone, Calendar, MapPin, ArrowUpRight, Clock } from 'lucide-react';

const ProfessionalExperience = () => {
    return (
        <section className="section" id="experience" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <p className="section-subtitle">Building impactful products</p>
                </div>

                <div className="experience-content">

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
                                Leading product development for B2B marketing automation SaaS. Delivered Shopify Coupon Engine from vision to staging deployment, created 15+ user stories, and redesigned Jira workflows achieving 100% traceability from customer requests to feature delivery.
                            </p>

                            <div className="highlights-list">
                                <div className="highlight-item">
                                    <ShoppingCart size={16} className="highlight-icon" />
                                    <span>Shipped Shopify Coupon Engine supporting high-volume coupon generation for enterprise clients</span>
                                </div>
                                <div className="highlight-item">
                                    <Building2 size={16} className="highlight-icon" />
                                    <span>Established L1/L2/L3 support escalation framework for Shopify/Salesforce plugins</span>
                                </div>
                                <div className="highlight-item">
                                    <Globe size={16} className="highlight-icon" />
                                    <span>Led cross-functional collaboration on audience preview feature for core marketing workflows</span>
                                </div>
                            </div>

                            <div className="tags-container">
                                {['Agile/Scrum', 'Shopify Integration', 'PRD Development', 'API Integration', 'Stakeholder Management', 'Jira Workflows'].map((skill, index) => (
                                    <span key={index} className="tech-tag">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="role-connector"></div>

                        {/* Role 2: Marketing & Technical Support Executive */}
                        <div className="role-card">
                            <div className="role-header">
                                <div className="role-main">
                                    <div className="icon-box">
                                        <Megaphone size={20} className="text-accent" />
                                    </div>
                                    <div>
                                        <h4>Marketing & Technical Support Executive</h4>
                                        <span className="role-period">May 2022 - Dec 2024</span>
                                    </div>
                                </div>
                            </div>

                            <p className="role-description">
                                Supported 50+ customers across onboarding, segmentation, campaigns, and reporting. Documented recurring pain points and feature requests, feeding insights into product backlog for prioritization.
                            </p>

                            <div className="highlights-list">
                                <div className="highlight-item">
                                    <Globe size={16} className="highlight-icon" />
                                    <span>Created customer-facing guides, FAQs, and walkthroughs for product capabilities</span>
                                </div>
                                <div className="highlight-item">
                                    <Building2 size={16} className="highlight-icon" />
                                    <span>Gathered customer feedback to inform product roadmap and feature prioritization</span>
                                </div>
                            </div>

                            <div className="tags-container">
                                {['Customer Support', 'Product Documentation', 'Campaign Management', 'Feature Requests', 'Customer Success'].map((skill, index) => (
                                    <span key={index} className="tech-tag">{skill}</span>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>

            <style jsx>{`
                .section-header {
                    max-width: var(--content-width);
                    margin: 0 auto 4rem;
                    text-align: center;
                }

                .section-subtitle {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                }

                .experience-content {
                    max-width: var(--content-width);
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .role-card {
                    background: var(--surface);
                    border: 1px solid var(--border-light);
                    border-radius: var(--radius-lg);
                    padding: 2.5rem;
                    transition: all 0.3s var(--ease-smooth);
                }

                .role-card.current {
                    border-color: var(--accent-primary);
                    box-shadow: 0 0 0 1px var(--accent-primary), var(--shadow-sm);
                }

                .role-card:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md);
                }

                .role-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.25rem;
                }

                .role-main {
                    display: flex;
                    gap: 0.875rem;
                    align-items: center;
                }

                .icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: var(--radius-md);
                    background: var(--bg-secondary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                [data-theme="dark"] .icon-box {
                    background: var(--bg-tertiary);
                }

                .text-accent {
                    color: var(--accent-primary);
                }

                .role-main h4 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0 0 0.25rem 0;
                    color: var(--text-primary);
                    letter-spacing: -0.02em;
                }

                .role-period {
                    font-size: 1rem;
                    color: var(--text-tertiary);
                    font-weight: 500;
                }

                .status-pill {
                    font-size: 0.75rem;
                    color: #ffffff;
                    background: var(--accent-gradient);
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-full);
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                }

                .role-description {
                    font-size: 1.125rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                }

                .highlights-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }

                .highlight-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    color: var(--text-secondary);
                }

                .highlight-item::before {
                    content: '•';
                    color: var(--accent-primary);
                    font-weight: 700;
                    font-size: 1.25rem;
                }

                .highlight-icon {
                    display: none;
                }

                .tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .tech-tag {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                    background: var(--bg-secondary);
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-full);
                    border: 1px solid var(--border-light);
                    font-weight: 500;
                    transition: all 0.2s var(--ease-smooth);
                }

                .tech-tag:hover {
                    background: var(--accent-primary);
                    border-color: var(--accent-primary);
                    color: #ffffff;
                }

                @media (max-width: 768px) {
                    .role-card {
                        padding: 1.5rem;
                    }

                    .role-header {
                        flex-direction: column;
                        gap: 1rem;
                    }

                    .role-main {
                        align-items: flex-start;
                    }

                    .highlights-list {
                        gap: 1rem;
                    }
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

