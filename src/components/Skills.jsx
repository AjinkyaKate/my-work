import React from 'react';
import {
    Layout,
    Database,
    BarChart2,
    Users,
    Zap,
    CheckCircle2,
    Globe,
    Figma,
    Slack,
    Cpu,
    Search,
    Terminal
} from 'lucide-react';

const Skills = () => {
    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="animate-fade-up" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Skills & Expertise</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        A comprehensive toolkit for building and scaling digital products.
                    </p>
                </div>

                <div className="bento-grid">
                    {/* Product Strategy & Management */}
                    <div className="bento-card animate-fade-up delay-100" style={{ gridColumn: 'span 2' }}>
                        <div className="card-header">
                            <div className="icon-badge indigo">
                                <Zap size={20} />
                            </div>
                            <h3>Product Strategy</h3>
                        </div>
                        <div className="checklist-grid">
                            {[
                                'Agile / Scrum (CSPO®)',
                                'Product Discovery',
                                'Roadmap Planning',
                                'Stakeholder Management',
                                'User Story Mapping',
                                'GTM Strategy'
                            ].map((item, i) => (
                                <div key={i} className="checklist-item">
                                    <CheckCircle2 size={16} className="check-icon text-emerald" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Research & UX */}
                    <div className="bento-card animate-fade-up delay-200">
                        <div className="card-header">
                            <div className="icon-badge emerald">
                                <Users size={20} />
                            </div>
                            <h3>Research & UX</h3>
                        </div>
                        <div className="tags-container">
                            {['User Interviews', 'Persona Building', 'Wireframing', 'Usability Testing', 'JTBD Framework'].map((tag, i) => (
                                <span key={i} className="skill-tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Data & Analytics */}
                    <div className="bento-card animate-fade-up delay-300">
                        <div className="card-header">
                            <div className="icon-badge orange">
                                <BarChart2 size={20} />
                            </div>
                            <h3>Data & Analytics</h3>
                        </div>
                        <div className="tags-container">
                            {['Mixpanel', 'Google Analytics', 'Amplitude', 'SQL Basics', 'Cohort Analysis', 'Funnel Optimization'].map((tag, i) => (
                                <span key={i} className="skill-tag">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Technical & Tools */}
                    <div className="bento-card animate-fade-up delay-400" style={{ gridColumn: 'span 2' }}>
                        <div className="card-header">
                            <div className="icon-badge purple">
                                <Terminal size={20} />
                            </div>
                            <h3>Tools & Stack</h3>
                        </div>
                        <div className="tools-grid">
                            {[
                                { name: 'Jira', icon: <Layout size={18} /> },
                                { name: 'Notion', icon: <Database size={18} /> },
                                { name: 'Figma', icon: <Figma size={18} /> },
                                { name: 'Slack', icon: <Slack size={18} /> },
                                { name: 'Postman', icon: <Globe size={18} /> },
                                { name: 'Linear', icon: <Cpu size={18} /> }
                            ].map((tool, i) => (
                                <div key={i} className="tool-item">
                                    <div className="tool-icon">{tool.icon}</div>
                                    <span>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bento-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }

                @media (min-width: 768px) {
                    .bento-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                .bento-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-md);
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    transition: var(--transition);
                }

                .bento-card:hover {
                    border-color: var(--primary-indigo);
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .card-header h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin: 0;
                    color: var(--text-primary);
                }

                .icon-badge {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .icon-badge.indigo { background: rgba(79, 70, 229, 0.1); color: var(--primary-indigo); }
                .icon-badge.emerald { background: rgba(16, 185, 129, 0.1); color: var(--secondary-emerald); }
                .icon-badge.orange { background: rgba(252, 173, 112, 0.1); color: #FCAD70; }
                .icon-badge.purple { background: rgba(197, 138, 249, 0.1); color: #C58AF9; }

                /* Checklist Grid */
                .checklist-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                @media (min-width: 640px) {
                    .checklist-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                .checklist-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                }

                .check-icon {
                    color: var(--secondary-emerald);
                    flex-shrink: 0;
                }

                /* Tags */
                .tags-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .skill-tag {
                    font-size: 0.85rem;
                    padding: 0.4rem 1rem;
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    border-radius: 999px;
                    font-weight: 500;
                    transition: var(--transition);
                }

                .skill-tag:hover {
                    color: var(--text-primary);
                    background: var(--border-primary);
                }

                /* Tools Grid */
                .tools-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                    gap: 1rem;
                }

                .tool-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1rem;
                    background: var(--bg-tertiary);
                    border-radius: 12px;
                    transition: var(--transition);
                    border: 1px solid transparent;
                }

                .tool-item:hover {
                    background: var(--bg-secondary);
                    border-color: var(--primary-indigo);
                    transform: translateY(-2px);
                }

                .tool-icon {
                    color: var(--text-primary);
                }

                .tool-item span {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                }
            `}</style>
        </section>
    );
};

export default Skills;
