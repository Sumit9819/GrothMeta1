import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'seo',
    title: 'SEO & Social',
    type: 'object',
    fields: [
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
            description: 'Title used for search engines and browser tabs.',
            validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines'),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            rows: 3,
            description: 'Description for search engines.',
            validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
        }),
        defineField({
            name: 'canonicalUrl',
            title: 'Canonical URL',
            type: 'url',
            description: 'Override the default canonical URL if this content is syndicated.',
        }),
        defineField({
            name: 'noIndex',
            title: 'NoIndex',
            type: 'boolean',
            description: 'Hide this page from search engines.',
            initialValue: false,
        }),
        defineField({
            name: 'noFollow',
            title: 'NoFollow',
            type: 'boolean',
            description: 'Tell search engines not to follow links on this page.',
            initialValue: false,
        }),
        defineField({
            name: 'focusKeyword',
            title: 'Focus Keyword',
            type: 'string',
            description: 'For internal reference only.',
        }),
        defineField({
            name: 'ogTitle',
            title: 'Social Share Title (OG Title)',
            type: 'string',
            description: 'Title for social media cards. Defaults to Meta Title if empty.',
        }),
        defineField({
            name: 'ogDescription',
            title: 'Social Share Description (OG Description)',
            type: 'text',
            rows: 3,
            description: 'Description for social media cards. Defaults to Meta Description if empty.',
        }),
        defineField({
            name: 'ogImage',
            title: 'Social Share Image (OG Image)',
            type: 'image',
            description: 'Recommended size: 1200x630px',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'structuredData',
            title: 'Structured Data (JSON-LD)',
            type: 'text',
            rows: 10,
            description: 'Paste custom JSON-LD code here (e.g. FAQSchema, EventSchema).',
        }),
        defineField({
            name: 'redirectUrl',
            title: 'Redirect To (Legacy URL)',
            type: 'string',
            description: 'If this page replaces an old one, enter the old path here for redirection.',
        }),
    ],
})
