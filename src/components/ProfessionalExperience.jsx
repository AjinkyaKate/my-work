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
                            <div className="experience-content" style={{ borderRight: '1px solid var(--border-color)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'var(--font-display)' }}>Product Owner</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontWeight: '500', whiteSpace: 'nowrap' }}>Jan 2025 - Present</span>
                                </div>
                                <ul style={{ paddingLeft: '0', listStyle: 'none', color: 'var(--text-secondary)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.5' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.2rem' }}>•</span>Own the Shopify coupon engine & integration slice of the product in a CSPO-style Scrum setup.</li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.2rem' }}>•</span>Manage backlog, write user stories, and align Sprint Goals with product goals.</li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.2rem' }}>•</span>Lead sprint planning, daily scrums, and reviews with a 2-dev team, using Jira as the single source of truth.</li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.2rem' }}>•</span>Work closely with the Turkey-based team (UI/backend) to define clear APIs and handoffs.</li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.2rem' }}>•</span>Partner with Sales/CS to turn customer requests into structured product problems and experiments.</li>
                                </ul>
                            </div>
                            <div className="experience-content">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'var(--font-display)' }}>Marketing & Support</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', fontWeight: '500', whiteSpace: 'nowrap' }}>May 2022 - Dec 2024</span>
                                </div>
                                <ul style={{ paddingLeft: '0', listStyle: 'none', color: 'var(--text-secondary)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.5' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.2rem' }}>•</span>Resolved customer issues across multiple regions, closing the loop between users and product.</li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.2rem' }}>•</span>Supported product discovery with real-world user feedback and usage patterns.</li>
                                    <li style={{ display: 'flex', gap: '0.5rem' }}><span style={{ color: 'var(--text-primary)', marginTop: '0.2rem' }}>•</span>Created marketing journeys and campaigns, building empathy for both marketer and end-user.</li>
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
