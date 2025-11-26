import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, seo, image }) => {
    const siteTitle = 'GrowthMeta | Data-Driven Digital Marketing Agency';

    // Prioritize direct props, then Sanity SEO object, then defaults
    const metaTitle = title || seo?.metaTitle || siteTitle;
    const fullTitle = metaTitle === siteTitle ? siteTitle : `${metaTitle} | GrowthMeta`;

    const metaDescription = description || seo?.metaDescription || "GrowthMeta is a data-driven digital marketing agency specializing in SEO, PPC, and Analytics for ambitious SaaS and E-commerce brands.";

    const metaImage = image || seo?.ogImage?.asset?.url;
    const metaCanonical = canonical || seo?.canonicalUrl;
    const noIndex = seo?.noIndex || false;
    const noFollow = seo?.noFollow || false;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {metaCanonical && <link rel="canonical" href={metaCanonical} />}

            {/* Robots */}
            {(noIndex || noFollow) && (
                <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
            )}

            {/* Open Graph */}
            <meta property="og:title" content={seo?.ogTitle || fullTitle} />
            <meta property="og:description" content={seo?.ogDescription || metaDescription} />
            <meta property="og:type" content="website" />
            {metaImage && <meta property="og:image" content={metaImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo?.ogTitle || fullTitle} />
            <meta name="twitter:description" content={seo?.ogDescription || metaDescription} />
            {metaImage && <meta name="twitter:image" content={metaImage} />}

            {/* JSON-LD Schema */}
            {seo?.structuredData && (
                <script type="application/ld+json">
                    {seo.structuredData}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
