import React from 'react';
import { ArrowRight, ArrowUpRight, Clock, Tag, Sparkles } from 'lucide-react';
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
            featured: true
        },
        {
            title: "Guesstimate Question",
            excerpt: "Breaking down complex problems into solvable chunks.",
            date: "Nov 2024",
            readTime: "4 min read",
            link: "/blog/guesstimate-question",
            category: "Product",
            featured: false
        }
    ];

    return (
        <section className="section" id="blog">
            <div className="container">
                <div className="header-content animate-fade-up">
                    <div className="header-left">
                        <h2 className="section-title">Writing</h2>
                        <p className="section-subtitle">
                            Thoughts on product management, strategy, and user psychology.
                        </p>
                    </div>
                    <a
                        href="https://medium.com/@Ajinkya_Kate"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-medium"
                    >
                        Read more on Medium <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="blog-grid">
                    {posts.map((post, index) => (
                        <Link
                            key={index}
                            to={post.link}
                            className={`blog-card mobile-scroll-item ${post.featured ? 'featured' : ''} animate-fade-up delay-${(index + 1) * 100}`}
                        >
                            <div className="blog-bg-glow"></div>
                            <div className="gradient-border"></div>

                            {post.featured && (
                                <div className="featured-badge">
                                    <Sparkles size={14} />
                                    <span>Featured</span>
                                </div>
                            )}

                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="meta-tag category">{post.category}</span>
                                    <span className="meta-tag time">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h4>{post.title}</h4>
                                <p className="excerpt">{post.excerpt}</p>

                                <div className="card-footer">
                                    <span className="date">{post.date}</span>
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
                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 4rem;
                    gap: 2rem;
                }

                .header-left {
                    flex: 1;
                }

                .section-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 700;
                    margin: 0 0 1rem 0;
                    letter-spacing: -0.02em;
                    color: var(--text-primary);
                }

                .section-subtitle {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    max-width: 500px;
                    margin: 0;
                    line-height: 1.6;
                }

                .btn-medium {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.875rem 1.5rem;
                    background: var(--bg-secondary);
                    border: 1px solid var(--border-primary);
                    border-radius: 12px;
                    color: var(--text-primary);
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    white-space: nowrap;
                }

                .btn-medium:hover {
                    background: var(--accent-primary);
                    color: white;
                    border-color: var(--accent-primary);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
                }

                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                }

                @media (max-width: 768px) {
                    .blog-grid {
                        display: flex;
                        overflow-x: auto;
                        scroll-snap-type: x mandatory;
                        gap: 1rem;
                        padding-bottom: 1.5rem;
                        margin-right: -1.5rem;
                        padding-right: 1.5rem;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                        grid-template-columns: none; /* Override grid */
                    }

                    .blog-grid::-webkit-scrollbar {
                        display: none;
                    }
                }

                .blog-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    background: var(--bg-secondary);
                    border-radius: 24px;
                    padding: 2.5rem;
                    text-decoration: none;
                    color: inherit;
                    border: 1px solid var(--border-primary);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                    z-index: 1;
                    height: 100%;
                }

                .blog-card.featured {
                    background: linear-gradient(135deg, var(--bg-secondary) 0%, rgba(79, 70, 229, 0.05) 100%);
                }

                .blog-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
                    border-color: transparent;
                }

                .blog-bg-glow {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 250px;
                    height: 250px;
                    background: radial-gradient(circle at top right, var(--accent-primary), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                    filter: blur(50px);
                    z-index: -1;
                }

                .blog-card:hover .blog-bg-glow {
                    opacity: 0.1;
                }

                .gradient-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 24px;
                    padding: 1px;
                    background: linear-gradient(135deg, var(--accent-primary), var(--secondary-emerald));
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                .blog-card:hover .gradient-border {
                    opacity: 1;
                }

                /* Featured Badge */
                .featured-badge {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    padding: 0.4rem 0.8rem;
                    background: var(--accent-primary);
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    border-radius: 100px;
                    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
                    z-index: 2;
                }

                .card-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }

                .card-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1.5rem;
                }

                .meta-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-size: 0.75rem;
                    padding: 0.25rem 0.75rem;
                    border-radius: 100px;
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border-primary);
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    transition: all 0.3s ease;
                }

                .blog-card:hover .meta-tag {
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-primary);
                    border-color: rgba(255, 255, 255, 0.1);
                }

                .meta-tag.category {
                    color: var(--accent-primary);
                    background: rgba(79, 70, 229, 0.1);
                    border-color: rgba(79, 70, 229, 0.2);
                }

                .card-content h4 {
                    font-size: 1.5rem;
                    margin: 0 0 1rem 0;
                    line-height: 1.3;
                    font-weight: 700;
                    color: var(--text-primary);
                    transition: color 0.3s ease;
                    letter-spacing: -0.02em;
                }

                .blog-card:hover h4 {
                    color: var(--accent-primary);
                }

                .excerpt {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin: 0 0 2rem 0;
                    flex-grow: 1;
                }

                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--border-primary);
                    margin-top: auto;
                }

                .date {
                    font-size: 0.85rem;
                    color: var(--text-tertiary);
                    font-weight: 500;
                }

                .read-more {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.9rem;
                    color: var(--text-primary);
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .blog-card:hover .read-more {
                    color: var(--accent-primary);
                    gap: 0.75rem;
                }

                .arrow-icon {
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .blog-card:hover .arrow-icon {
                    transform: translateX(4px);
                }

                @media (max-width: 968px) {
                    .header-content {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .blog-card {
                        padding: 2rem;
                    }

                    .featured-badge {
                        top: 1rem;
                        right: 1rem;
                    }
                }

                @media (max-width: 768px) {
                    .blog-card {
                        flex: 0 0 85vw;
                        width: 85vw;
                        scroll-snap-align: start;
                        height: auto; /* Allow height to adjust */
                        min-height: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default Blog;
