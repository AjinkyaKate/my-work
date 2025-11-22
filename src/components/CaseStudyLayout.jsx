import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyLayout = ({ title, oneLiner, sidebar, children, keyLearnings }) => {
    return (
        <div style={{ paddingTop: '8rem', background: 'var(--bg-primary)' }}>
            {/* Back Button */}
            <div className="container" style={{ marginBottom: '3rem' }}>
                <Link
                    to="/#case-studies"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s',
                        fontWeight: '500'
                    }}
                    className="hover:text-primary"
                >
                    <ArrowLeft size={18} /> Back to case studies
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container" style={{ marginBottom: '5rem' }}>
                <div className="animate-fade-up">
                    <h1 style={{
                        marginBottom: '1.5rem',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        lineHeight: '1.1'
                    }}>
                        {title}
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '900px',
                        lineHeight: '1.5',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: '300'
                    }}>
                        {oneLiner}
                    </p>
                </div>
            </section>

            {/* Main Content - 2 Column Layout */}
            <section className="container" style={{ paddingBottom: '8rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 300px',
                    gap: '6rem',
                    alignItems: 'start'
                }} className="case-study-grid">
                    {/* Main Story Content */}
                    <div className="animate-fade-up delay-100">
                        {children}

                        {/* Key Learnings */}
                        {keyLearnings && (
                            <div style={{
                                marginTop: '6rem',
                                paddingTop: '4rem',
                                borderTop: '1px solid var(--border-color)'
                            }}>
                                <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Key learnings</h2>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'grid',
                                    gap: '1.5rem'
                                }}>
                                    {keyLearnings.map((learning, index) => (
                                        <li key={index} style={{
                                            display: 'flex',
                                            gap: '1.25rem',
                                            alignItems: 'start'
                                        }}>
                                            <span style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: 'var(--bg-secondary)',
                                                color: 'var(--text-primary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                flexShrink: 0,
                                                marginTop: '0.1rem'
                                            }}>
                                                {index + 1}
                                            </span>
                                            <span style={{
                                                color: 'var(--text-secondary)',
                                                lineHeight: '1.7',
                                                fontSize: '1.1rem'
                                            }}>
                                                {learning}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="animate-fade-up delay-200">
                        <div style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius-md)',
                            position: 'sticky',
                            top: 'calc(var(--header-height) + 2rem)',
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)'
                        }}>
                            {Object.entries(sidebar).map(([key, value]) => (
                                <div key={key} style={{ marginBottom: '2rem' }}>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: 'var(--text-tertiary)',
                                        marginBottom: '0.75rem'
                                    }}>
                                        {key}
                                    </div>
                                    <div style={{
                                        fontSize: '1rem',
                                        color: 'var(--text-primary)',
                                        lineHeight: '1.5',
                                        fontWeight: '500'
                                    }}>
                                        {value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @media (max-width: 968px) {
                    .case-study-grid {
                        grid-template-columns: 1fr !important;
                        gap: 4rem !important;
                    }
                    .case-study-grid > div:last-child {
                        order: -1;
                        margin-bottom: 2rem;
                    }
                }
                .hover\\:text-primary:hover {
                    color: var(--text-primary) !important;
                }
            `}</style>
        </div>
    );
};

// Section Component
export const Section = ({ title, children }) => (
    <div style={{ marginBottom: '4rem' }}>
        <h2 style={{
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
        }}>
            {title}
        </h2>
        <div style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            fontSize: '1.125rem'
        }}>
            {children}
        </div>
    </div>
);

// Bullet List Component
export const BulletList = ({ items }) => (
    <ul style={{
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '1.5rem'
    }}>
        {items.map((item, index) => (
            <li key={index} style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'start'
            }}>
                <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--text-primary)',
                    flexShrink: 0,
                    marginTop: '0.7rem'
                }} />
                <span style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    fontSize: '1.125rem'
                }}>
                    {item}
                </span>
            </li>
        ))}
    </ul>
);

export default CaseStudyLayout;
