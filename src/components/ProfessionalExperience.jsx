import React from 'react';
import { Building2, Globe, ShoppingCart } from 'lucide-react';
import qportLogo from '../assets/qport_logo.jpg';

const ProfessionalExperience = () => {
    return (
        <section className="section" id="experience" style={{ paddingTop: 0 }}>
            <div className="container">
                <h3 className="animate-fade-up" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-tertiary)', marginBottom: '2rem', fontWeight: '600' }}>
                    Professional Experience
                </h3>

                <div className="experience-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* D·engage */}
                    <div className="card animate-fade-up delay-100" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', background: 'var(--bg-secondary)' }}>
                            <a href="https://dengage.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '12px',
                                    background: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqm2aMyM2LCSBWAxpEtX1ABwS93AuB_lKX_tfkteFLmQrXVsyG8o9VU9matezOk6EoQVI&usqp=CAU"
                                        alt="Dengage Logo"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }} className="hover:text-primary">
                                        D·engage
                                    </div>
                                    <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)' }}>B2B Marketing Automation / CDP</p>
                                </div>
                            </a>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontWeight: '500' }}>Remote / India</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                            <div style={{ padding: '2.5rem', borderRight: '1px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'baseline' }}>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'var(--font-display)' }}>Product Owner</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontWeight: '500' }}>Jan 2025 - Present</span>
                                </div>
                                <ul style={{ paddingLeft: '0', listStyle: 'none', color: 'var(--text-secondary)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', lineHeight: '1.6' }}>
                                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.4rem' }}>•</span>Managed backlog & roadmap for mobile squad.</li>
                                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.4rem' }}>•</span>Led sprint planning & execution with devs.</li>
                                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.4rem' }}>•</span>Researched AI content & journey features.</li>
                                </ul>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'baseline' }}>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'var(--font-display)' }}>Marketing & Support</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontWeight: '500' }}>May 2022 - Dec 2024</span>
                                </div>
                                <ul style={{ paddingLeft: '0', listStyle: 'none', color: 'var(--text-secondary)', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', lineHeight: '1.6' }}>
                                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.4rem' }}>•</span>Resolved customer issues & feedback loops.</li>
                                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.4rem' }}>•</span>Supported product team with user insights.</li>
                                    <li style={{ display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.4rem' }}>•</span>Built empathy for user pain points.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfessionalExperience;
