import React from 'react';
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
            link: '[HOTSTAR_CASE_STUDY_URL]',
            pdfLink: '[HOTSTAR_PDF_URL]'
        },
        {
            title: 'Denner Analytics Setup',
            icon: <BarChart size={20} />,
            tags: ['Data Analytics', 'Mixpanel'],
            problem: 'Founders had no clear view of onboarding performance or drop-offs.',
            approach: 'Implemented Mixpanel events, built funnels, and analysed user behaviour.',
            impact: 'Identified key drop-off screens and prioritised data-backed UX changes.',
            link: '[DENNER_CASE_STUDY_URL]'
        },
        {
            title: 'Qport 0→1 Build',
            icon: <Rocket size={20} />,
            tags: ['Product Management', '0 to 1'],
            problem: 'Client PRD was long, unstructured, and unclear from a user perspective.',
            approach: 'Converted PRD into a roadmap, user journeys, specs, and release plan.',
            impact: 'Delivered v1 on time, with shared understanding across dev and business.',
            link: '[QPORT_CASE_STUDY_URL]'
        }
    ];

    return (
        <section className="section" id="case-studies" style={{ position: 'relative' }}>
            {/* Subtle Background Blob */}
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                right: '-20%',
                width: '600px',
                height: '600px',
                background: 'var(--gradient-glow)',
                filter: 'blur(100px)',
                zIndex: -1,
                opacity: 0.4
            }} />

            <div className="animate-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                <h2 style={{ margin: 0 }}>Selected Case Studies</h2>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {cases.map((study, index) => (
                    <div key={index} className={`card animate-in delay-${(index + 1) * 100}`} style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(197, 184, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-lavender)', border: '1px solid rgba(197, 184, 229, 0.2)' }}>
                                    {study.icon}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{study.title}</h3>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            {study.tags.map((tag, i) => (
                                <span key={i} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', background: 'rgba(255, 255, 255, 0.05)', padding: '0.25rem 0.6rem', borderRadius: '6px', fontWeight: '500', border: '1px solid rgba(255, 255, 255, 0.08)' }}>{tag}</span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                            <div>
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.25rem' }}>Problem</span>
                                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.4' }}>{study.problem}</p>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.25rem' }}>Approach</span>
                                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)', lineHeight: '1.4' }}>{study.approach}</p>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.25rem' }}>Outcome</span>
                                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-primary)', fontWeight: '500', lineHeight: '1.4' }}>{study.impact}</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <a href={study.link} style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                                View case study <ArrowUpRight size={14} />
                            </a>
                            {study.pdfLink && (
                                <a href={study.pdfLink} style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                                    View PDF <FileText size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudies;
