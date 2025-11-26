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
                            className={`blog-card ${post.featured ? 'featured' : ''} animate-fade-up delay-${(index + 1) * 100}`}
                        >
                            {post.featured && (
                                <div className="featured-badge">
                                    <Sparkles size={14} />
                                    <span>Featured</span>
                                </div>
                            )}

                            <div className="card-gradient"></div>

                            <div className="card-content">
                                <div className="card-meta">
                                    <div className="category-tag">
                                        <Tag size={12} />
                                        <span>{post.category}</span>
                                    </div>
                                    <div className="read-time">
                                        <Clock size={12} />
                                        <span>{post.readTime}</span>
                                    </div>
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
                    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
                    gap: 2rem;
                }

                .blog-card {
                    position: relative;
                    display: block;
                    background: var(--bg-secondary);
                    border-radius: var(--radius-lg);
                    padding: 2.5rem;
                    text-decoration: none;
                    color: inherit;
                    border: 1px solid var(--border-primary);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: var(--shadow-md);
                    overflow: hidden;
                }

                .blog-card.featured {
                    grid-column: span 1;
                    background: linear-gradient(135deg, var(--bg-secondary) 0%, rgba(79, 70, 229, 0.05) 100%);
                }

                .blog-card:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--accent-primary);
                }

                .blog-card:hover .card-gradient {
                    opacity: 1;
                }

                /* Gradient Overlay */
                .card-gradient {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(16, 185, 129, 0.1));
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                /* Featured Badge */
                .featured-badge {
                    position: absolute;
                    top: 1.5rem;
                    right: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    padding: 0.5rem 0.875rem;
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
                }

                .card-meta {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .category-tag,
                .read-time {
                    display: flex;
                    align-items: center;
                    gap: 0.35rem;
                    font-size: 0.8rem;
                    color: var(--text-tertiary);
                    padding: 0.4rem 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 6px;
                    border: 1px solid var(--border-primary);
                    font-weight: 500;
                }

                .category-tag {
                    color: var(--accent-primary);
                    border-color: rgba(79, 70, 229, 0.3);
                }

                .card-content h4 {
                    font-size: 1.5rem;
                    margin: 0 0 1rem 0;
                    line-height: 1.4;
                    font-weight: 600;
                    color: var(--text-primary);
                    transition: color 0.3s ease;
                }

                .blog-card:hover h4 {
                    color: var(--accent-primary);
                }

                .excerpt {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin: 0 0 2rem 0;
                }

                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1.5rem;
                    border-top: 1px solid var(--border-primary);
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
                    color: var(--accent-primary);
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .blog-card:hover .read-more {
                    gap: 0.75rem;
                }

                .arrow-icon {
                    transition: transform 0.3s ease;
                }

                .blog-card:hover .arrow-icon {
                    transform: translateX(4px);
                }

                @media (max-width: 968px) {
                    .header-content {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .blog-grid {
                        grid-template-columns: 1fr;
                    }

                    .blog-card {
                        padding: 2rem;
                    }

                    .featured-badge {
                        top: 1rem;
                        right: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Blog;
