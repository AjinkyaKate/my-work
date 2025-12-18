import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
                <div className="toggle-bg"></div>
                <div className="toggle-icon-wrapper">
                    {theme === 'light' ? (
                        <Moon size={22} className="icon-moon" />
                    ) : (
                        <Sun size={22} className="icon-sun" />
                    )}
                </div>
                <div className="toggle-ripple"></div>
            </button>

            <style jsx>{`
                .theme-toggle {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 64px;
                    height: 64px;
                    border-radius: var(--radius-full);
                    background: var(--surface);
                    border: 2px solid var(--border-light);
                    color: var(--text-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1000;
                    overflow: hidden;
                    position: relative;
                }

                .toggle-bg {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, var(--accent-primary), var(--secondary-emerald));
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .theme-toggle:hover .toggle-bg {
                    opacity: 0.1;
                }

                .toggle-icon-wrapper {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .icon-moon,
                .icon-sun {
                    animation: icon-appear 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .icon-moon {
                    color: var(--accent-primary);
                }

                .icon-sun {
                    color: var(--accent-warning);
                }

                @keyframes icon-appear {
                    from {
                        transform: scale(0) rotate(-180deg);
                        opacity: 0;
                    }
                    to {
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }

                .toggle-ripple {
                    position: absolute;
                    inset: 0;
                    border-radius: var(--radius-full);
                    border: 2px solid var(--accent-primary);
                    opacity: 0;
                    transform: scale(0.8);
                    transition: all 0.5s ease;
                }

                .theme-toggle:hover {
                    transform: scale(1.08) rotate(5deg);
                    border-color: var(--accent-primary);
                    box-shadow: 0 12px 32px rgba(59, 130, 246, 0.3), 0 0 0 1px var(--accent-primary);
                }

                .theme-toggle:hover .toggle-icon-wrapper {
                    transform: rotate(20deg) scale(1.1);
                }

                .theme-toggle:active {
                    transform: scale(0.95) rotate(0deg);
                }

                .theme-toggle:active .toggle-ripple {
                    opacity: 1;
                    transform: scale(1.5);
                }

                /* Floating Animation */
                @keyframes float-theme {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }

                .theme-toggle {
                    animation: float-theme 3s ease-in-out infinite;
                }

                .theme-toggle:hover {
                    animation: none;
                }

                /* Pulse Animation on Load */
                @keyframes pulse-scale {
                    0%, 100% {
                        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(59, 130, 246, 0);
                    }
                    50% {
                        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 0 0 8px rgba(59, 130, 246, 0.2);
                    }
                }

                /* Mobile Styles */
                @media (max-width: 768px) {
                    .theme-toggle {
                        width: 56px;
                        height: 56px;
                        bottom: 1.5rem;
                        right: 1.5rem;
                    }

                    .icon-moon,
                    .icon-sun {
                        width: 20px;
                        height: 20px;
                    }
                }

                @media (hover: none) {
                    .theme-toggle {
                        animation: none;
                    }
                }
            `}</style>
        </>
    );
};

export default ThemeToggle;
