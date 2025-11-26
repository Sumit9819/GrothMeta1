import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical }) => {
    const siteTitle = 'GrowthMeta | Data-Driven Digital Marketing Agency';
    const fullTitle = title ? `${title} | GrowthMeta` : siteTitle;
    const metaDescription = description || "GrowthMeta is a data-driven digital marketing agency specializing in SEO, PPC, and Analytics for ambitious SaaS and E-commerce brands.";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
        </Helmet>
    );
};

export default SEO;
