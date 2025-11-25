import React, { useState } from 'react';
import { Mail, Linkedin, FileText, ArrowRight, FileJson, Database, Users } from 'lucide-react';
import DocumentViewerModal from './DocumentViewerModal';

const Hero = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const resumeUrl = '/Ajinkya_Kate_Resume.pdf';

    return (
        <>
            <section className="section" style={{ minHeight: '90vh', paddingTop: '0', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div className="hero-grid">

                        {/* Left: Introduction */}
                        <div className="hero-content animate-fade-up">
                            <div className="hero-badge">
                                Product Manager • 0→1 Specialist
                            </div>

                            <h1 className="hero-title">
                                Turning Ambiguity <br />
                                into <span className="text-accent">Product.</span>
                            </h1>

                            <p className="hero-subtitle">
                                I combine user empathy, data, and structured experiments to build B2B products that solve real problems.
                            </p>

                            <div className="hero-actions">
                                <button
                                    onClick={() => setIsViewerOpen(true)}
                                    className="btn btn-primary"
                                    style={{ padding: '0.8rem 1.6rem', fontSize: '1rem' }}
                                >
                                    <FileText size={20} style={{ marginRight: '0.5rem' }} />
                                    View Resume
                                </button>
                                <a href="https://linkedin.com/in/ajinkyakate" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 1.6rem', fontSize: '1rem' }}>
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Right: The Source Stack (Visual Hook) */}
                        <div className="hero-visual animate-fade-up delay-100">
                            <div className="source-stack">
                                {/* Card 3 (Bottom) */}
                                <div className="stack-card card-3">
                                    <div className="card-icon"><Database size={24} /></div>
                                    <div className="card-lines">
                                        <div className="line long"></div>
                                        <div className="line short"></div>
                                    </div>
                                    <span className="card-label">Data Models</span>
                                </div>

                                {/* Card 2 (Middle) */}
                                <div className="stack-card card-2">
                                    <div className="card-icon"><Users size={24} /></div>
                                    <div className="card-lines">
                                        <div className="line long"></div>
                                        <div className="line medium"></div>
                                    </div>
                                    <span className="card-label">User Interviews</span>
                                </div>

                                {/* Card 1 (Top) */}
                                <div className="stack-card card-1">
                                    <div className="card-header">
                                        <FileJson size={20} className="text-accent" />
                                        <span className="file-name">PRD_v1.0.md</span>
                                    </div>
                                    <div className="card-body">
                                        <div className="skeleton-block"></div>
                                        <div className="skeleton-lines">
                                            <div className="line"></div>
                                            <div className="line"></div>
                                            <div className="line short"></div>
                                        </div>
                                    </div>
                                    <div className="card-status">
                                        <div className="status-dot"></div>
                                        <span>In Progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <style jsx>{`
                .hero-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 4rem;
                    align-items: center;
                }

                .hero-content {
                    max-width: 600px;
                }

                .hero-badge {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    background: var(--bg-tertiary);
                    border: 1px solid var(--border-primary);
                    border-radius: 999px;
                    margin-bottom: 2rem;
                    fontSize: 0.9rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                }

                .hero-title {
                    margin-bottom: 1.5rem;
                    font-size: clamp(3rem, 5vw, 4.5rem);
                    line-height: 1.1;
                    letter-spacing: -0.03em;
                    color: var(--text-primary);
                    font-weight: 600;
                }

                .text-accent {
                    color: var(--accent-primary);
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    margin-bottom: 3rem;
                    line-height: 1.6;
                    max-width: 500px;
                }

                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                /* Visual Stack Styles */
                .hero-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 400px;
                    position: relative;
                }

                .source-stack {
                    position: relative;
                    width: 300px;
                    height: 360px;
                }

                .stack-card {
                    position: absolute;
                    width: 260px;
                    height: 320px;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-lg);
                    transition: transform 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    padding: 1.5rem;
                }

                .card-3 {
                    top: 40px;
                    left: 40px;
                    transform: rotate(6deg);
                    z-index: 1;
                    background: var(--bg-tertiary);
                    opacity: 0.8;
                    justify-content: center;
                    align-items: center;
                }

                .card-2 {
                    top: 20px;
                    left: 20px;
                    transform: rotate(-3deg);
                    z-index: 2;
                    background: var(--bg-tertiary);
                    opacity: 0.9;
                    justify-content: center;
                    align-items: center;
                }

                .card-1 {
                    top: 0;
                    left: 0;
                    transform: rotate(0deg);
                    z-index: 3;
                    background: var(--bg-secondary);
                    border-color: var(--accent-primary);
                }

                .hero-visual:hover .card-3 {
                    transform: rotate(12deg) translate(10px, 10px);
                }

                .hero-visual:hover .card-2 {
                    transform: rotate(-6deg) translate(-5px, 5px);
                }

                .hero-visual:hover .card-1 {
                    transform: translateY(-5px);
                    box-shadow: var(--shadow-xl);
                }

                /* Card Internals */
                .card-icon {
                    color: var(--text-tertiary);
                    margin-bottom: 1rem;
                }

                .card-label {
                    font-size: 0.9rem;
                    color: var(--text-secondary);
                    font-weight: 500;
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid var(--border-primary);
                }

                .file-name {
                    font-family: monospace;
                    font-size: 0.9rem;
                    color: var(--text-primary);
                }

                .card-body {
                    flex-grow: 1;
                }

                .skeleton-block {
                    height: 80px;
                    background: var(--bg-tertiary);
                    border-radius: var(--radius-sm);
                    margin-bottom: 1.5rem;
                }

                .skeleton-lines .line {
                    height: 8px;
                    background: var(--bg-tertiary);
                    border-radius: 4px;
                    margin-bottom: 0.75rem;
                }

                .skeleton-lines .line.short { width: 60%; }
                .skeleton-lines .line.medium { width: 80%; }

                .card-status {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.8rem;
                    color: var(--accent-primary);
                    background: rgba(79, 70, 229, 0.1);
                    padding: 0.25rem 0.75rem;
                    border-radius: 100px;
                    align-self: flex-start;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--accent-primary);
                }

                @media (max-width: 968px) {
                    .hero-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                        text-align: center;
                    }

                    .hero-content {
                        margin: 0 auto;
                    }

                    .hero-actions {
                        justify-content: center;
                    }

                    .hero-visual {
                        height: 320px;
                    }
                    
                    .source-stack {
                        transform: scale(0.9);
                    }
                }
            `}</style>

            {/* Document Viewer Modal */}
            <DocumentViewerModal
                isOpen={isViewerOpen}
                onClose={() => setIsViewerOpen(false)}
                documentUrl={resumeUrl}
                documentTitle="Ajinkya Kate - Resume.pdf"
            />
        </>
    );
};

export default Hero;
