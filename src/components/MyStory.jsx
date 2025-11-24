import React from 'react';

const MyStory = () => {
    return (
        <section className="section" id="my-story">
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem' }}>

                    {/* Left: Narrative */}
                    <div>
                        <h2 className="animate-fade-up" style={{ marginBottom: '2.5rem' }}>My Story</h2>
                        <div className="animate-fade-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                                I started my career in <strong>Support & Marketing</strong> at <strong style={{ color: 'var(--text-primary)' }}>D·engage</strong>, helping customers get real value out of a complex B2B marketing automation platform. I wasn’t just answering tickets – I was seeing, daily, where the product helped and where it hurt.
                            </p>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                                That frontline exposure to user pain points, edge cases, and “this doesn’t work for my real workflow” became my foundation for product work. I learned to translate vague complaints into clear problems and product opportunities.
                            </p>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                                In 2024–25, I moved into Product. I took on a 0→1 Product Owner role for <strong style={{ color: 'var(--text-primary)' }}>Qport</strong>, helping a logistics startup shape an MVP from a messy PRD. At D·engage, I’ve since stepped into a Scrum Product Owner role (CSPO®), working with cross-functional teams (Dev, Design, Stakeholders) and running sprints around features like Shopify coupon engine & integrations.
                            </p>
                            <div style={{
                                padding: '1.5rem',
                                background: 'var(--bg-secondary)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '4px solid var(--text-primary)',
                                marginBottom: '2rem'
                            }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500', color: 'var(--text-primary)', margin: 0 }}>
                                    "I use AI tools daily – to explore ideas faster, structure requirements, and iterate on documents – but the core is always the same: ship things that solve real problems, not just look pretty in a deck."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Timeline Strip */}
                    <div className="animate-fade-up delay-200" style={{ position: 'relative', paddingLeft: '3rem', borderLeft: '1px solid var(--border-color)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', left: '-3.35rem', top: '0.4rem',
                                    width: '0.7rem', height: '0.7rem', borderRadius: '50%',
                                    background: 'var(--text-primary)', border: '4px solid var(--bg-primary)'
                                }}></div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Aug 2025 - Present</span>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Founding PM</h4>
                                <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-secondary)' }}>Qport</p>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', left: '-3.35rem', top: '0.4rem',
                                    width: '0.7rem', height: '0.7rem', borderRadius: '50%',
                                    background: 'var(--text-primary)', border: '4px solid var(--bg-primary)'
                                }}></div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Jan 2025 - Present</span>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Product Owner</h4>
                                <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-secondary)' }}>D·engage</p>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', left: '-3.35rem', top: '0.4rem',
                                    width: '0.7rem', height: '0.7rem', borderRadius: '50%',
                                    background: 'var(--border-color)', border: '4px solid var(--bg-primary)'
                                }}></div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>2024</span>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Analytics & Product</h4>
                                <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-secondary)' }}>Denner (Housing Startup)</p>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', left: '-3.35rem', top: '0.4rem',
                                    width: '0.7rem', height: '0.7rem', borderRadius: '50%',
                                    background: 'var(--border-color)', border: '4px solid var(--bg-primary)'
                                }}></div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>2022 - 2024</span>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Support & Marketing</h4>
                                <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-secondary)' }}>D·engage</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MyStory;
