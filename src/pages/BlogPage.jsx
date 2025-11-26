import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import LeadMagnet from '../components/LeadMagnet';
import { client } from '../client';

const BlogPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "post"] | order(publishedAt desc){
      title,
      slug,
      publishedAt,
      "category": categories[0]->title,
      "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "..."
    }`;

        client.fetch(query)
            .then((data) => {
                setArticles(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Loading Insights...</div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                        Growth <span className="text-gradient">Blog</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                        Latest trends, strategies, and data from the frontlines of digital marketing.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
                    {/* Main Content */}
                    <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>
                        {articles.length > 0 ? (
                            articles.map((article, index) => (
                                <Link to={`/blog/${article.slug.current}`} key={index} style={{
                                    padding: '2rem',
                                    border: '1px solid var(--border-subtle)',
                                    background: 'var(--bg-primary)',
                                    cursor: 'pointer',
                                    transition: 'border-color 0.3s ease',
                                    display: 'block',
                                    textDecoration: 'none'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
                                >
                                    <div style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--accent-primary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: '1rem'
                                    }}>
                                        {article.category || 'Uncategorized'} • {new Date(article.publishedAt).toLocaleDateString()}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{article.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{article.excerpt}</p>
                                    <div style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Read Article →</div>
                                </Link>
                            ))
                        ) : (
                            <div style={{ padding: '2rem', border: '1px solid var(--border-subtle)', background: 'var(--bg-primary)' }}>
                                <h3 style={{ marginBottom: '1rem' }}>No articles found.</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    Please make sure you have published posts in your Sanity Studio and added your Project ID to the .env file.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div>
                        <LeadMagnet />
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default BlogPage;
