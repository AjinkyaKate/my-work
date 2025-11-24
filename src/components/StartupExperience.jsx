import React from 'react';
import { Rocket, Target, Zap, ArrowRight } from 'lucide-react';
import qportLogo from '../assets/qport_logo.jpg';

const StartupExperience = () => {
    return (
        <section className="section" id="startup-experience">
            <div className="container">
                <div className="animate-fade-up" style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Startup & Product Journey</h2>
                    <p style={{ maxWidth: '600px', color: 'var(--text-secondary)' }}>
                        Building from 0 to 1 and scaling with impact.
                    </p>
                </div>

                <div className="flex-col" style={{ gap: '6rem' }}>

                    {/* Qport Experience */}
                    <div className="animate-fade-up delay-100" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'start'
                    }}>
                        <div style={{ maxWidth: '500px' }}>
                            <div className="flex-center" style={{
                                justifyContent: 'flex-start',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div className="flex-center" style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: '#fff',
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    <img
                                        src={qportLogo}
                                        alt="Qport Logo"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.75rem', margin: 0, lineHeight: 1 }}>Qport</h3>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Product Manager • 0-1 Build</span>
                                </div>
                            </div>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem'
                            }}>
                                At Qport, I entered a fragmented, manual logistics environment. My job was to turn a long, unstructured PRD into a usable product.
                            </p>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)'
                            }}>
                                I translated a document-heavy PRD into user journeys, feature specs, and a phased roadmap. I bridged communication between non-technical stakeholders and engineering, and prioritised features based on operational impact and feasibility.
                            </p>
                        </div>

                        <div className="glass-panel" style={{
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(22, 22, 22, 0.6)'
                        }}>
                            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>Key Impact</h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem'
                            }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div className="flex-center" style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: '#10B981',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Launched the MVP in ~3 months, enabling the first digital bookings.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div className="flex-center" style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: '#10B981',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Reduced operational turnaround time by ~40% through workflow automation.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div className="flex-center" style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: '#10B981',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Set up the initial agile rhythm (sprints, backlog, ceremonies) for the product team.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Denner Experience */}
                    <div className="animate-fade-up delay-200" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'start'
                    }}>
                        <div style={{ maxWidth: '500px' }}>
                            <div className="flex-center" style={{
                                justifyContent: 'flex-start',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div className="flex-center" style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: '#fff',
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D4D0BAQH5yyMCUma4UA/company-logo_200_200/B4DZlNGTztGsAI-/0/1757935126497/denner_india_logo?e=2147483647&v=beta&t=b4b4zS4G8GKS5q0HqB_TplId3mA5KqhOavi0QIjGT0I"
                                        alt="Denner Logo"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.75rem', margin: 0, lineHeight: 1 }}>Denner</h3>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>Analytics Consultant • Growth</span>
                                </div>
                            </div>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem'
                            }}>
                                At Denner, my role was to move the founding team from gut-feel to data-driven decisions.
                            </p>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)'
                            }}>
                                I implemented Mixpanel and defined an event schema for onboarding, search, and booking flows. I built funnels to identify drop-off points and friction areas, and partnered with founders to prioritise UX improvements based on real user behaviour.
                            </p>
                        </div>

                        <div className="glass-panel" style={{
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(22, 22, 22, 0.6)'
                        }}>
                            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-tertiary)' }}>Key Impact</h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem'
                            }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div className="flex-center" style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        color: '#F97316',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Implemented Mixpanel to track user onboarding and retention.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div className="flex-center" style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        color: '#F97316',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Identified key drop-off screens and recommended specific changes.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div className="flex-center" style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        color: '#F97316',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Helped instil an early data culture in the team.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StartupExperience;
