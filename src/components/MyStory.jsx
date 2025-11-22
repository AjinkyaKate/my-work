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
                                My journey started in <strong>Support</strong> at <strong style={{ color: 'var(--text-primary)' }}>D·engage</strong>. I wasn't just marketing the product; I was helping businesses unlock its true value.
                            </p>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                                I helped clients tackle their <strong>technical difficulties</strong> and ensured they got the most out of our software. This hands-on experience with user pain points became my foundation for product management.
                            </p>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
                                Fast forward to Jan 2025, I stepped up as a <strong>Product Owner</strong>, building <strong style={{ color: 'var(--text-primary)' }}>Qport</strong> from 0 to 1 as a Founding PM.
                            </p>
                            <div style={{
                                padding: '1.5rem',
                                background: 'var(--bg-secondary)',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '4px solid var(--text-primary)',
                                marginBottom: '2rem'
                            }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '500', color: 'var(--text-primary)', margin: 0 }}>
                                    "I leverage AI tools daily to learn faster, prototype quicker, and ship products that actually solve problems, not just look pretty."
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
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Jan 2025 - Present</span>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Product Owner</h4>
                                <p style={{ fontSize: '1rem', margin: 0, color: 'var(--text-secondary)' }}>D·engage & Qport (Founding PM)</p>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    position: 'absolute', left: '-3.35rem', top: '0.4rem',
                                    width: '0.7rem', height: '0.7rem', borderRadius: '50%',
                                    background: 'var(--border-color)', border: '4px solid var(--bg-primary)'
                                }}></div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>2024</span>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Startup & Analytics</h4>
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
