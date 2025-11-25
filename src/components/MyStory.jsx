import React from 'react';
import { Sparkles, Quote, BookOpen, Calendar, ArrowUpRight } from 'lucide-react';

const MyStory = () => {
    return (
        <section className="section" id="my-story">
            <div className="container">
                <div className="editorial-grid">

                    {/* Left: Narrative Column */}
                    <div className="narrative-column">
                        <div className="animate-fade-up">
                            <h2 style={{ marginBottom: '2rem' }}>My Story</h2>

                            {/* AI Summary Box */}
                            <div className="ai-summary-box">
                                <div className="summary-header">
                                    <Sparkles size={16} className="text-accent" />
                                    <span>Journey Summary</span>
                                </div>
                                <p>
                                    From handling support tickets to leading product teams. A journey defined by bridging the gap between user pain points and engineering solutions.
                                </p>
                            </div>

                            <div className="narrative-content">
                                <p className="lead-paragraph">
                                    I started my career in <strong>Support & Marketing</strong> at <span className="highlight">D·engage</span>, helping customers get real value out of a complex B2B marketing automation platform.
                                </p>
                                <p>
                                    I wasn’t just answering tickets – I was seeing, daily, where the product helped and where it hurt. That frontline exposure to user pain points, edge cases, and <em>“this doesn’t work for my real workflow”</em> became my foundation for product work.
                                </p>
                                <p>
                                    I learned to translate vague complaints into clear problems and product opportunities.
                                </p>
                                <p>
                                    In 2024–25, I moved into Product. I took on a <strong>0→1 Product Owner role</strong> for <span className="highlight">Qport</span>, helping a logistics startup shape an MVP from a messy PRD. At D·engage, I’ve since stepped into a Scrum Product Owner role (CSPO®), working with cross-functional teams.
                                </p>
                            </div>

                            <div className="quote-box">
                                <Quote size={24} className="quote-icon" />
                                <p>
                                    "I use AI tools daily – to explore ideas faster, structure requirements, and iterate on documents – but the core is always the same: ship things that solve real problems."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Reference Rail (Timeline) */}
                    <div className="reference-rail animate-fade-up delay-100">
                        <div className="rail-header">
                            <BookOpen size={16} />
                            <span>Timeline Sources</span>
                        </div>

                        <div className="source-cards">
                            {/* Card 1 */}
                            <div className="source-card">
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

                            {/* Card 4 */}
                            <div className="source-card">
                                <div className="card-meta">
                                    <span className="source-number">04</span>
                                    <span className="source-date">2022 - 2024</span>
                                </div>
                                <h4>Support & Marketing</h4>
                                <p className="source-context">D·engage • MarTech</p>
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

                .ai-summary-box {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-md);
                    padding: 1.5rem;
                    margin-bottom: 2.5rem;
                    backdrop-filter: blur(10px);
                }

                .summary-header {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--text-tertiary);
                    margin-bottom: 0.75rem;
                }

                .text-accent {
                    color: var(--primary-indigo);
                }

                .ai-summary-box p {
                    margin: 0;
                    font-size: 1.05rem;
                    color: var(--text-primary);
                    font-weight: 500;
                    line-height: 1.5;
                }

                .narrative-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-secondary);
                }

                .lead-paragraph {
                    font-size: 1.25rem;
                    color: var(--text-primary);
                }

                .highlight {
                    color: var(--text-primary);
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0 0.25rem;
                    border-radius: 4px;
                }

                .quote-box {
                    margin-top: 3rem;
                    padding: 2rem;
                    background: var(--bg-secondary);
                    border-left: 4px solid var(--primary-indigo);
                    border-radius: 0 var(--radius-md) var(--radius-md) 0;
                    position: relative;
                }

                .quote-icon {
                    color: var(--text-tertiary);
                    margin-bottom: 1rem;
                    opacity: 0.5;
                }

                .quote-box p {
                    margin: 0;
                    font-size: 1.1rem;
                    font-style: italic;
                    color: var(--text-primary);
                    line-height: 1.6;
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
                }

                .source-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .source-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-md);
                    padding: 1.25rem;
                    transition: transform 0.2s ease, border-color 0.2s ease;
                    cursor: default;
                }

                .source-card:hover {
                    transform: translateX(4px);
                    border-color: var(--primary-indigo);
                }

                .card-meta {
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.75rem;
                    color: var(--text-tertiary);
                    margin-bottom: 0.5rem;
                }

                .source-number {
                    font-family: monospace;
                    opacity: 0.7;
                }

                .source-card h4 {
                    font-size: 1rem;
                    margin: 0 0 0.25rem 0;
                    color: var(--text-primary);
                }

                .source-context {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin: 0 0 1rem 0;
                }

                .card-link {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.75rem;
                    color: var(--primary-indigo);
                    opacity: 0;
                    transition: opacity 0.2s ease;
                }

                .source-card:hover .card-link {
                    opacity: 1;
                }

                @media (max-width: 968px) {
                    .editorial-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }

                    .reference-rail {
                        position: static;
                        border-left: none;
                        padding-left: 0;
                        border-top: 1px solid var(--border-primary);
                        padding-top: 3rem;
                    }

                    .source-cards {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    }
                }
            `}</style>
        </section>
    );
};

export default MyStory;
