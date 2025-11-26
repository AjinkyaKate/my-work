import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            title: 'Hotstar UX for 55+ Users',
            category: 'UX Research & Prototyping',
            description: 'Redesigning the streaming experience for older adults to improve accessibility and content discovery.',
            link: '/case-studies/hotstar-55-plus',
            year: '2024'
        },
        {
            title: 'Denner Analytics Setup',
            category: 'Data Analytics',
            description: 'Implementing comprehensive product analytics to track user onboarding and retention metrics.',
            link: '/case-studies/denner-onboarding-analytics',
            year: '2023'
        },
        {
            title: 'Qport 0→1 Build',
            category: 'Product Management',
            description: 'Leading the end-to-end development of a logistics platform from concept to first release.',
            link: '/case-studies/qport-0-to-1',
            year: '2023'
        }
    ];

    return (
        <section className="section" id="case-studies">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2>Projects That Made an Impact</h2>
                    <p>Real-world solutions built from the ground up</p>
                </div>

                <div className="case-list">
                    {cases.map((study, index) => (
                        <Link
                            to={study.link}
                            key={index}
                            className={`case-item animate-fade-up delay-${(index + 1) * 100}`}
                        >
                            <div className="case-content">
                                <div className="case-meta">
                                    <span className="case-year">{study.year}</span>
                                    <span className="case-category">{study.category}</span>
                                </div>
                                <h3 className="case-title">{study.title}</h3>
                                <p className="case-description">{study.description}</p>
                            </div>
                            <div className="case-action">
                                <span className="view-text">View Case Study</span>
                                <ArrowUpRight size={20} className="arrow-icon" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .section-header {
                    margin-bottom: 4rem;
                }

                .section-header h2 {
                    /* Inherit global h2 styles */
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                .case-list {
                    display: flex;
                    flex-direction: column;
                    border-top: 1px solid var(--border-secondary);
                }

                .case-item {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 2rem;
                    padding: 3rem 0;
                    border-bottom: 1px solid var(--border-secondary);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    group: hover;
                }

                .case-item:hover .case-title {
                    color: var(--primary-indigo);
                }

                .case-item:hover .arrow-icon {
                    transform: translate(2px, -2px);
                    color: var(--primary-indigo);
                }

                .case-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 800px;
                }

                .case-meta {
                    display: flex;
                    gap: 1rem;
                    font-size: 0.875rem;
                    color: var(--text-tertiary);
                    font-family: var(--font-sans);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .case-title {
                    font-size: 2.5rem;
                    font-weight: 500;
                    color: var(--text-primary);
                    letter-spacing: -0.02em;
                    transition: color 0.2s ease;
                    margin: 0.5rem 0;
                }

                .case-description {
                    font-size: 1.125rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    max-width: 600px;
                }

                .case-action {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    padding-top: 0.5rem;
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: all 0.3s ease;
                }

                .case-item:hover .case-action {
                    opacity: 1;
                    transform: translateX(0);
                }

                .view-text {
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: var(--text-primary);
                }

                .arrow-icon {
                    color: var(--text-primary);
                    transition: transform 0.2s ease, color 0.2s ease;
                }

                @media (max-width: 768px) {
                    .case-item {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                        padding: 2rem 0;
                    }

                    .case-title {
                        font-size: 1.75rem;
                    }

                    .case-action {
                        opacity: 1;
                        transform: none;
                        padding-top: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default CaseStudies;
