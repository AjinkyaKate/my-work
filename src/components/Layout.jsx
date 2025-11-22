import React from 'react';
import Navbar from './Navbar';
import AnimatedBackground from './AnimatedBackground';

const Layout = ({ children }) => {
    return (
        <>
            <AnimatedBackground />
            <Navbar />
            <div className="container">
                {children}
            </div>
        </>
    );
};

export default Layout;
