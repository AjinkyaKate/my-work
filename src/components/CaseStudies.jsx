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
                            <div className="case-bg-glow"></div>
                            <div className="gradient-border"></div>
                            <div className="case-content">
                                <div className="case-meta">
                                    <span className="meta-tag year">{study.year}</span>
                                    <span className="meta-tag category">{study.category}</span>
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
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                    border-top: none;
                }

                @media (min-width: 968px) {
                    .case-list {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                .case-item {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    padding: 2rem;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: 24px;
                    text-decoration: none;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    height: 100%;
                    overflow: hidden;
                    z-index: 1;
                }

                .case-item:hover {
                    transform: translateY(-8px);
                    border-color: transparent;
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
                }

                .case-bg-glow {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 250px;
                    height: 250px;
                    background: radial-gradient(circle at top right, var(--primary-indigo), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                    filter: blur(50px);
                    z-index: -1;
                }

                .case-item:hover .case-bg-glow {
                    opacity: 0.1;
                }

                .gradient-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 24px;
                    padding: 1px;
                    background: linear-gradient(135deg, var(--primary-indigo), var(--secondary-emerald));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                .case-item:hover .gradient-border {
                    opacity: 1;
                }

                .case-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    flex-grow: 1;
                    z-index: 2;
                }

                .case-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    font-size: 0.75rem;
                    font-family: var(--font-sans);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    font-weight: 600;
                }

                .meta-tag {
                    padding: 0.25rem 0.75rem;
                    border-radius: 100px;
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border-primary);
                    transition: all 0.3s ease;
                }

                .case-item:hover .meta-tag {
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-primary);
                    border-color: rgba(255, 255, 255, 0.1);
                }

                .meta-tag.year {
                    color: var(--primary-indigo);
                    background: rgba(0, 173, 181, 0.1);
                    border-color: rgba(0, 173, 181, 0.2);
                }

                .case-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    letter-spacing: -0.02em;
                    transition: color 0.2s ease;
                    margin: 0;
                    line-height: 1.3;
                }

                .case-description {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 0.5rem;
                }

                .case-action {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: auto;
                    opacity: 1;
                    transform: none;
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--border-primary);
                    z-index: 2;
                }

                .view-text {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .arrow-icon {
                    color: var(--primary-indigo);
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .case-item:hover .arrow-icon {
                    transform: translate(4px, -4px);
                }

                @media (max-width: 768px) {
                    .case-item {
                        padding: 1.5rem;
                    }

                    .case-title {
                        font-size: 1.35rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default CaseStudies;
