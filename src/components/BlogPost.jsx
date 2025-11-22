import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Post not found</h2>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}>

            {/* Navigation */}
            <nav style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--border-color)',
                position: 'sticky',
                top: 0,
                background: 'rgba(5, 5, 5, 0.8)',
                backdropFilter: 'blur(12px)',
                zIndex: 100
            }}>
                <Link to="/" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    transition: 'color 0.2s'
                }} className="hover:text-primary">
                    <ArrowLeft size={18} /> Back to Portfolio
                </Link>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-icon" style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                        <Share2 size={20} />
                    </button>
                </div>
            </nav>

            {/* Article Content */}
            <article style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 1.5rem 8rem' }}>

                {/* Header */}
                <header className="animate-fade-up" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', color: 'var(--text-tertiary)', fontSize: '0.9rem', marginBottom: '1.5rem', fontWeight: '500' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {post.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} /> {post.readTime}</span>
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.02em'
                    }}>
                        {post.title}
                    </h1>
                    <p style={{ fontSize: '1.25rem', lineHeight: '1.6', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        {post.subtitle}
                    </p>
                </header>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'var(--border-color)', marginBottom: '3rem' }}></div>

                {/* Body */}
                <div className="blog-content animate-fade-up delay-100" style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Footer / Author */}
                <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Written by {post.author}</h4>
                            <p style={{ color: 'var(--text-tertiary)', fontSize: '0.95rem', margin: 0 }}>Product Manager & Builder</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://linkedin.com/in/ajinkyakate" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                                <Linkedin size={16} style={{ marginRight: '0.5rem' }} /> Connect
                            </a>
                        </div>
                    </div>
                </div>

            </article>

            {/* Styles for blog content */}
            <style jsx>{`
                .blog-content h3 {
                    font-size: 1.75rem;
                    color: var(--text-primary);
                    margin-top: 3rem;
                    margin-bottom: 1rem;
                    letter-spacing: -0.02em;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content ul {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.5rem;
                }
                .blog-content blockquote {
                    border-left: 4px solid var(--primary);
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: var(--text-primary);
                    font-size: 1.25rem;
                }
                .hover\\:text-primary:hover {
                    color: var(--primary) !important;
                }
            `}</style>
        </div>
    );
};

export default BlogPost;
