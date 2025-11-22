import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';
import DocumentViewerModal from './DocumentViewerModal';

const Hero = () => {
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const resumeUrl = '/Ajinkya_Kate_Resume.pdf';

    return (
        <>
            <section className="section" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                paddingTop: '0'
            }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="animate-fade-up">
                        <h2 style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.5rem',
                            fontWeight: '500'
                        }}>
                            Hello, I'm Ajinkya
                        </h2>
                        <h1 style={{
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '-0.04em'
                        }}>
                            Product Manager
                        </h1>
                        <p style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            maxWidth: '600px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            lineHeight: '1.4'
                        }}>
                            Building digital products with clarity and purpose.
                            Specialized in 0-1 launches and growth.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button
                                onClick={() => setIsViewerOpen(true)}
                                className="btn btn-primary"
                                style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}
                            >
                                Resume
                            </button>
                            <a href="https://linkedin.com/in/ajinkyakate" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>
                                <Linkedin size={20} style={{ marginRight: '0.5rem' }} />
                                LinkedIn
                            </a>
                        </div>

                        <div className="animate-fade-up delay-300" style={{ marginTop: '4rem', opacity: 0.5 }}>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                                Based in India • Available for Remote Work
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Document Viewer Modal */}
            <DocumentViewerModal
                isOpen={isViewerOpen}
                onClose={() => setIsViewerOpen(false)}
                documentUrl={resumeUrl}
                documentTitle="Ajinkya Kate - Resume.pdf"
            />
        </>
    );
};

export default Hero;
