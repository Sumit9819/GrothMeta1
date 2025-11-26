import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import CTASection from '../components/CTASection';
import LeadMagnet from '../components/LeadMagnet';
import SEO from '../components/SEO';
import { client, urlFor } from '../client';

const BlogPostPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      body,
      "category": categories[0]->title
    }`;

        client.fetch(query, { slug })
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <div style={{ paddingTop: '100px', textAlign: 'center' }}>Loading...</div>;
    if (!post) return <div style={{ paddingTop: '100px', textAlign: 'center' }}>Post not found</div>;

    return (
        <div style={{ paddingTop: '80px' }}>
            <SEO
                title={post.title}
                description={`Read our latest insights on ${post.title}. GrowthMeta helps you stay ahead in digital marketing.`}
            />
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ marginBottom: '1rem' }}>
                        <Link to="/blog" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>← Back to Blog</Link>
                    </div>
                    <div style={{ color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {post.category || 'Insights'} • {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '1.5rem', maxWidth: '900px' }}>
                        {post.title}
                    </h1>
                </div>
            </section>

            <section className="section">
                <div className="container grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>

                    {/* Main Content Area */}
                    <article style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                        {post.mainImage && (
                            <img
                                src={urlFor(post.mainImage).width(800).url()}
                                alt={post.title}
                                style={{ width: '100%', borderRadius: '8px', marginBottom: '2rem' }}
                            />
                        )}
                        <div className="portable-text">
                            <PortableText value={post.body} />
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside>
                        <LeadMagnet />
                    </aside>

                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default BlogPostPage;
