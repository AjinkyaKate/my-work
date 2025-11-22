import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Linkedin, Mail, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "I build simple, data-informed products with a startup mindset.";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 30);
        return () => clearInterval(timer);
    }, []);

    const features = [
        { icon: <Sparkles size={20} />, label: '0→1 Products', color: '#C5B8E5' },
        { icon: <Target size={20} />, label: 'B2B SaaS', color: '#B8D5C5' },
        { icon: <TrendingUp size={20} />, label: 'Analytics', color: '#E5C5B8' },
        { icon: <Zap size={20} />, label: 'AI Features', color: '#B8E5D5' }
    ];

    return (
        <section className="section hero" style={{
            padding: '8rem 0 10rem',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Soft Pastel Gradient Orbs */}
            <div style={{
                position: 'absolute',
                top: '5%',
                right: '10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(197, 184, 229, 0.25) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                animation: 'float 8s ease-in-out infinite',
                zIndex: 0
            }} />

            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(184, 213, 197, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(70px)',
                animation: 'float 10s ease-in-out infinite reverse',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid" style={{
                    gridTemplateColumns: '1.3fr 0.7fr',
                    alignItems: 'center',
                    gap: '5rem'
                }}>
                    {/* Left Column */}
                    <div >
                        {/* Badge */}
                        <div className="animate-in" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1.25rem',
                            background: 'rgba(197, 184, 229, 0.08)',
                            border: '1px solid rgba(197, 184, 229, 0.2)',
                            borderRadius: '999px',
                            marginBottom: '2rem',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <Sparkles size={16} style={{ color: '#C5B8E5' }} />
                            <span style={{
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                background: 'var(--gradient-primary)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '0.02em'
                            }}>
                                Product Owner / Product Manager
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="animate-in delay-100" style={{
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(135deg, #FFFFFF 0%, #A8A8B8 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            Ajinkya Kate
                        </h1>

                        {/* Typing Animation Tagline */}
                        <p className="animate-in delay-200" style={{
                            fontSize: '1.75rem',
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            marginBottom: '1.5rem',
                            lineHeight: '1.3',
                            minHeight: '2.5rem'
                        }}>
                            {typedText}
                            <span style={{
                                display: 'inline-block',
                                width: '3px',
                                height: '1.5rem',
                                background: 'var(--gradient-primary)',
                                marginLeft: '4px',
                                animation: 'pulse 1s ease-in-out infinite',
                                verticalAlign: 'middle'
                            }} />
                        </p>

                        <p className="animate-in delay-300" style={{
                            fontSize: '1.15rem',
                            marginBottom: '3rem',
                            maxWidth: '600px',
                            lineHeight: '1.7',
                            color: 'var(--text-secondary)'
                        }}>
                            B2B SaaS specialist with early-stage startup experience. AI-native workflow, bridging business goals and engineering reality.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex animate-in delay-400" style={{
                            gap: '1.25rem',
                            marginBottom: '3.5rem',
                            flexWrap: 'wrap'
                        }}>
                            <a href="#case-studies" className="btn btn-primary glow">
                                View case studies <ArrowRight size={18} />
                            </a>
                            <a href="https://your-portfolio.com/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                Download resume <Download size={18} />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex animate-in delay-500" style={{ gap: '1.5rem' }}>
                            <a
                                href="mailto:ajinkyakate2001@gmail.com"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-secondary)',
                                    transition: 'var(--transition)',
                                    backdropFilter: 'blur(10px)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ajinkya-kate/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--text-secondary)',
                                    transition: 'var(--transition)',
                                    backdropFilter: 'blur(10px)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Enhanced Bento Grid */}
                    <div className="animate-in delay-300" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div className="glass" style={{
                            width: '100%',
                            maxWidth: '450px',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2.5rem',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1.25rem',
                            position: 'relative',
                            boxShadow: 'var(--shadow-glow)'
                        }}>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`animate-in delay-${400 + index * 100}`}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        padding: '1.75rem 1.5rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem',
                                        transition: 'var(--transition)',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.borderColor = feature.color;
                                        e.currentTarget.style.boxShadow = `0 8px 32px ${feature.color}40`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Gradient Overlay on Hover */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                                        opacity: 0.6
                                    }} />

                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: 'var(--radius-sm)',
                                        background: `${feature.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: feature.color,
                                        border: `1px solid ${feature.color}30`
                                    }}>
                                        {feature.icon}
                                    </div>
                                    <span style={{
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        color: 'var(--text-primary)',
                                        letterSpacing: '-0.01em'
                                    }}>
                                        {feature.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
