import React from 'react';

const AnimatedBackground = () => {
    return (
        <>
            {/* Floating Pastel Gradient Orbs */}
            <div style={{
                position: 'fixed',
                top: '15%',
                left: '10%',
                width: '350px',
                height: '350px',
                background: 'radial-gradient(circle, rgba(197, 184, 229, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                animation: 'float 8s ease-in-out infinite',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            <div style={{
                position: 'fixed',
                top: '50%',
                right: '12%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(184, 213, 197, 0.18) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                animation: 'float 10s ease-in-out infinite reverse',
                zIndex: -1,
                pointerEvents: 'none',
                animationDelay: '2s'
            }} />

            <div style={{
                position: 'fixed',
                bottom: '15%',
                left: '8%',
                width: '280px',
                height: '280px',
                background: 'radial-gradient(circle, rgba(229, 197, 184, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(45px)',
                animation: 'float 12s ease-in-out infinite',
                zIndex: -1,
                pointerEvents: 'none',
                animationDelay: '4s'
            }} />
        </>
    );
};

export default AnimatedBackground;
