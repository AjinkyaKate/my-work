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
                    {/* Tech Stack */}
                    <div className="bento-card animate-fade-up delay-100">
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }}>
                                <Layout size={24} />
                            </div>
                            <h3>Tech Stack</h3>
                        </div>
                        <div className="tech-grid">
                            {[
                                { name: 'Jira', icon: <Layout size={16} /> },
                                { name: 'Figma', icon: <Figma size={16} /> },
                                { name: 'Slack', icon: <Slack size={16} /> },
                                { name: 'Notion', icon: <Database size={16} /> },
                                { name: 'Confluence', icon: <Database size={16} /> },
                                { name: 'Postman', icon: <Globe size={16} /> }
                            ].map((tech) => (
                                <div key={tech.name} className="tech-item">
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Methods & Certs */}
                    <div className="bento-card animate-fade-up delay-200">
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                                <Zap size={24} />
                            </div>
                            <h3>Methods</h3>
                        </div>
                        <ul className="feature-list">
                            <li><CheckCircle2 size={18} className="text-primary" /> Agile Methodologies</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> Design Thinking</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> User Research & Persona Building</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> Stakeholder Management</li>
                            <li><CheckCircle2 size={18} className="text-primary" /> Product Strategy</li>
                        </ul>
                    </div>

                    {/* Analytics */}
                    <div className="bento-card animate-fade-up delay-300">
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>
                                <BarChart2 size={24} />
                            </div>
                            <h3>Analytics</h3>
                        </div>
                        <div className="pill-container">
                            {['Mixpanel', 'Google Analytics', 'Amplitude', 'SQL', 'Metabase', 'Tableau'].map((tool) => (
                                <span key={tool} className="pill">{tool}</span>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="bento-card animate-fade-up delay-100" style={{ gridColumn: 'span 2' }}>
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
                                <Users size={24} />
                            </div>
                            <h3>Leadership</h3>
                        </div>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Driving cross-functional collaboration and empowering teams to deliver their best work.
                        </p>
                        <div className="pill-container">
                            {['Team Building', 'Mentorship', 'Conflict Resolution', 'Strategic Communication', 'Public Speaking'].map((skill) => (
                                <span key={skill} className="pill">{skill}</span>
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
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }
                .bento-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--border-hover);
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
                    transition: background 0.2s;
                }
                .tech-item:hover {
                    background: var(--bg-primary);
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
