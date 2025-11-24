import React from 'react';
import {
    Code,
    Layout,
    Database,
    BarChart2,
    Users,
    Zap,
    CheckCircle2,
    Globe,
    MessageSquare,
    Figma,
    Slack,
    Trello
} from 'lucide-react';

const Skills = () => {
    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="animate-fade-up" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Skills & Expertise</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        A comprehensive toolkit for building and scaling digital products.
                    </p>
                </div>

                <div className="bento-grid">
                    {/* Product Skills */}
                    <div className="bento-card animate-fade-up delay-100">
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }}>
                                <Zap size={24} />
                            </div>
                            <h3>Product Skills</h3>
                        </div>
                        <ul className="feature-list">
                            <li><CheckCircle2 size={18} className="text-primary" /> Agile / Scrum (CSPO®)</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> Backlog Management</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> User Story Writing</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> Stakeholder Management</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> Product Discovery</li>
                        </ul>
                    </div>

                    {/* Research & UX */}
                    <div className="bento-card animate-fade-up delay-200">
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                                <Users size={24} />
                            </div>
                            <h3>Research & UX</h3>
                        </div>
                        <ul className="feature-list">
                            <li><CheckCircle2 size={18} className="text-primary" /> User Research & Interviews</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> Persona Building & JTBD</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> UX Flows & Wireframes</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> Usability Testing</li>
                        </ul>
                    </div>

                    {/* Data & Analytics */}
                    <div className="bento-card animate-fade-up delay-300">
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>
                                <BarChart2 size={24} />
                            </div>
                            <h3>Data & Analytics</h3>
                        </div>
                        <div className="pill-container">
                            {['Mixpanel', 'Google Analytics', 'Amplitude', 'Funnels', 'Cohort Analysis', 'Retention', 'SQL Basics', 'Metabase', 'Tableau'].map((tool) => (
                                <span key={tool} className="pill">{tool}</span>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Platforms */}
                    <div className="bento-card animate-fade-up delay-100">
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
                                <Layout size={24} />
                            </div>
                            <h3>Tools & Platforms</h3>
                        </div>
                        <div className="tech-grid">
                            {[
                                { name: 'Jira', icon: <Layout size={16} /> },
                                { name: 'Confluence', icon: <Database size={16} /> },
                                { name: 'Notion', icon: <Database size={16} /> },
                                { name: 'Slack', icon: <Slack size={16} /> },
                                { name: 'Postman', icon: <Globe size={16} /> },
                                { name: 'Figma', icon: <Figma size={16} /> }
                            ].map((tech) => (
                                <div key={tech.name} className="tech-item">
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                }
                .bento-card {
                    padding: 1.5rem;
                    border-radius: var(--radius-lg);
                    background: var(--surface-color);
                    border: 1px solid var(--border-color);
                    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                }
                .bento-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--border-hover);
                }
                .bento-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }
                .bento-card:hover::before {
                    opacity: 1;
                }
                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                .card-header h3 {
                    font-size: 1.25rem;
                    margin: 0;
                }
                .icon-wrapper {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                    gap: 1rem;
                }
                .tech-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    background: var(--bg-secondary);
                    border-radius: var(--radius-md);
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    border: 1px solid transparent;
                }
                .tech-item:hover {
                    background: var(--surface-elevated);
                    border-color: var(--border-hover);
                    transform: translateY(-2px);
                }
                .feature-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .feature-list li {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 1rem;
                    color: var(--text-secondary);
                }
                .text-primary {
                    color: var(--text-primary);
                }
                .pill-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }
                .pill {
                    font-size: 0.85rem;
                    padding: 0.5rem 1rem;
                    background: var(--bg-secondary);
                    color: var(--text-primary);
                    border-radius: 999px;
                    border: 1px solid var(--border-color);
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
                .pill:hover {
                    border-color: var(--text-secondary);
                    background: var(--surface-elevated);
                }
                @media (min-width: 768px) {
                    .bento-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
