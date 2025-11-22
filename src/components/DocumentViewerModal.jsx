import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

const DocumentViewerModal = ({ isOpen, onClose, documentUrl, documentTitle = "Document" }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = documentUrl;
        link.download = documentTitle;
        link.click();
    };

    const handleOpenNew = () => {
        window.open(documentUrl, '_blank');
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
            <div style={{
                background: 'rgba(17, 17, 17, 0.8)',
                backdropFilter: 'blur(24px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, color: '#FFFFFF' }}>
                    {documentTitle}
                </h3>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {/* Open in New Tab Button */}
                    <button
                        onClick={handleOpenNew}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            padding: '0.5rem 1rem',
                            color: '#FFFFFF',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'all 0.2s'
                        }}
                        className="viewer-btn"
                    >
                        <ExternalLink size={18} />
                        Open in New Tab
                    </button>

                    {/* Download Button */}
                    <button
                        onClick={handleDownload}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            padding: '0.5rem 1rem',
                            color: '#FFFFFF',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            transition: 'all 0.2s'
                        }}
                        className="viewer-btn"
                    >
                        <Download size={18} />
                        Download
                    </button>

                    <div style={{ width: '1px', height: '24px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 0.5rem' }} />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            padding: '0.5rem',
                            color: '#FFFFFF',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                        className="viewer-btn"
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
                backgroundColor: '#050505'
            }}>
                <iframe
                    src={documentUrl}
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
            `}</style>
        </div>
    );
};

export default DocumentViewerModal;
