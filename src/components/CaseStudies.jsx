import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, PlayCircle, BarChart, Rocket, FileText, Target, Zap } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            title: 'Hotstar UX for 55+ Users',
            icon: <PlayCircle size={24} />,
            tags: ['UX Research', 'Prototyping'],
            role: 'UX Researcher',
            problem: 'Older users struggled with navigation and finding content due to complex UI patterns.',
            impact: 'Clearer navigation, less confusion, 2nd place in Decathlon challenge.',
            link: '/case-studies/hotstar-55-plus',
            pdfLink: 'https://drive.google.com/file/d/1d02iy0TpTz6r0JhBQ5J7PKp5v5_AixgQ/view?usp=share_link',
            color: 'var(--primary-indigo)'
        },
        {
            title: 'Denner Analytics Setup',
            icon: <BarChart size={24} />,
            tags: ['Data Analytics', 'Mixpanel'],
            role: 'Analytics Partner',
            problem: 'Founders had no clear view of onboarding performance or drop-offs.',
            impact: 'Identified key drop-off screens and prioritised data-backed UX changes.',
            link: '/case-studies/denner-onboarding-analytics',
            color: '#F28B82'
        },
        {
            title: 'Qport 0→1 Build',
            icon: <Rocket size={24} />,
            tags: ['Product Management', '0 to 1'],
            role: 'Product Owner',
            problem: 'Client PRD was long, unstructured, and unclear from a user perspective.',
            impact: 'Delivered v1 on time, with shared understanding across dev and business.',
            link: '/case-studies/qport-0-to-1',
            color: 'var(--secondary-emerald)'
        }
    ];

    return (
        <section className="section" id="case-studies">
            <div className="container">
                <div className="animate-fade-up" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Selected Work</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        Solving real problems with data and design.
                    </p>
                </div>

                <div className="case-study-grid">
                    {cases.map((study, index) => (
                        <div key={index} className={`case-card animate-fade-up delay-${(index + 1) * 100}`}>
                            <div className="card-main">
                                <div className="card-header">
                                    <div className="icon-box" style={{ color: study.color, borderColor: study.color }}>
                                        {study.icon}
                                    </div>
                                    <div className="header-text">
                                        <h3>{study.title}</h3>
                                        <span className="role-badge">{study.role}</span>
                                    </div>
                                    {study.pdfLink && (
                                        <a href={study.pdfLink} target="_blank" rel="noopener noreferrer" className="pdf-link" title="View PDF">
                                            <FileText size={18} />
                                        </a>
                                    )}
                                </div>

                                <div className="card-body">
                                    <div className="info-block">
                                        <span className="label"><Target size={12} /> Challenge</span>
                                        <p>{study.problem}</p>
                                    </div>

                                    <div className="info-block impact">
                                        <span className="label"><Zap size={12} className="text-emerald" /> Impact</span>
                                        <p>{study.impact}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer">
                                <Link to={study.link} className="view-link">
                                    View Case Study <ArrowUpRight size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .case-study-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2rem;
                }

                .case-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s ease;
                    height: 100%;
                }

                .case-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                    border-color: var(--border-focus);
                }

                .card-main {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .card-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                }

                .icon-box {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: var(--bg-tertiary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid;
                    flex-shrink: 0;
                }

                .header-text {
                    flex-grow: 1;
                }

                .header-text h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0 0 0.25rem 0;
                    color: var(--text-primary);
                }

                .role-badge {
                    font-size: 0.8rem;
                    color: var(--text-secondary);
                    font-family: monospace;
                    background: var(--bg-tertiary);
                    padding: 0.1rem 0.5rem;
                    border-radius: 4px;
                }

                .pdf-link {
                    color: var(--text-tertiary);
                    transition: color 0.2s;
                }

                .pdf-link:hover {
                    color: var(--text-primary);
                }

                .card-body {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .info-block {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.5;
                }

                .info-block.impact {
                    color: var(--text-primary);
                }

                .label {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-tertiary);
                    margin-bottom: 0.25rem;
                    font-weight: 600;
                }

                .card-footer {
                    padding: 1rem 1.5rem;
                    border-top: 1px solid var(--border-primary);
                    background: var(--bg-tertiary);
                    display: flex;
                    justify-content: flex-end;
                }

                .view-link {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.85rem;
                    font-weight: 500;
                    color: var(--text-primary);
                    transition: color 0.2s;
                }

                .view-link:hover {
                    color: var(--primary-indigo);
                }

                @media (max-width: 768px) {
                    .case-study-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default CaseStudies;
