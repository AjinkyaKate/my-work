import React, { useState } from 'react';
import { GraduationCap, Award, FileText, CheckCircle2, Calendar, MapPin, Zap } from 'lucide-react';
import DocumentViewerModal from './DocumentViewerModal';

const Education = () => {
    const [isCertificateOpen, setIsCertificateOpen] = useState(false);

    const credentials = [
        {
            title: 'CSPO® Certified Product Owner',
            institution: 'Scrum Alliance',
            year: '2025',
            location: 'Global',
            description: 'Advanced training in Scrum framework, backlog refinement, sprint planning, and maximizing product value delivery.',
            icon: <Award size={24} />,
            status: 'Verified',
            color: 'var(--secondary-emerald)',
            hasCertificate: true
        },
        {
            title: 'Product Management Bootcamp',
            institution: 'Growth School',
            year: '2024',
            location: 'Remote',
            description: 'Intensive cohort-based program covering product strategy, user research, PRD writing, and growth metrics.',
            icon: <Zap size={24} />,
            status: 'Completed',
            color: 'var(--secondary-emerald)',
            hasCertificate: false
        },
        {
            title: 'BBA - Business Analytics',
            institution: 'Savitribai Phule Pune University',
            year: 'Graduated',
            location: 'Pune, India',
            description: 'Bachelor of Business Administration with specialization in Business Analytics, covering data analysis, operations, and strategic management.',
            icon: <GraduationCap size={24} />,
            status: 'Completed',
            color: 'var(--primary-indigo)',
            hasCertificate: false
        }
    ];

    return (
        <section className="section" id="education">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <h2>Education & Certifications</h2>
                    <p>Continuous learning and professional development.</p>
                </div>

                <div className="credential-grid">
                    {credentials.map((cred, index) => (
                        <div
                            key={index}
                            className={`credential-card animate-fade-up delay-${(index + 1) * 100}`}
                            style={{ '--accent-color': cred.color }}
                        >
                            <div className="card-bg-glow"></div>
                            <div className="card-content">
                                <div className="card-top">
                                    <div className="icon-box">
                                        {cred.icon}
                                    </div>
                                    <div className="status-badge">
                                        <CheckCircle2 size={12} /> {cred.status}
                                    </div>
                                </div>

                                <div className="card-main">
                                    <h3 className="credential-title">{cred.title}</h3>
                                    <p className="institution">{cred.institution}</p>

                                    <div className="meta-info">
                                        <span><Calendar size={14} /> {cred.year}</span>
                                        <span><MapPin size={14} /> {cred.location}</span>
                                    </div>

                                    <p className="description">
                                        {cred.description}
                                    </p>
                                </div>

                                {cred.hasCertificate && (
                                    <div className="card-footer">
                                        <button onClick={() => setIsCertificateOpen(true)} className="btn-credential">
                                            <FileText size={16} /> View Certificate
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <DocumentViewerModal
                isOpen={isCertificateOpen}
                onClose={() => setIsCertificateOpen(false)}
                documentUrl="/CSPO_Certificate.pdf"
                documentTitle="CSPO® Certified Product Owner - Certificate"
            />

            <style jsx>{`
                .section-header {
                    margin-bottom: 4rem;
                    max-width: 600px;
                }

                .section-header h2 {
                    /* Inherits global h2 styles */
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                }

                .section-header p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    max-width: 500px;
                }

                .credential-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem; /* Increased gap */
                }

                @media (min-width: 968px) {
                    .credential-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                .credential-card {
                    position: relative;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: var(--radius-lg); /* 32px */
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                }

                .credential-card:hover {
                    transform: translateY(-6px);
                    border-color: var(--accent-color);
                    box-shadow: var(--shadow-xl);
                }

                .card-bg-glow {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle at top right, var(--accent-color), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                    filter: blur(40px);
                }

                .credential-card:hover .card-bg-glow {
                    opacity: 0.15;
                }

                .card-content {
                    position: relative;
                    padding: 2.5rem; /* Increased padding */
                    z-index: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.5rem;
                }

                .icon-box {
                    width: 56px;
                    height: 56px;
                    border-radius: 16px;
                    background: var(--bg-tertiary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-primary);
                    transition: all 0.3s ease;
                    border: 1px solid var(--border-primary);
                }

                .credential-card:hover .icon-box {
                    background: var(--accent-color);
                    color: #fff;
                    border-color: var(--accent-color);
                }

                .status-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-size: 0.8rem;
                    font-weight: 600;
                    padding: 0.4rem 0.8rem;
                    border-radius: 100px;
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    border: 1px solid var(--border-primary);
                    transition: all 0.3s ease;
                }

                .credential-card:hover .status-badge {
                    border-color: var(--accent-color);
                    color: var(--text-primary);
                    background: rgba(255, 255, 255, 0.05);
                }

                .card-main {
                    flex-grow: 1;
                }

                .credential-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0 0 0.5rem 0;
                    line-height: 1.3;
                    letter-spacing: -0.01em;
                }

                .institution {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                }

                .meta-info {
                    display: flex;
                    gap: 1.25rem;
                    margin-bottom: 2rem;
                    font-size: 0.9rem;
                    color: var(--text-tertiary);
                }

                .meta-info span {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .description {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                }

                .card-footer {
                    margin-top: auto;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }

                .btn-credential {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: var(--text-primary);
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    transition: var(--transition);
                    opacity: 0.8;
                }

                .btn-credential:hover {
                    opacity: 1;
                    color: var(--accent-color);
                    transform: translateX(4px);
                }
            `}</style>
        </section>
    );
};

export default Education;
