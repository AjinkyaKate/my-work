import React from 'react';
import { TrendingUp, Users, FileText, Award, Zap, Target } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            metric: '15+',
            label: 'User Stories Created',
            description: 'For Shopify Coupon Engine',
            icon: <FileText size={24} />,
            color: 'var(--primary-indigo)'
        },
        {
            metric: '100%',
            label: 'Traceability Achieved',
            description: 'From customer requests to feature delivery',
            icon: <Target size={24} />,
            color: 'var(--secondary-emerald)'
        },
        {
            metric: '50+',
            label: 'Customers Supported',
            description: 'Across onboarding and campaigns',
            icon: <Users size={24} />,
            color: '#F28B82'
        },
        {
            metric: '0→1',
            label: 'Product Launches',
            description: 'Shipment tracking platform from scratch',
            icon: <Zap size={24} />,
            color: '#C58AF9'
        },
        {
            metric: 'CSPO®',
            label: 'Certified',
            description: 'Scrum Product Owner by Scrum Alliance',
            icon: <Award size={24} />,
            color: '#fb923c'
        },
        {
            metric: '3+',
            label: 'Years Experience',
            description: 'In B2B SaaS & Logistics-Tech',
            icon: <TrendingUp size={24} />,
            color: '#fbbf24'
        }
    ];

    return (
        <section className="section" id="achievements" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2>Impact & Achievements</h2>
                    <p className="section-subtitle">Key results and milestones</p>
                </div>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`achievement-card animate-fade-up delay-${(index + 1) * 50}`}
                            style={{ '--accent-color': achievement.color }}
                        >
                            <div className="achievement-icon-wrapper">
                                <div className="icon-glow"></div>
                                <div className="achievement-icon">
                                    {achievement.icon}
                                </div>
                            </div>
                            <div className="achievement-content">
                                <h3 className="achievement-metric">{achievement.metric}</h3>
                                <p className="achievement-label">{achievement.label}</p>
                                <p className="achievement-description">{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .section-header {
                    margin-bottom: 3rem;
                    text-align: center;
                }

                .section-header h2 {
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                }

                .section-subtitle {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                }

                .achievements-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                }

                @media (max-width: 968px) {
                    .achievements-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 640px) {
                    .achievements-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .achievement-card {
                    position: relative;
                    background: var(--glass-bg);
                    backdrop-filter: blur(40px);
                    -webkit-backdrop-filter: blur(40px);
                    border: 1px solid var(--glass-border);
                    border-radius: var(--radius-xl);
                    padding: 2rem 1.5rem;
                    text-align: center;
                    transition: all 0.4s var(--ease-out);
                    overflow: hidden;
                }

                .achievement-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    border-color: rgba(255, 255, 255, 0.12);
                    box-shadow: var(--shadow-xl);
                }

                .achievement-card:hover .icon-glow {
                    opacity: 0.2;
                    transform: scale(1.2);
                }

                .achievement-icon-wrapper {
                    position: relative;
                    display: inline-flex;
                    margin-bottom: 1.5rem;
                }

                .icon-glow {
                    position: absolute;
                    inset: -20px;
                    background: radial-gradient(circle, var(--accent-color), transparent 70%);
                    opacity: 0;
                    transition: all 0.4s ease;
                    filter: blur(20px);
                    z-index: 0;
                }

                .achievement-icon {
                    position: relative;
                    width: 72px;
                    height: 72px;
                    border-radius: 20px;
                    background: var(--bg-tertiary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-color);
                    border: 1px solid var(--border-primary);
                    transition: all 0.3s ease;
                    z-index: 1;
                }

                .achievement-card:hover .achievement-icon {
                    background: var(--accent-color);
                    color: #fff;
                    border-color: var(--accent-color);
                    transform: scale(1.1);
                }

                .achievement-content {
                    position: relative;
                    z-index: 1;
                }

                .achievement-metric {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0 0 0.5rem 0;
                    letter-spacing: -0.02em;
                    background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .achievement-label {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin: 0 0 0.5rem 0;
                }

                .achievement-description {
                    font-size: 0.9rem;
                    color: var(--text-tertiary);
                    margin: 0;
                    line-height: 1.5;
                }

                @media (min-width: 968px) {
                    .achievements-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default Achievements;
