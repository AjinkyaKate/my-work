import React from 'react';
import { ArrowRight } from 'lucide-react';
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
                <div className="animate-fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                    <div>
                        <h2 style={{ marginBottom: '1rem' }}>Writing</h2>
                        <p style={{ maxWidth: '600px', color: 'var(--text-secondary)' }}>
                            Thoughts on product management, strategy, and user psychology.
                        </p>
                    </div>
                    <a href="#" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>Read all posts</a>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {posts.map((post, index) => (
                        <Link key={index} to={post.link} className={`card animate-fade-up delay-${(index + 1) * 100}`} style={{ display: 'block', padding: '2.5rem', height: '100%', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4', fontWeight: '600' }}>
                                {post.title}
                            </h4>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                {post.excerpt}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                                <span>{post.date} · {post.readTime}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '500' }}>
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
