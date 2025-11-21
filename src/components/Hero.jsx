import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, Box, Layers, Zap, BarChart3 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section hero" style={{ padding: '6rem 0 8rem', position: 'relative', overflow: 'hidden' }}>
            {/* Subtle Background Gradient Blob */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'var(--gradient-glow)',
                filter: 'blur(80px)',
                zIndex: -1,
                opacity: 0.6
            }} />

            <div className="grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '4rem' }}>

                {/* Left Column: Copy */}
                <div className="animate-in">
                    <div style={{
                        display: 'inline-block',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        background: 'var(--gradient-accent)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        Product Owner / Product Manager
                    </div>
                    <h1 style={{ marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                        Ajinkya Kate
                    </h1>
                    <p style={{ fontSize: '1.5rem', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.3', letterSpacing: '-0.02em' }}>
                        I build simple, data-informed products with a startup mindset.
                    </p>
                    <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '540px', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
                        B2B SaaS specialist with early-stage startup experience. AI-native workflow, bridging business goals and engineering reality.
                    </p>

                    <div className="flex" style={{ gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
                        <a href="#case-studies" className="btn btn-primary">
                            View case studies <ArrowRight size={16} />
                        </a>
                        <a href="https://your-portfolio.com/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Download resume <Download size={16} />
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex" style={{ gap: '1.25rem' }}>
                        <a href="mailto:ajinkyakate2001@gmail.com" style={{ color: 'var(--text-tertiary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-tertiary)'}>
                            <Mail size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ajinkya-kate/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-tertiary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-tertiary)'}>
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Column: Glassmorphic Bento Card */}
                <div className="animate-in delay-200" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="glass" style={{
                        width: '100%',
                        maxWidth: '420px',
                        borderRadius: '24px',
                        padding: '2rem',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                        position: 'relative'
                    }}>
                        {/* Card 1 */}
                        <div style={{ background: 'rgba(255,255,255,0.8)', padding: '1.25rem', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5E6AD2' }}>
                                <Layers size={18} />
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>0→1 Products</span>
                        </div>

                        {/* Card 2 */}
                        <div style={{ background: 'rgba(255,255,255,0.8)', padding: '1.25rem', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8B5CF6' }}>
                                <Box size={18} />
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>B2B SaaS</span>
                        </div>

                        {/* Card 3 */}
                        <div style={{ background: 'rgba(255,255,255,0.8)', padding: '1.25rem', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06B6D4' }}>
                                <BarChart3 size={18} />
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Analytics</span>
                        </div>

                        {/* Card 4 */}
                        <div style={{ background: 'rgba(255,255,255,0.8)', padding: '1.25rem', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EC4899' }}>
                                <Zap size={18} />
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>AI Features</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
