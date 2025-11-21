import React from 'react';

const MyStory = () => {
    return (
        <section className="section" id="my-story">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem' }}>

                {/* Left: Narrative */}
                <div>
                    <h2 style={{ marginBottom: '2.5rem' }}>My Story</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
                            My journey began in support and marketing at D·engage, where I learned to listen to users and understand their struggles. That curiosity drove me to explore product management, leading to hands-on work implementing analytics and improving flows at early-stage startups like Denner.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
                            In Jan 2025, I transitioned to Product Owner at D·engage, while also helping build Qport from 0 to 1 as a Founding PM. I’m currently balancing these roles while pursuing my BBA, driven by a passion for solving real problems.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.7', fontWeight: '500', color: 'var(--accent-color)' }}>
                            I leverage AI tools daily to learn faster, prototype quicker, and ship products that make a difference.
                        </p>
                    </div>
                </div>

                {/* Right: Timeline Strip - Cleaner */}
                <div style={{ position: 'relative', paddingLeft: '3rem', borderLeft: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute', left: '-3.4rem', top: '0.4rem',
                                width: '0.8rem', height: '0.8rem', borderRadius: '50%',
                                background: 'var(--accent-color)', border: '4px solid var(--bg-color)'
                            }}></div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Jan 2025 - Present</span>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Product Owner</h4>
                            <p style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-secondary)' }}>D·engage & Qport (Founding PM)</p>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute', left: '-3.4rem', top: '0.4rem',
                                width: '0.8rem', height: '0.8rem', borderRadius: '50%',
                                background: 'var(--border-color)', border: '4px solid var(--bg-color)'
                            }}></div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>2024</span>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Startup & Analytics</h4>
                            <p style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-secondary)' }}>Denner (Housing Startup)</p>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute', left: '-3.4rem', top: '0.4rem',
                                width: '0.8rem', height: '0.8rem', borderRadius: '50%',
                                background: 'var(--border-color)', border: '4px solid var(--bg-color)'
                            }}></div>
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>2022 - 2024</span>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Support & Marketing</h4>
                            <p style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-secondary)' }}>D·engage</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default MyStory;
