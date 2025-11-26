import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'seo', title: 'SEO & Social' },
        { name: 'meta', title: 'Meta & E-E-A-T' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
            name: 'mainImage',
            title: 'Main image',
            type: 'accessibleImage',
            group: 'content',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            group: 'content',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            group: 'meta',
        }),
        defineField({
            name: 'reviewer',
            title: 'Reviewed By',
            type: 'reference',
            to: { type: 'author' },
            description: 'Expert reviewer for E-E-A-T.',
            group: 'meta',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            group: 'meta',
        }),
        defineField({
            name: 'lastModified',
            title: 'Last Modified',
            type: 'datetime',
            group: 'meta',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
            group: 'meta',
        }),
        defineField({
            name: 'relatedPosts',
            title: 'Related Posts',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'post' } }],
            group: 'content',
        }),
        defineField({
            name: 'showTableOfContents',
            title: 'Show Table of Contents',
            type: 'boolean',
            initialValue: false,
            group: 'content',
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo',
        }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})
