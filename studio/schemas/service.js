import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'seo', title: 'SEO & Social' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Service Name',
            type: 'string',
            group: 'content',
        }),
        defineField({
            name: 'slug',
            title: 'Slug (URL)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            group: 'content',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'accessibleImage',
            group: 'content',
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            group: 'content',
        }),
        defineField({
            name: 'features',
            title: 'Features List',
            type: 'array',
            of: [{ type: 'string' }],
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
