import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyLayout = ({ title, oneLiner, sidebar, children, keyLearnings }) => {
    return (
        <div style={{ paddingTop: '6rem' }}>
            {/* Back Button */}
            <div className="container" style={{ marginBottom: '2rem' }}>
                <Link
                    to="/#case-studies"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        transition: 'var(--transition)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.transform = 'translateX(-4px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.transform = 'translateX(0)';
                    }}
                >
                    <ArrowLeft size={18} /> Back to case studies
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container" style={{ marginBottom: '4rem' }}>
                <div className="animate-in">
                    <h1 style={{ marginBottom: '1rem' }}>{title}</h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '800px',
                        lineHeight: '1.6'
                    }}>
                        {oneLiner}
                    </p>
                </div>
            </section>

            {/* Main Content - 2 Column Layout */}
            <section className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 320px',
                    gap: '4rem',
                    alignItems: 'start'
                }} className="case-study-grid">
                    {/* Main Story Content */}
                    <div className="animate-in delay-100">
                        {children}

                        {/* Key Learnings */}
                        {keyLearnings && (
                            <div style={{
                                marginTop: '4rem',
                                paddingTop: '3rem',
                                borderTop: '1px solid var(--border-color)'
                            }}>
                                <h2 style={{ marginBottom: '1.5rem' }}>Key learnings</h2>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem'
                                }}>
                                    {keyLearnings.map((learning, index) => (
                                        <li key={index} style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            alignItems: 'start'
                                        }}>
                                            <span style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: 'var(--accent-lavender)',
                                                flexShrink: 0,
                                                marginTop: '0.6rem'
                                            }} />
                                            <span style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                                {learning}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="animate-in delay-200">
                        <div className="glass-light" style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius-md)',
                            position: 'sticky',
                            top: 'calc(var(--header-height) + 2rem)'
                        }}>
                            {Object.entries(sidebar).map(([key, value]) => (
                                <div key={key} style={{ marginBottom: '1.5rem' }}>
                                    <div style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        color: 'var(--text-tertiary)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {key}
                                    </div>
                                    <div style={{
                                        fontSize: '0.95rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.6'
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
                @media (max-width: 768px) {
                    .case-study-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .case-study-grid > div:last-child {
                        order: -1;
                    }
                }
            `}</style>
        </div>
    );
};

// Section Component
export const Section = ({ title, children }) => (
    <div style={{ marginBottom: '3rem' }}>
        <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
        }}>
            {title}
        </h2>
        <div style={{
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            fontSize: '1.05rem'
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
        gap: '0.75rem'
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
                    background: 'var(--accent-lavender)',
                    flexShrink: 0,
                    marginTop: '0.6rem'
                }} />
                <span style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    fontSize: '1.05rem'
                }}>
                    {item}
                </span>
            </li>
        ))}
    </ul>
);

export default CaseStudyLayout;
