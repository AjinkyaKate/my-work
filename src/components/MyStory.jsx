import React from 'react';
import { Sparkles, Quote, BookOpen, Calendar, ArrowUpRight, Zap } from 'lucide-react';

const MyStory = () => {
    return (
        <section className="section" id="my-story">
            <div className="container">
                <div className="editorial-grid">

                    {/* Left: Narrative Column */}
                    <div className="narrative-column">
                        <div className="animate-fade-up">
                            <h2 className="section-title">My Story</h2>

                            {/* AI Summary Box */}
                            <div className="ai-summary-box">
                                <div className="gradient-accent"></div>
                                <div className="summary-header">
                                    <div className="sparkle-icon">
                                        <Sparkles size={18} />
                                    </div>
                                    <span>Journey Summary</span>
                                </div>
                                <p>
                                    A journey defined by bridging the gap between user pain points and engineering solutions.
                                </p>
                            </div>

                            {/* Decorative Divider */}
                            <div className="section-divider">
                                <div className="divider-line"></div>
                                <Zap size={16} className="divider-icon" />
                                <div className="divider-line"></div>
                            </div>

                            <div className="narrative-content">
                                <p className="drop-cap">
                                    In 2024–25, I moved into Product. I took on a <strong>0→1 Product Owner role</strong> for <span className="highlight">Qport</span>, helping a logistics startup shape an MVP from a messy PRD. At D·engage, I've since stepped into a Scrum Product Owner role (CSPO®), working with cross-functional teams.
                                </p>
                            </div>

                            {/* Enhanced Quote Box */}
                            <div className="quote-box">
                                <div className="quote-backdrop"></div>
                                <Quote size={64} className="quote-icon-large" />
                                <p>
                                    "I use AI tools daily – to explore ideas faster, structure requirements, and iterate on documents – but the core is always the same: ship things that solve real problems."
                                </p>
                                <div className="quote-attribution">
                                    <div className="attribution-line"></div>
                                    <span>My productivity philosophy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Reference Rail (Timeline) */}
                    <div className="reference-rail animate-fade-up delay-100">
                        <div className="rail-header">
                            <BookOpen size={16} />
                            <span>Timeline Sources</span>
                        </div>

                        {/* Timeline Line */}
                        <div className="timeline-line-vertical"></div>

                        <div className="source-cards">
                            {/* Card 1 */}
                            <div className="source-card">
                                <div className="timeline-dot"></div>
                                <div className="card-meta">
                                    <span className="source-number">01</span>
                                    <span className="source-date">Aug 2025 - Present</span>
                                </div>
                                <h4>Founding PM</h4>
                                <p className="source-context">Qport • Logistics Tech</p>
                                <div className="card-link">
                                    <span>View Context</span>
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="source-card">
                                <div className="timeline-dot"></div>
                                <div className="card-meta">
                                    <span className="source-number">02</span>
                                    <span className="source-date">Jan 2025 - Present</span>
                                </div>
                                <h4>Product Owner</h4>
                                <p className="source-context">D·engage • MarTech</p>
                                <div className="card-link">
                                    <span>View Context</span>
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="source-card">
                                <div className="timeline-dot"></div>
                                <div className="card-meta">
                                    <span className="source-number">03</span>
                                    <span className="source-date">2024</span>
                                </div>
                                <h4>Analytics & Product</h4>
                                <p className="source-context">Denner • Housing Startup</p>
                                <div className="card-link">
                                    <span>View Context</span>
                                    <ArrowUpRight size={14} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                .editorial-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 6rem;
                    align-items: start;
                }

                /* Narrative Column */
                .narrative-column {
                    position: relative;
                }

                .narrative-column h2 {
                    color: var(--text-primary);
                    margin-bottom: 3rem;
                    position: relative;
                }

                .narrative-column h2::after {
                    content: '';
                    position: absolute;
                    bottom: -1rem;
                    left: 0;
                    width: 60px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--accent-primary), transparent);
                }

                /* Enhanced AI Summary Box */
                .ai-summary-box {
                    position: relative;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-lg);
                    padding: 2.5rem;
                    margin-bottom: 3rem;
                    box-shadow: var(--shadow-lg);
                    overflow: hidden;
                }

                .gradient-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, var(--accent-primary), var(--secondary-emerald));
                }

                .summary-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-tertiary);
                    margin-bottom: 1.5rem;
                }

                .sparkle-icon {
                    width: 32px;
                    height: 32px;
                    background: rgba(79, 70, 229, 0.1);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--accent-primary);
                }

                .ai-summary-box p {
                    margin: 0;
                    font-size: 1.3rem;
                    color: var(--text-primary);
                    font-weight: 500;
                    line-height: 1.6;
                }

                /* Decorative Divider */
                .section-divider {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin: 3rem 0;
                }

                .divider-line {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(90deg, var(--border-primary), transparent);
                }

                .divider-icon {
                    color: var(--accent-primary);
                    opacity: 0.5;
                }

                /* Drop Cap */
                .narrative-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                    margin-bottom: 3rem;
                }

                .drop-cap::first-letter {
                    float: left;
                    font-size: 4rem;
                    line-height: 1;
                    font-weight: 700;
                    margin: 0 0.1em 0 0;
                    color: var(--accent-primary);
                }

                .highlight {
                    color: var(--text-primary);
                    background: rgba(79, 70, 229, 0.1);
                    padding: 0.1rem 0.4rem;
                    border-radius: 4px;
                    font-weight: 600;
                }

                /* Enhanced Quote Box */
                .quote-box {
                    position: relative;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-lg);
                    padding: 3.5rem 3rem;
                    box-shadow: var(--shadow-xl);
                    border-left: 4px solid var(--secondary-emerald);
                    overflow: hidden;
                }

                .quote-backdrop {
                    position: absolute;
                    top: -50%;
                    right: -20%;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
                    pointer-events: none;
                }

                .quote-icon-large {
                    color: var(--secondary-emerald);
                    margin-bottom: 1.5rem;
                    display: block;
                    opacity: 0.3;
                }

                .quote-box p {
                    margin: 0 0 2rem 0;
                    font-size: 1.3rem;
                    font-style: italic;
                    color: var(--text-primary);
                    line-height: 1.7;
                    font-weight: 400;
                    position: relative;
                }

                .quote-attribution {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .attribution-line {
                    width: 40px;
                    height: 2px;
                    background: var(--secondary-emerald);
                }

                .quote-attribution span {
                    font-size: 0.9rem;
                    color: var(--text-tertiary);
                    font-style: normal;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                /* Reference Rail */
                .reference-rail {
                    position: sticky;
                    top: 2rem;
                    border-left: 1px solid var(--border-primary);
                    padding-left: 3rem;
                }

                .rail-header {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-tertiary);
                    margin-bottom: 2rem;
                    font-weight: 600;
                }

                /* Timeline Line for Rail */
                .timeline-line-vertical {
                    position: absolute;
                    left: 0;
                    top: 4rem;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, var(--accent-primary), transparent);
                    opacity: 0.3;
                }

                .source-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    position: relative;
                }

                .source-card {
                    position: relative;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-md);
                    padding: 1.5rem;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .source-card:hover {
                    transform: translateX(8px);
                    border-color: var(--accent-primary);
                    box-shadow: var(--shadow-md);
                }

                /* Timeline Dots */
                .timeline-dot {
                    position: absolute;
                    left: -3.55rem;
                    top: 1.75rem;
                    width: 12px;
                    height: 12px;
                    background: var(--accent-primary);
                    border-radius: 50%;
                    border: 3px solid var(--bg-primary);
                    z-index: 2;
                    transition: all 0.3s ease;
                }

                .source-card:hover .timeline-dot {
                    transform: scale(1.3);
                    box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
                }

                .card-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.75rem;
                    color: var(--text-tertiary);
                    margin-bottom: 0.75rem;
                }

                .source-number {
                    font-family: monospace;
                    font-weight: 700;
                    color: var(--accent-primary);
                    background: rgba(79, 70, 229, 0.1);
                    padding: 0.2rem 0.5rem;
                    border-radius: 4px;
                }

                .source-date {
                    font-weight: 500;
                }

                .source-card h4 {
                    font-size: 1.1rem;
                    margin: 0 0 0.5rem 0;
                    color: var(--text-primary);
                    font-weight: 600;
                }

                .source-context {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    margin: 0 0 1rem 0;
                }

                .card-link {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-size: 0.8rem;
                    color: var(--accent-primary);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    font-weight: 500;
                }

                .source-card:hover .card-link {
                    opacity: 1;
                }

                @media (max-width: 968px) {
                    .editorial-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }

                    .drop-cap::first-letter {
                        font-size: 3rem;
                    }

                    .reference-rail {
                        position: static;
                        border-left: none;
                        padding-left: 2rem;
                        border-top: 1px solid var(--border-primary);
                        padding-top: 3rem;
                    }

                    .timeline-line-vertical {
                        left: 0;
                    }

                    .timeline-dot {
                        left: -2.55rem;
                    }

                    .source-cards {
                        padding-left: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default MyStory;
