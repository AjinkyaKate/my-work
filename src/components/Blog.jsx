import React from 'react';
import { ArrowRight, ArrowUpRight, Clock, Tag, Sparkles, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            title: "Why did I choose to become a PM?",
            excerpt: "From Support to Product: A journey of empathy and problem solving.",
            date: "Nov 2024",
            readTime: "5 min read",
            link: "/blog/why-i-chose-pm",
            category: "Career",
            featured: true,
            color: "#fbbf24",
            icon: "lightbulb"
        },
        {
            title: "Guesstimate Question",
            excerpt: "Breaking down complex problems into solvable chunks.",
            date: "Nov 2024",
            readTime: "4 min read",
            link: "/blog/guesstimate-question",
            category: "Product",
            featured: false,
            color: "#10b981",
            icon: "trending"
        }
    ];

    const getIcon = (iconName) => {
        const icons = {
            lightbulb: <Lightbulb size={24} />,
            trending: <TrendingUp size={24} />,
            book: <BookOpen size={24} />
        };
        return icons[iconName] || icons.book;
    };

    return (
        <section className="section blog-section" id="blog">
            <div className="container">
                {/* Decorative Background Elements */}
                <div className="bg-decoration">
                    <div className="decoration-circle circle-1"></div>
                    <div className="decoration-circle circle-2"></div>
                    <div className="decoration-line line-1"></div>
                    <div className="decoration-line line-2"></div>
                </div>

                <div className="header-content animate-fade-up">
                    <div className="header-left">
                        <div className="title-wrapper">
                            <div className="title-accent"></div>
                            <h2 className="section-title">Writing</h2>
                        </div>
                        <p className="section-subtitle">
                            <span className="subtitle-icon">✍️</span>
                            Thoughts on product management, strategy, and career growth
                        </p>
                    </div>
                    <a
                        href="https://medium.com/@Ajinkya_Kate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-medium"
                    >
                        <span>Read more on Medium</span>
                        <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <Link
                            key={index}
                            to={post.link}
                            className={`blog-card mobile-scroll-item ${post.featured ? 'featured' : ''} animate-fade-up delay-${(index + 1) * 100}`}
                            style={{ '--card-color': post.color }}
                        >
                            <div className="card-bg-pattern"></div>
                            <div className="blog-bg-glow"></div>
                            <div className="gradient-border"></div>

                            {/* Icon Circle */}
                            <div className="card-icon">
                                {getIcon(post.icon)}
                            </div>

                            {post.featured && (
                                <div className="featured-badge">
                                    <Sparkles size={14} />
                                    <span>Featured</span>
                                </div>
                            )}

                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="meta-tag category">{post.category}</span>
                                    <span className="meta-divider">•</span>
                                    <span className="meta-tag time">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h4>{post.title}</h4>
                                <p className="excerpt">{post.excerpt}</p>

                                <div className="card-footer">
                                    <span className="date">
                                        <span className="date-icon">📅</span>
                                        {post.date}
                                    </span>
                                    <div className="read-more">
                                        <span>Read article</span>
                                        <ArrowRight size={16} className="arrow-icon" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .blog-section {
                    position: relative;
                    overflow: hidden;
                }

                /* Decorative Background Elements */
                .bg-decoration {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    z-index: 0;
                    overflow: hidden;
                }

                .decoration-circle {
                    position: absolute;
                    border-radius: 50%;
                    background: radial-gradient(circle, var(--accent-primary), transparent 70%);
                    opacity: 0.03;
                    filter: blur(60px);
                }

                .circle-1 {
                    width: 400px;
                    height: 400px;
                    top: -100px;
                    right: 10%;
                }

                .circle-2 {
                    width: 300px;
                    height: 300px;
                    bottom: -50px;
                    left: 5%;
                    background: radial-gradient(circle, var(--secondary-emerald), transparent 70%);
                }

                .decoration-line {
                    position: absolute;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--border-primary), transparent);
                    opacity: 0.3;
                }

                .line-1 {
                    top: 30%;
                    left: 0;
                    right: 0;
                }

                .line-2 {
                    bottom: 30%;
                    left: 0;
                    right: 0;
                }

                .header-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 4rem;
                    gap: 2rem;
                }

                .header-left {
                    flex: 1;
                }

                .title-wrapper {
                    position: relative;
                    display: inline-block;
                    margin-bottom: 1rem;
                }

                .title-accent {
                    position: absolute;
                    bottom: 0.5rem;
                    left: 0;
                    width: 100%;
                    height: 12px;
                    background: linear-gradient(90deg, var(--accent-primary), var(--secondary-emerald));
                    opacity: 0.15;
                    border-radius: 4px;
                    z-index: -1;
                }

                .section-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 800;
                    margin: 0;
                    letter-spacing: -0.03em;
                    color: var(--text-primary);
                    background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .section-subtitle {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-size: 1.15rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0;
                    line-height: 1.7;
                }

                .subtitle-icon {
                    font-size: 1.5rem;
                    filter: grayscale(0.2);
                }

                .btn-medium {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.625rem;
                    padding: 1rem 1.75rem;
                    background: linear-gradient(135deg, var(--accent-primary), var(--secondary-emerald));
                    border: 2px solid transparent;
                    border-radius: 14px;
                    color: white;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    white-space: nowrap;
                    box-shadow: 0 4px 12px rgba(251, 191, 36, 0.2);
                    position: relative;
                    overflow: hidden;
                }

                .btn-medium::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s ease;
                }

                .btn-medium:hover::before {
                    left: 100%;
                }

                .btn-medium:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 12px 24px rgba(251, 191, 36, 0.4);
                }

                .blog-grid {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
                    gap: 2.5rem;
                }

                @media (max-width: 768px) {
                    .blog-grid {
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                        grid-template-columns: none;
                    }
                }

                .blog-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    background: var(--surface);
                    border-radius: 28px;
                    padding: 3rem;
                    text-decoration: none;
                    color: inherit;
                    border: 2px solid var(--border-light);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    z-index: 1;
                    height: 100%;
                }

                .card-bg-pattern {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 200px;
                    height: 200px;
                    background:
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            var(--border-light) 10px,
                            var(--border-light) 11px
                        );
                    opacity: 0.03;
                    pointer-events: none;
                    z-index: 0;
                }

                .blog-card.featured {
                    background: linear-gradient(135deg, var(--surface) 0%, rgba(251, 191, 36, 0.03) 100%);
                    border-color: rgba(251, 191, 36, 0.3);
                }

                .blog-card:hover {
                    transform: translateY(-10px) scale(1.02);
                    box-shadow:
                        0 20px 60px -15px rgba(0, 0, 0, 0.4),
                        0 0 0 1px var(--card-color, var(--accent-primary));
                    border-color: var(--card-color, var(--accent-primary));
                }

                /* Card Icon */
                .card-icon {
                    position: absolute;
                    top: -20px;
                    right: 2rem;
                    width: 64px;
                    height: 64px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, var(--card-color), transparent);
                    backdrop-filter: blur(10px);
                    border: 2px solid var(--border-light);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--card-color);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 2;
                }

                .blog-card:hover .card-icon {
                    transform: translateY(-8px) rotate(5deg) scale(1.1);
                    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
                    background: var(--card-color);
                    color: white;
                }

                .blog-bg-glow {
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, var(--card-color), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                    filter: blur(80px);
                    z-index: 0;
                }

                .blog-card:hover .blog-bg-glow {
                    opacity: 0.15;
                }

                .gradient-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 28px;
                    padding: 2px;
                    background: linear-gradient(135deg, var(--card-color), var(--secondary-emerald));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                }

                .blog-card:hover .gradient-border {
                    opacity: 0.6;
                }

                /* Featured Badge */
                .featured-badge {
                    position: absolute;
                    top: 2rem;
                    left: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, var(--accent-primary), var(--secondary-emerald));
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    border-radius: 12px;
                    box-shadow: 0 6px 16px rgba(251, 191, 36, 0.4);
                    z-index: 2;
                    animation: pulse-badge 2s ease-in-out infinite;
                }

                @keyframes pulse-badge {
                    0%, 100% {
                        box-shadow: 0 6px 16px rgba(251, 191, 36, 0.4);
                    }
                    50% {
                        box-shadow: 0 8px 24px rgba(251, 191, 36, 0.6);
                    }
                }

                .card-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    margin-top: 2rem;
                }

                .card-meta {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1.75rem;
                }

                .meta-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.8rem;
                    padding: 0.4rem 0.9rem;
                    border-radius: 10px;
                    background: var(--bg-secondary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border-light);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    transition: all 0.3s ease;
                }

                .meta-divider {
                    color: var(--border-primary);
                    font-size: 1rem;
                }

                .blog-card:hover .meta-tag {
                    background: var(--bg-tertiary);
                    transform: translateY(-2px);
                }

                .meta-tag.category {
                    color: var(--card-color);
                    background: transparent;
                    border-color: var(--card-color);
                    font-weight: 700;
                }

                .card-content h4 {
                    font-size: 1.65rem;
                    margin: 0 0 1.25rem 0;
                    line-height: 1.35;
                    font-weight: 700;
                    color: var(--text-primary);
                    transition: all 0.3s ease;
                    letter-spacing: -0.025em;
                }

                .blog-card:hover h4 {
                    color: var(--card-color);
                    transform: translateX(4px);
                }

                .excerpt {
                    font-size: 1.05rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin: 0 0 2rem 0;
                    flex-grow: 1;
                }

                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1.75rem;
                    border-top: 2px solid var(--border-light);
                    margin-top: auto;
                    transition: border-color 0.3s ease;
                }

                .blog-card:hover .card-footer {
                    border-color: var(--card-color);
                }

                .date {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    color: var(--text-tertiary);
                    font-weight: 600;
                    transition: color 0.3s ease;
                }

                .date-icon {
                    font-size: 1rem;
                }

                .blog-card:hover .date {
                    color: var(--text-secondary);
                }

                .read-more {
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    font-size: 0.95rem;
                    color: var(--text-primary);
                    font-weight: 700;
                    padding: 0.625rem 1.25rem;
                    background: var(--bg-secondary);
                    border-radius: 12px;
                    border: 1px solid var(--border-light);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .blog-card:hover .read-more {
                    background: var(--card-color);
                    color: white;
                    border-color: var(--card-color);
                    gap: 0.875rem;
                    transform: translateX(4px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                }

                .arrow-icon {
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .blog-card:hover .arrow-icon {
                    transform: translateX(6px) rotate(-5deg);
                }

                @media (max-width: 968px) {
                    .header-content {
                        flex-direction: column;
                        align-items: flex-start;
                        margin-bottom: 3rem;
                    }

                    .title-accent {
                        height: 8px;
                    }

                    .blog-grid {
                        gap: 2rem;
                    }

                    .blog-card {
                        padding: 2.5rem;
                        border-radius: 24px;
                    }

                    .card-icon {
                        width: 56px;
                        height: 56px;
                        top: -16px;
                        right: 1.5rem;
                        border-radius: 16px;
                    }

                    .featured-badge {
                        top: 1.5rem;
                        left: 1.5rem;
                        padding: 0.4rem 0.8rem;
                        font-size: 0.7rem;
                    }

                    .card-content {
                        margin-top: 1.5rem;
                    }
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2.5rem;
                    }

                    .section-subtitle {
                        font-size: 1rem;
                    }

                    .btn-medium {
                        width: 100%;
                        justify-content: center;
                        padding: 0.875rem 1.5rem;
                    }

                    .blog-card {
                        width: 100%;
                        scroll-snap-align: none;
                        height: auto;
                        min-height: 100%;
                        padding: 2rem;
                    }

                    .card-icon {
                        width: 48px;
                        height: 48px;
                        top: -12px;
                        right: 1rem;
                        border-radius: 14px;
                    }

                    .card-content h4 {
                        font-size: 1.4rem;
                    }

                    .excerpt {
                        font-size: 1rem;
                    }

                    .read-more {
                        padding: 0.5rem 1rem;
                        font-size: 0.875rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Blog;
