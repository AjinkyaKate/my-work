import React, { useState } from 'react';
import { GraduationCap, Award, FileText, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import DocumentViewerModal from './DocumentViewerModal';

const Education = () => {
    const [isCertificateOpen, setIsCertificateOpen] = useState(false);

    return (
        <section className="section" id="education">
            <div className="container">
                <div className="animate-fade-up" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Education & Certifications</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        Continuous learning and professional development.
                    </p>
                </div>

                <div className="credential-grid">
                    {/* CSPO Certification */}
                    <div className="credential-card gold animate-fade-up delay-100">
                        <div className="card-top">
                            <div className="icon-badge">
                                <Award size={24} />
                            </div>
                            <div className="status-badge">
                                <CheckCircle2 size={14} /> Verified
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>CSPO® Certified Product Owner</h3>
                            <p className="institution">Scrum Alliance</p>
                            <div className="meta-info">
                                <span><Calendar size={14} /> 2025</span>
                                <span><MapPin size={14} /> Global</span>
                            </div>
                            <p className="description">
                                Advanced training in Scrum framework, backlog refinement, and maximizing product value.
                            </p>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => setIsCertificateOpen(true)} className="btn-credential">
                                <FileText size={16} /> View Certificate
                            </button>
                        </div>
                    </div>

                    {/* Growth School */}
                    <div className="credential-card emerald animate-fade-up delay-200">
                        <div className="card-top">
                            <div className="icon-badge">
                                <ZapIcon />
                            </div>
                            <div className="status-badge">
                                <CheckCircle2 size={14} /> Completed
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Product Management</h3>
                            <p className="institution">Growth School</p>
                            <div className="meta-info">
                                <span><Calendar size={14} /> 2024</span>
                                <span><MapPin size={14} /> Remote</span>
                            </div>
                            <p className="description">
                                Intensive cohort-based program covering product strategy, user research, and growth metrics.
                            </p>
                        </div>
                    </div>

                    {/* Bachelor's Degree */}
                    <div className="credential-card indigo animate-fade-up delay-300">
                        <div className="card-top">
                            <div className="icon-badge">
                                <GraduationCap size={24} />
                            </div>
                            <div className="status-badge">
                                <CheckCircle2 size={14} /> Graduated
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>Bachelor of Business Administration</h3>
                            <p className="institution">University of Pune</p>
                            <div className="meta-info">
                                <span><Calendar size={14} /> 2018 - 2021</span>
                                <span><MapPin size={14} /> Pune, India</span>
                            </div>
                            <p className="description">
                                Specialized in Business Management, Operations, and Organizational Behavior.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <DocumentViewerModal
                isOpen={isCertificateOpen}
                onClose={() => setIsCertificateOpen(false)}
                documentUrl="/CSPO_Certificate.pdf"
                documentTitle="CSPO® Certified Product Owner - Certificate"
            />

            <style jsx>{`
                .credential-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2rem;
                }

                .credential-card {
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-md);
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    transition: var(--transition);
                }

                .credential-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-md);
                }

                /* Accents */
                .credential-card.gold { border-top: 4px solid #F59E0B; }
                .credential-card.emerald { border-top: 4px solid var(--secondary-emerald); }
                .credential-card.indigo { border-top: 4px solid var(--primary-indigo); }

                .credential-card.gold .icon-badge { color: #F59E0B; background: rgba(245, 158, 11, 0.1); }
                .credential-card.emerald .icon-badge { color: var(--secondary-emerald); background: rgba(16, 185, 129, 0.1); }
                .credential-card.indigo .icon-badge { color: var(--primary-indigo); background: rgba(79, 70, 229, 0.1); }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                }

                .icon-badge {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .status-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    padding: 0.25rem 0.75rem;
                    border-radius: 999px;
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .card-content h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                    color: var(--text-primary);
                }

                .institution {
                    font-size: 1rem;
                    color: var(--text-primary);
                    font-weight: 500;
                    margin-bottom: 1rem;
                }

                .meta-info {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    font-size: 0.85rem;
                    color: var(--text-tertiary);
                }

                .meta-info span {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }

                .description {
                    font-size: 0.95rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    flex: 1;
                }

                .card-footer {
                    margin-top: auto;
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--border-primary);
                }

                .btn-credential {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    font-weight: 500;
                    color: var(--text-primary);
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: var(--transition);
                }

                .btn-credential:hover {
                    color: var(--text-accent);
                }
            `}</style>
        </section>
    );
};

// Simple Zap Icon component since it was missing in imports or just reused
const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

export default Education;
