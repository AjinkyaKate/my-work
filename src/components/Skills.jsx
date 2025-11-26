import React from 'react';
import { Zap, Users, BarChart2, Terminal, ArrowUpRight } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Product Strategy',
            icon: <Zap size={24} />,
            description: 'Turning ambiguity into clear, actionable roadmaps.',
            skills: ['Agile / Scrum (CSPO®)', 'Product Discovery', 'Roadmap Planning', 'Stakeholder Management', 'GTM Strategy'],
            color: 'var(--primary-indigo)',
            colSpan: 'span 2'
        },
        {
            title: 'Research & UX',
            icon: <Users size={24} />,
            description: 'Deeply understanding user needs and behaviors.',
            skills: ['User Interviews', 'Persona Building', 'Wireframing', 'Usability Testing', 'JTBD Framework'],
            color: 'var(--secondary-emerald)',
            colSpan: 'span 1'
        },
        {
            title: 'Data & Analytics',
            icon: <BarChart2 size={24} />,
            description: 'Making informed decisions with quantitative insights.',
            skills: ['Mixpanel', 'Google Analytics', 'Amplitude', 'SQL Basics', 'Cohort Analysis'],
            color: '#F28B82',
            colSpan: 'span 1'
        },
        {
            title: 'Tools & Stack',
            icon: <Terminal size={24} />,
            description: 'The technical toolkit for modern product delivery.',
            skills: ['Jira', 'Notion', 'Figma', 'Slack', 'Postman', 'Linear'],
            color: '#C58AF9',
            colSpan: 'span 2'
        }
    ];

    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2>Skills & Expertise</h2>
                    <p>A comprehensive toolkit for building and scaling digital products.</p>
                </div>

                <div className="skills-grid">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className={`skill-card animate-fade-up delay-${(index + 1) * 100} ${group.colSpan === 'span 2' ? 'col-span-2' : ''}`}
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
                    margin-bottom: 4rem;
                    max-width: 600px;
                }

                .section-header h2 {
                    font-size: 2rem;
                    font-weight: 500;
                    color: var(--text-primary);
                    margin-bottom: 0.5rem;
                    letter-spacing: -0.02em;
                }

                .section-header p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }

                @media (min-width: 968px) {
                    .skills-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    
                    .col-span-2 {
                        grid-column: span 2;
                    }
                }

                .skill-card {
                    position: relative;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }

                .skill-card:hover {
                    transform: translateY(-4px);
                    border-color: var(--accent-color);
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
                }

                .card-bg-glow {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle at top right, var(--accent-color), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                    filter: blur(40px);
                }

                .skill-card:hover .card-bg-glow {
                    opacity: 0.15;
                }

                .card-content {
                    position: relative;
                    padding: 2rem;
                    z-index: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }

                .icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-primary);
                    transition: all 0.3s ease;
                }

                .skill-card:hover .icon-box {
                    background: var(--accent-color);
                    color: #fff;
                }

                .group-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin: 0;
                }

                .group-description {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                    flex-grow: 1;
                }

                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .skill-pill {
                    font-size: 0.85rem;
                    padding: 0.5rem 1rem;
                    border-radius: 100px;
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-secondary);
                    border: 1px solid transparent;
                    transition: all 0.3s ease;
                    font-weight: 500;
                }

                .skill-card:hover .skill-pill {
                    background: rgba(255, 255, 255, 0.1);
                    color: var(--text-primary);
                }

                .skill-pill:hover {
                    border-color: var(--accent-color);
                    transform: scale(1.05);
                }

                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .section-header h2 {
                        font-size: 1.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
