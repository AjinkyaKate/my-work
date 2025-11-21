import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
    return (
        <section className="section" id="education">
            <h2 style={{ marginBottom: '3rem' }}>Education & Certifications</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>

                {/* Education Card */}
                <div className="card" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                            <GraduationCap size={20} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>Bachelor of Business Administration (BBA)</h3>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Savitribai Phule Pune University, Pune</p>
                        </div>
                    </div>
                </div>

                {/* Certifications Card */}
                <div className="card" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                            <Award size={20} />
                        </div>
                        <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Certifications</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                                <h4 style={{ fontSize: '1rem' }}>Certified Scrum Product Owner</h4>
                                <a href="[SCRUM_CERT_URL]" className="text-gradient" style={{ fontSize: '0.8rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                                    View certificate <ExternalLink size={12} />
                                </a>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Scrum Alliance</p>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                                <h4 style={{ fontSize: '1rem' }}>Product Management Bootcamp</h4>
                                <a href="[GROWTH_SCHOOL_CERT_URL]" className="text-gradient" style={{ fontSize: '0.8rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                                    View certificate <ExternalLink size={12} />
                                </a>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Growth School</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
