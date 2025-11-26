import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            title: "Why did I choose to become a PM?",
            excerpt: "From Support to Product: A journey of empathy and problem solving.",
            date: "Nov 2024",
            readTime: "5 min read",
            link: "/blog/why-i-chose-pm"
        },
        {
            title: "Guesstimate Question",
            excerpt: "Breaking down complex problems into solvable chunks.",
            date: "Nov 2024",
            readTime: "4 min read",
            link: "/blog/guesstimate-question"
        }
    ];

    return (
        <section className="section" id="blog">
            <div className="container">
                <div className="header-content animate-fade-up">
                    <div>
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
                            className={`blog-card animate-fade-up delay-${(index + 1) * 100}`}
                        >
                            <div className="card-content">
                                <h4>{post.title}</h4>
                                <p>{post.excerpt}</p>
                                <div className="card-footer">
                                    <span>{post.date} · {post.readTime}</span>
                                    <span className="read-link">
                                        Read Article <ArrowRight size={16} />
                                    </span>
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
                    align-items: center;
                    margin-bottom: 4rem;
                    flex-wrap: wrap;
                    gap: 2rem;
                }

                .section-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 700;
                    margin-bottom: 1rem;
                    letter-spacing: -0.02em;
                }

                .section-subtitle {
                    font-size: 1.25rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                }

                .btn-medium {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    border-radius: 100px;
                    border: 1px solid var(--border-primary);
                    color: var(--text-primary);
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }

                .btn-medium:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: var(--text-primary);
                }

                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 2rem;
                }

                .blog-card {
                    display: block;
                    background: #2D3748; /* Darker slate/grey to match MyStory */
                    border-radius: 24px;
                    padding: 2.5rem;
                    text-decoration: none;
                    color: inherit;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                }

                .blog-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
                    border-color: var(--primary-indigo);
                }

                .card-content h4 {
                    font-size: 1.5rem;
                    margin: 0 0 1rem 0;
                    line-height: 1.4;
                    font-weight: 600;
                    color: #FFFFFF;
                }

                .card-content p {
                    color: var(--text-secondary);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                    font-size: 1.1rem;
                }

                .card-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 0.9rem;
                    color: var(--text-tertiary);
                    margin-top: auto;
                }

                .read-link {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-indigo);
                    font-weight: 500;
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: all 0.2s ease;
                }

                .blog-card:hover .read-link {
                    opacity: 1;
                    transform: translateX(0);
                }

                @media (max-width: 768px) {
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
                }
            `}</style>
        </section>
    );
};

export default Blog;
