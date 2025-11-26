```
import React from 'react';
import { ArrowUpRight, Calendar, Users, TrendingUp } from 'lucide-react';
import qportLogo from '../assets/qport_logo.jpg';

const StartupExperience = () => {
    return (
        <section className="section" id="startup-experience">
            <div className="container">
                <div className="header-content animate-fade-up">
                    <h2 className="section-title">Startup Journey</h2>
                    <p className="section-subtitle">
                        Building 0→1 products and scaling with impact.
                    </p>
                </div>

                <div className="experience-grid">
                    {/* Qport Card */}
                    <div className="experience-card animate-fade-up delay-100">
                        <div className="card-header">
                            <div className="brand-row">
                                <div className="logo-wrapper">
                                    <img src={qportLogo} alt="Qport" />
                                </div>
                                <div className="brand-info">
                                    <h3>Qport</h3>
                                    <span className="role-text">Product Manager • 0-1 Build</span>
                                </div>
                                <a href="#" className="arrow-link" aria-label="Visit Qport">
                                    <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="section-block">
                                <span className="label">MISSION</span>
                                <p className="mission-text">
                                    Turn a fragmented, manual logistics environment into a seamless digital product.
                                </p>
                            </div>

                            <div className="section-block">
                                <span className="label">KEY IMPACT</span>
                                <ul className="impact-list">
                                    <li>Launched MVP in ~3 months</li>
                                    <li>Reduced turnaround time by ~40%</li>
                                    <li>Established Agile processes</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card-footer">
                            <div className="meta-item">
                                <Calendar size={16} />
                                <span>2021 - 2023</span>
                            </div>
                            <div className="meta-item">
                                <Users size={16} />
                                <span>10-50 Employees</span>
                            </div>
                        </div>
                    </div>

                    {/* Denner Card */}
                    <div className="experience-card animate-fade-up delay-200">
                        <div className="card-header">
                            <div className="brand-row">
                                <div className="logo-wrapper">
                                    <img src="https://media.licdn.com/dms/image/v2/D4D0BAQH5yyMCUma4UA/company-logo_200_200/B4DZlNGTztGsAI-/0/1757935126497/denner_india_logo?e=2147483647&v=beta&t=b4b4zS4G8GKS5q0HqB_TplId3mA5KqhOavi0QIjGT0I" alt="Denner" />
                                </div>
                                <div className="brand-info">
                                    <h3>Denner</h3>
                                    <span className="role-text">Analytics Consultant • Growth</span>
                                </div>
                                <a href="#" className="arrow-link" aria-label="Visit Denner">
                                    <ArrowUpRight size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="section-block">
                                <span className="label">MISSION</span>
                                <p className="mission-text">
                                    Move the founding team from gut-feel to data-driven decisions.
                                </p>
                            </div>

                            <div className="section-block">
                                <span className="label">KEY IMPACT</span>
                                <ul className="impact-list">
                                    <li>Implemented Mixpanel tracking</li>
                                    <li>Identified key drop-off screens</li>
                                    <li>Instilled early data culture</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card-footer">
                            <div className="meta-item">
                                <Calendar size={16} />
                                <span>2020 - 2021</span>
                            </div>
                            <div className="meta-item">
                                <TrendingUp size={16} />
                                <span>Growth Stage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
    .header - content {
    margin - bottom: 4rem;
}

                .section - title {
    font - size: clamp(2.5rem, 5vw, 4rem);
    font - weight: 700;
    margin: 0;
    letter - spacing: -0.02em;
    color: #FFFFFF;
}
                .section - subtitle {
    font - size: 1.1rem;
    color: var(--text - secondary);
    margin: 0;
    max - width: 600px;
}

                .experience - grid {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(400px, 1fr));
    gap: 2rem;
}

                .experience - card {
    background: #1E293B; /* Deep Slate Blue/Grey */
    border - radius: 24px;
    padding: 3rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box - shadow 0.3s ease, border - color 0.3s ease;
    display: flex;
    flex - direction: column;
    height: 100 %;
}

                .experience - card:hover {
    transform: translateY(-6px);
    box - shadow: 0 20px 40px - 10px rgba(0, 0, 0, 0.4);
    border - color: rgba(34, 211, 238, 0.3); /* Cyan glow */
}

                /* Header */
                .card - header {
    margin - bottom: 2.5rem;
}

                .brand - row {
    display: flex;
    align - items: center;
    gap: 1.25rem;
}

                .logo - wrapper {
    width: 64px;
    height: 64px;
    background: #fff;
    border - radius: 16px;
    padding: 4px;
    flex - shrink: 0;
}

                .logo - wrapper img {
    width: 100 %;
    height: 100 %;
    object - fit: cover;
    border - radius: 12px;
}

                .brand - info {
    flex - grow: 1;
}

                .brand - info h3 {
    font - size: 1.75rem;
    font - weight: 700;
    color: #FFFFFF;
    margin: 0 0 0.25rem 0;
    letter - spacing: -0.01em;
}

                .role - text {
    font - size: 0.95rem;
    color: #22d3ee; /* Cyan/Teal Accent */
    font - weight: 500;
}

                .arrow - link {
    color: var(--text - tertiary);
    transition: color 0.2s ease, transform 0.2s ease;
    padding: 0.5rem;
}

                .experience - card: hover.arrow - link {
    color: #FFFFFF;
    transform: translate(2px, -2px);
}

                /* Body */
                .card - body {
    flex - grow: 1;
    display: flex;
    flex - direction: column;
    gap: 2.5rem;
    margin - bottom: 3rem;
}

                .section - block {
    display: flex;
    flex - direction: column;
    gap: 0.75rem;
}

                .label {
    font - size: 0.75rem;
    text - transform: uppercase;
    letter - spacing: 0.1em;
    color: var(--text - tertiary);
    font - weight: 600;
}

                .mission - text {
    font - size: 1.1rem;
    line - height: 1.6;
    color: var(--text - secondary);
    margin: 0;
}

                .impact - list {
    list - style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex - direction: column;
    gap: 0.75rem;
}

                .impact - list li { /* Bullet point style */
    position: relative;
    padding - left: 1.25rem;
    color: var(--text - secondary);
    font - size: 1rem;
    line - height: 1.5;
}

                .impact - list li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #22d3ee; /* Cyan Accent */
    font - size: 1.2rem;
    line - height: 1.5;
}

                /* Footer */
                .card - footer {
    padding - top: 1.5rem;
    border - top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    gap: 2rem;
    color: var(--text - tertiary);
    font - size: 0.9rem;
    font - weight: 500;
}

                .meta - item {
    display: flex;
    align - items: center;
    gap: 0.5rem;
}

@media(max - width: 768px) {
                    .header - content {
        display: flex;
        flex - direction: column;
        gap: 1rem;
        margin - bottom: 4rem;
    }
                    
                    .section - subtitle {
        text - align: left;
    }

                    .experience - grid {
        grid - template - columns: 1fr;
    }

                    .experience - card {
        padding: 2rem;
    }
}
`}</style>
        </section>
    );
};

export default StartupExperience;
```
