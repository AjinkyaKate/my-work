import React from 'react';
import Navbar from './Navbar';
import AnimatedBackground from './AnimatedBackground';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <AnimatedBackground />
            <AnimatedBackground />
            {/* Navbar removed as per design requirements */}
            <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <main style={{ flex: 1 }}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
