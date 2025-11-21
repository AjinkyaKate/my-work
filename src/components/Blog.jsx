import React from 'react';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'What Support Taught Me About Building Better Products',
            summary: 'Why empathy is the most underrated skill in product management.',
            link: 'https://ajinkyakate.com/blog/post-1'
        },
        {
            title: 'Using Analytics to Fix Onboarding Without Guessing',
            summary: 'How to move from "I think" to "I know" using funnel data.',
            link: 'https://ajinkyakate.com/blog/post-2'
        },
        {
            title: 'Lessons from Being an Early PM at a Startup',
            summary: 'Embracing chaos, owning the outcome, and shipping fast.',
            link: 'https://ajinkyakate.com/blog/post-3'
        },
        {
            title: 'How I Use AI Tools as a Product Manager',
            summary: 'Using AI for research, documentation, and sharpening product thinking.',
            link: 'https://ajinkyakate.com/blog/post-4'
        }
    ];

    return (
        <section className="section" id="writing">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                <div>
                    <h2 style={{ marginBottom: '0.5rem' }}>Writing</h2>
                    <p style={{ margin: 0, maxWidth: '500px', fontSize: '1rem' }}>I write to think clearly about product and startups.</p>
                </div>
                <a href="#" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Read all posts</a>
            </div>

            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {posts.map((post, index) => (
                    <a key={index} href={post.link} className="card" style={{ display: 'block', padding: '2rem', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                            {post.title}
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                            {post.summary}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '500', color: 'var(--accent-color)' }}>
                            Read article <ArrowRight size={14} />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Blog;
