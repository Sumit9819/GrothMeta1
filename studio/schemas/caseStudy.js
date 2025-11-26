import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'caseStudy',
    title: 'Case Study',
    type: 'document',
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'seo', title: 'SEO & Social' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Client / Title',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            group: 'content',
        }),
        defineField({
            name: 'clientLogo',
            title: 'Client Logo',
            type: 'accessibleImage',
            group: 'content',
        }),
        defineField({
            name: 'keyStatValue',
            title: 'Key Stat Value (e.g. 240)',
            type: 'number',
            group: 'content',
        }),
        defineField({
            name: 'keyStatPrefix',
            title: 'Key Stat Prefix (e.g. +)',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'keyStatSuffix',
            title: 'Key Stat Suffix (e.g. %)',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'keyStatLabel',
            title: 'Key Stat Label (e.g. ROI)',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'summary',
            title: 'Summary (Card Description)',
            type: 'text',
            group: 'content',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            group: 'content',
        }),
        defineField({
            name: 'detailedReport',
            title: 'Detailed Report',
            type: 'blockContent',
            group: 'content',
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        }),
    ],
})
