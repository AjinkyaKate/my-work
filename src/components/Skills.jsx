import React from 'react';
import { Zap, Users, BarChart2, Terminal, ArrowUpRight } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Product Management',
            icon: <Zap size={22} />,
            description: 'Leading products from vision to delivery with structured execution.',
            skills: ['Product Roadmaps', 'PRD Writing', 'User Stories', 'Backlog Management', 'Feature Prioritization', 'Go-to-Market Strategy'],
            color: 'var(--primary-indigo)'
        },
        {
            title: 'Agile & Methodologies',
            icon: <Users size={22} />,
            description: 'Driving cross-functional teams with agile best practices.',
            skills: ['Scrum (CSPO®)', 'Sprint Planning', 'Story Estimation', 'Retrospectives', 'Definition of Done', 'Cross-Functional Collaboration'],
            color: 'var(--secondary-emerald)'
        },
        {
            title: 'Technical & Tools',
            icon: <Terminal size={22} />,
            description: 'Leveraging modern tools for product analytics and collaboration.',
            skills: ['Jira', 'Confluence', 'Mixpanel', 'Metabase', 'Mapbox', 'Power BI', 'Figma', 'SQL'],
            color: '#F28B82'
        },
        {
            title: 'Domain Expertise',
            icon: <BarChart2 size={22} />,
            description: 'Deep experience in B2B SaaS and logistics-tech products.',
            skills: ['B2B SaaS', 'E-commerce (Shopify)', 'Salesforce Integration', 'Logistics-Tech', 'Marketing Automation'],
            color: '#C58AF9'
        }
    ];

    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-header">
                    <h2>Skills</h2>
                    <p className="section-subtitle">Tools and expertise for building great products</p>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className={`skill-card mobile-scroll-item animate-fade-up delay-${(index + 1) * 100}`}
                            style={{ '--accent-color': group.color }}
                        >
                            <div className="card-bg-glow"></div>
                            <div className="card-content">
                                <div className="card-header">
                                    <div className="icon-box">
                                        {group.icon}
                                    </div>
                                    <h3 className="group-title">{group.title}</h3>
                                </div>
                                <p className="group-description">{group.description}</p>
                                <div className="skills-list">
                                    {group.skills.map((skill, i) => (
                                        <span key={i} className="skill-pill">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
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

                .skills-grid {
                    max-width: var(--max-width);
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }

                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .skill-card {
                    background: var(--surface);
                    border: 1px solid var(--border-light);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    transition: all 0.3s var(--ease-smooth);
                    box-shadow: var(--shadow-sm);
                }

                .skill-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--accent-primary);
                }

                .card-bg-glow {
                    display: none;
                }

                .card-content {
                    position: relative;
                    padding: 1.75rem;
                    z-index: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 0.875rem;
                    margin-bottom: 1rem;
                }

                .icon-box {
                    width: 56px;
                    height: 56px;
                    border-radius: var(--radius-md);
                    background: var(--bg-secondary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-primary);
                    flex-shrink: 0;
                }

                .group-title {
                    font-size: 1.375rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                    letter-spacing: -0.02em;
                }

                .group-description {
                    font-size: 1.0625rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                }

                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.625rem;
                }

                .skill-pill {
                    font-size: 0.875rem;
                    padding: 0.5rem 1rem;
                    border-radius: var(--radius-full);
                    background: var(--bg-secondary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border-light);
                    font-weight: 500;
                    transition: all 0.2s var(--ease-smooth);
                }

                .skill-pill:hover {
                    background: var(--accent-primary);
                    border-color: var(--accent-primary);
                    color: #ffffff;
                }

                @media (max-width: 768px) {
                    .card-content {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
