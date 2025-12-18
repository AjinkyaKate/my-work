import React, { useState } from 'react';
import { X, Download, ExternalLink, Share2, Check } from 'lucide-react';

const DocumentViewerModal = ({ isOpen, onClose, documentUrl, documentTitle = "Document" }) => {
    const [copied, setCopied] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = documentUrl;
        link.download = documentTitle;
        link.click();
    };

    const handleOpenNew = () => {
        window.open(documentUrl, '_blank');
    };

    const handleShare = async () => {
        const shareUrl = window.location.origin + documentUrl;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: documentTitle,
                    url: shareUrl
                });
            } catch (err) {
                if (err.name !== 'AbortError') {
                    copyToClipboard(shareUrl);
                }
            }
        } else {
            copyToClipboard(shareUrl);
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                backdropFilter: 'blur(8px)',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                animation: 'fadeIn 0.3s ease-out'
            }}
            onClick={handleOverlayClick}
        >
            {/* Header Controls */}
            <div
                className="viewer-header"
                style={{
                    background: 'rgba(34, 40, 49, 0.9)', // Based on bg-primary #222831
                    backdropFilter: 'blur(24px)',
                    borderBottom: '1px solid var(--border-primary)',
                    padding: '1rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <h3 className="viewer-title" style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {documentTitle}
                </h3>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {/* Share Button */}
                    <button
                        onClick={handleShare}
                        style={{
                            background: copied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(238, 238, 238, 0.05)',
                            border: `1px solid ${copied ? 'var(--secondary-emerald)' : 'var(--border-primary)'}`,
                            borderRadius: '8px',
                            padding: '0.5rem 1rem',
                            color: copied ? 'var(--secondary-emerald)' : 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'all 0.2s'
                        }}
                        className="viewer-btn"
                        title={copied ? "Link Copied!" : "Share Resume"}
                    >
                        {copied ? <Check size={18} /> : <Share2 size={18} />}
                        <span className="viewer-btn-text">{copied ? 'Copied!' : 'Share'}</span>
                    </button>

                    {/* Open in New Tab Button */}
                    <button
                        onClick={handleOpenNew}
                        style={{
                            background: 'rgba(238, 238, 238, 0.05)',
                            border: '1px solid var(--border-primary)',
                            borderRadius: '8px',
                            padding: '0.5rem 1rem',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'all 0.2s'
                        }}
                        className="viewer-btn"
                        title="Open in New Tab"
                    >
                        <ExternalLink size={18} />
                        <span className="viewer-btn-text">Open in New Tab</span>
                    </button>

                    {/* Download Button */}
                    <button
                        onClick={handleDownload}
                        style={{
                            background: 'rgba(238, 238, 238, 0.05)',
                            border: '1px solid var(--border-primary)',
                            borderRadius: '8px',
                            padding: '0.5rem 1rem',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'all 0.2s'
                        }}
                        className="viewer-btn"
                        title="Download"
                    >
                        <Download size={18} />
                        <span className="viewer-btn-text">Download</span>
                    </button>

                    <div style={{ width: '1px', height: '24px', background: 'var(--border-primary)', margin: '0 0.5rem' }} />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(238, 238, 238, 0.05)',
                            border: '1px solid var(--border-primary)',
                            borderRadius: '8px',
                            padding: '0.5rem',
                            color: 'var(--text-primary)',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        className="viewer-btn"
                        title="Close"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* PDF Viewer - Using iframe for better browser support */}
            <div style={{
                flex: 1,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                backgroundColor: 'var(--bg-primary)'
            }}>
                <iframe
                    src={`${documentUrl}#view=FitH`}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        borderRadius: '8px',
                        backgroundColor: '#FFFFFF'
                    }}
                    title={documentTitle}
                />
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .viewer-btn:hover:not(:disabled) {
                    background: rgba(255, 255, 255, 0.1) !important;
                    border-color: rgba(255, 255, 255, 0.2) !important;
                    transform: translateY(-1px);
                }

                .viewer-btn:active:not(:disabled) {
                    transform: translateY(0);
                }

                @media (max-width: 768px) {
                    .viewer-header {
                        padding: 0.75rem 1rem !important;
                    }
                    
                    .viewer-btn-text {
                        display: none;
                    }

                    .viewer-title {
                        font-size: 1rem !important;
                        max-width: 60%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            `}</style>
        </div>
    );
};

export default DocumentViewerModal;
