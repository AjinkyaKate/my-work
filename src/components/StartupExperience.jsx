import React from 'react';
import { Rocket, Home } from 'lucide-react';

const StartupExperience = () => {
    return (
        <section className="section" id="experience" style={{ position: 'relative' }}>
            {/* Subtle Background Blob */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '-20%',
                width: '500px',
                height: '500px',
                background: 'var(--gradient-glow)',
                filter: 'blur(80px)',
                zIndex: -1,
                opacity: 0.5
            }} />

            <h2 className="animate-in" style={{ marginBottom: '3rem' }}>Startup & Product Experience</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>

                {/* Qport Card */}
                <div className="card animate-in delay-100" style={{ background: 'rgba(255,255,255,0.8)', borderColor: 'rgba(100, 102, 133, 0.15)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                        <a href="https://qport.quickdili.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none', color: 'inherit' }} title="Visit Qport">
                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'background 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                <Rocket size={20} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.1rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>Qport</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: '500' }}>Founding Product Manager (Part-time)</span>
                            </div>
                        </a>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, listStyle: 'none', marginBottom: '0', flex: 1 }}>
                        <li style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            Turned a client PRD into a roadmap and user journeys.
                        </li>
                        <li style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            Wrote product specs and docs for the dev team.
                        </li>
                        <li style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            Coordinated end-to-end delivery as the single PM.
                        </li>
                    </ul>
                </div>

                {/* Denner Card */}
                <div className="card animate-in delay-200" style={{ background: 'rgba(255,255,255,0.8)', borderColor: 'rgba(100, 102, 133, 0.15)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                        <a href="[Denner official site URL placeholder]" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '1rem', alignItems: 'center', textDecoration: 'none', color: 'inherit' }} title="Visit Denner">
                            <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'background 0.2s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                                <Home size={20} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.1rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>Denner</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Product & Analytics Contributor (Part-time)</span>
                            </div>
                        </a>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, listStyle: 'none', marginBottom: '0', flex: 1 }}>
                        <li style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            Implemented Mixpanel tracking for key in-app events.
                        </li>
                        <li style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            Designed onboarding funnels to understand drop-offs.
                        </li>
                        <li style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            Proposed UX / flow changes based on analytics.
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default StartupExperience;
