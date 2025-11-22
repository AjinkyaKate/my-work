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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                    {/* Qport Experience */}
                    <div className="animate-fade-up delay-100" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        alignItems: 'start'
                    }}>
                        <div style={{ maxWidth: '500px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={qportLogo}
                                        alt="Qport Logo"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.75rem', margin: 0 }}>Qport</h3>
                            </div>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem'
                            }}>
                                At Qport, I stepped into a chaotic 0-to-1 environment where the logistics supply chain was fragmented and manual. My role wasn't just about writing tickets; it was about <strong>decoding the business logic</strong> of freight forwarding and translating it into a digital product.
                            </p>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)'
                            }}>
                                I led the development of the MVP, bridging the gap between non-technical stakeholders and the engineering team. By defining clear user journeys and prioritizing high-impact features, we successfully launched a platform that streamlined operations and reduced manual errors significantly.
                            </p>
                        </div>

                        <div className="glass-panel" style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--border-color)',
                            background: 'var(--surface-elevated)'
                        }}>
                            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Key Impact</h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: '#10B981',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)' }}>Launched MVP in 3 months, enabling first digital bookings.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: '#10B981',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)' }}>Reduced operational turnaround time by 40% through automation.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: '#10B981',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)' }}>Established the first product roadmap and agile processes.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Denner Experience */}
                    <div className="animate-fade-up delay-200" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem',
                        alignItems: 'start'
                    }}>
                        <div style={{ maxWidth: '500px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D4D0BAQH5yyMCUma4UA/company-logo_200_200/B4DZlNGTztGsAI-/0/1757935126497/denner_india_logo?e=2147483647&v=beta&t=b4b4zS4G8GKS5q0HqB_TplId3mA5KqhOavi0QIjGT0I"
                                        alt="Denner Logo"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.75rem', margin: 0 }}>Denner</h3>
                            </div>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem'
                            }}>
                                At Denner, I worked as an Analytics Consultant to help the founding team understand their user behavior. The challenge was moving from "gut feeling" to data-driven decision making in a fast-paced retail startup environment.
                            </p>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.7',
                                color: 'var(--text-secondary)'
                            }}>
                                I implemented Mixpanel and set up the initial tracking infrastructure. By analyzing user drop-off points in the onboarding flow, I provided actionable insights that led to immediate UX improvements and higher conversion rates.
                            </p>
                        </div>

                        <div className="glass-panel" style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--border-color)',
                            background: 'var(--surface-elevated)'
                        }}>
                            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Key Impact</h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        color: '#F97316',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)' }}>Implemented Mixpanel to track user onboarding and retention.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        color: '#F97316',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)' }}>Analyzed drop-off points to recommend high-impact UX improvements.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                    <div style={{
                                        minWidth: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: 'rgba(249, 115, 22, 0.1)',
                                        color: '#F97316',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.8rem',
                                        marginTop: '2px'
                                    }}>✓</div>
                                    <span style={{ color: 'var(--text-secondary)' }}>Established data culture for the founding team.</span>
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
