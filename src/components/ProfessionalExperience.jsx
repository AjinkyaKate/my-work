import React from 'react';
import { Building2 } from 'lucide-react';

const ProfessionalExperience = () => {
    return (
        <section className="section" style={{ paddingTop: 0 }}>
            <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)', marginBottom: '2rem' }}>
                Professional Experience
            </h3>

            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                {/* Company Header */}
                <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <a href="https://www.dengage.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(197, 184, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-lavender)', border: '1px solid rgba(197, 184, 229, 0.2)' }}>
                            <Building2 size={20} />
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>
                                D·engage
                            </div>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>B2B Marketing Automation / CDP</p>
                        </div>
                    </a>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Remote / India</span>
                </div>

                {/* Roles */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                    {/* Role 1 */}
                    <div style={{ padding: '2rem', borderRight: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'baseline' }}>
                            <h4 style={{ fontSize: '1.1rem' }}>Product Owner</h4>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Jan 2025 - Present</span>
                        </div>
                        <ul style={{ paddingLeft: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.5' }}>
                            <li>Managed backlog & roadmap for mobile squad.</li>
                            <li>Led sprint planning & execution with devs.</li>
                            <li>Researched AI content & journey features.</li>
                        </ul>
                    </div>

                    {/* Role 2 */}
                    <div style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'baseline' }}>
                            <h4 style={{ fontSize: '1.1rem' }}>Marketing & Support</h4>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>May 2022 - Dec 2024</span>
                        </div>
                        <ul style={{ paddingLeft: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.5' }}>
                            <li>Resolved customer issues & feedback loops.</li>
                            <li>Supported product team with user insights.</li>
                            <li>Built empathy for user pain points.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfessionalExperience;
