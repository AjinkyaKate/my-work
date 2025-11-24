import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <section className="section" id="education">
            <div className="container">
                <div className="animate-fade-up" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Education & Certifications</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        Continuous learning and professional development.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* CSPO */}
                    <div className="card animate-fade-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>CSPO® Certified Product Owner</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Scrum Alliance - 2025</p>
                            </div>
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Trained under Narasimha Reddy Bommaka (CST) with focus on Scrum framework, product backlog refinement, Sprint planning, and maximising product value.
                            </p>
                        </div>
                    </div>

                    {/* Growth School */}
                    <div className="card animate-fade-up delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Growth School</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Product Management</p>
                            </div>
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Intensive program covering product strategy, user research, and growth metrics. Mentored by industry leaders.
                            </p>
                        </div>
                    </div>

                    {/* Bachelor's Degree */}
                    <div className="card animate-fade-up delay-300" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Bachelor of Business Administration</h3>
                                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Business & Management</p>
                            </div>
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Foundation in business strategy, operations, and organizational behavior.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
