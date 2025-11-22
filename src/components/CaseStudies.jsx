import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, PlayCircle, BarChart, Rocket, FileText } from 'lucide-react';

const CaseStudies = () => {
    const cases = [
        {
            title: 'Hotstar UX for 55+ Users',
            icon: <PlayCircle size={20} />,
            tags: ['UX Research', 'Prototyping'],
            problem: 'Older users struggled with navigation and finding content.',
            approach: 'Analysed pain points, redesigned onboarding and viewing flows.',
            impact: 'Clearer navigation, less confusion, 2nd place in Decathlon challenge.',
            link: 'https://drive.google.com/file/d/1d02iy0TpTz6r0JhBQ5J7PKp5v5_AixgQ/view',
            pdfLink: '[HOTSTAR_PDF_URL]'
        },
        {
            title: 'Denner Analytics Setup',
            icon: <BarChart size={20} />,
            tags: ['Data Analytics', 'Mixpanel'],
            problem: 'Founders had no clear view of onboarding performance or drop-offs.',
            approach: 'Implemented Mixpanel events, built funnels, and analysed user behaviour.',
            impact: 'Identified key drop-off screens and prioritised data-backed UX changes.',
            link: '/case-studies/denner-onboarding-analytics'
        },
        {
            title: 'Qport 0→1 Build',
            icon: <Rocket size={20} />,
            tags: ['Product Management', '0 to 1'],
            problem: 'Client PRD was long, unstructured, and unclear from a user perspective.',
            approach: 'Converted PRD into a roadmap, user journeys, specs, and release plan.',
            impact: 'Delivered v1 on time, with shared understanding across dev and business.',
            link: '/case-studies/qport-0-to-1'
        }
    ];

    return (
        <section className="section" id="case-studies" style={{ position: 'relative' }}>
            <div className="container">
                <div className="animate-fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                    <h2 style={{ margin: 0 }}>Case Studies</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                    {cases.map((study, index) => (
                        <div key={index} className={`card animate-fade-up delay-${(index + 1) * 100}`} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'var(--bg-secondary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {study.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', margin: 0, fontFamily: 'var(--font-sans)', fontWeight: '600' }}>{study.title}</h3>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                                {study.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--text-secondary)',
                                        background: 'var(--bg-secondary)',
                                        padding: '0.35rem 0.75rem',
                                        borderRadius: '999px',
                                        fontWeight: '500',
                                        border: '1px solid var(--border-color)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {study.image && (
                                <div style={{
                                    width: '100%',
                                    height: '200px',
                                    background: '#111',
                                    borderRadius: '8px',
                                    marginBottom: '1.5rem',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border-color)'
                                }}>
                                    <img
                                        src={study.image}
                                        alt={`${study.title} Case Study`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            )}

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: 'auto' }}>
                                <div>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Problem</span>
                                    <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>{study.problem}</p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Approach</span>
                                    <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.6' }}>{study.approach}</p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Outcome</span>
                                    <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-primary)', fontWeight: '500', lineHeight: '1.6' }}>{study.impact}</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <Link to={study.link} style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} className="hover:text-primary">
                                    View case study <ArrowUpRight size={16} />
                                </Link>
                                {study.pdfLink && (
                                    <a href={study.pdfLink} style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }} className="hover:text-primary">
                                        View PDF <FileText size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
