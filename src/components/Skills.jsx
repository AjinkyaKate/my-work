import React from 'react';
import { Zap, Users, BarChart2, Terminal, ArrowUpRight } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            title: 'Product Strategy',
            icon: <Zap size={22} />,
            description: 'Turning ambiguity into clear, actionable roadmaps.',
            skills: ['Agile / Scrum (CSPO®)', 'Product Discovery', 'Roadmap Planning', 'Stakeholder Management', 'GTM Strategy'],
            color: 'var(--primary-indigo)'
        },
        {
            title: 'Research & UX',
            icon: <Users size={22} />,
            description: 'Deeply understanding user needs and behaviors.',
            skills: ['User Interviews', 'Persona Building', 'Wireframing', 'Usability Testing', 'JTBD Framework'],
            color: 'var(--secondary-emerald)'
        },
        {
            title: 'Data & Analytics',
            icon: <BarChart2 size={22} />,
            description: 'Making informed decisions with quantitative insights.',
            skills: ['Mixpanel', 'Google Analytics', 'Amplitude', 'SQL Basics', 'Cohort Analysis'],
            color: '#F28B82'
        },
        {
            title: 'Tools & Stack',
            icon: <Terminal size={22} />,
            description: 'The technical toolkit for modern product delivery.',
            skills: ['Jira', 'Notion', 'Figma', 'Slack', 'Postman', 'Linear'],
            color: '#C58AF9'
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
                    margin-bottom: 4rem;
                    max-width: 600px;
                }

                .section-header h2 {
                    /* Inherits global h2 styles now */
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                .section-header p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    max-width: 500px;
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }

                @media (max-width: 768px) {
                    .skills-grid {
                        display: flex;
                        overflow-x: auto;
                        scroll-snap-type: x mandatory;
                        gap: 1rem;
                        padding-bottom: 1.5rem;
                        margin-right: -1.5rem;
                        padding-right: 1.5rem;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                    }

                    .skills-grid::-webkit-scrollbar {
                        display: none;
                    }
                }

                @media (min-width: 768px) {
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                .skill-card {
                    position: relative;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: 20px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .skill-card:hover {
                    transform: translateY(-4px);
                    border-color: var(--accent-color);
                    box-shadow: var(--shadow-lg);
                }

                .card-bg-glow {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 150px;
                    height: 150px;
                    background: radial-gradient(circle at top right, var(--accent-color), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                    filter: blur(30px);
                }

                .skill-card:hover .card-bg-glow {
                    opacity: 0.15;
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
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }

                .icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: var(--bg-tertiary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-primary);
                    transition: all 0.3s ease;
                    border: 1px solid var(--border-primary);
                }

                .skill-card:hover .icon-box {
                    background: var(--accent-color);
                    color: #fff;
                    border-color: var(--accent-color);
                }

                .group-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                    letter-spacing: -0.01em;
                }

                .group-description {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    line-height: 1.5;
                    flex-grow: 1;
                }

                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .skill-pill {
                    font-size: 0.85rem;
                    padding: 0.4rem 1rem;
                    border-radius: 100px;
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border-primary);
                    transition: all 0.3s ease;
                    font-weight: 500;
                }

                .skill-card:hover .skill-pill {
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-primary);
                }

                .skill-pill:hover {
                    border-color: var(--accent-color);
                    transform: translateY(-1px);
                }

                @media (max-width: 768px) {
                    .skill-card {
                        padding: 1.5rem;
                        flex: 0 0 85vw;
                        width: 85vw;
                        scroll-snap-align: start;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
