import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'accessibleImage',
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
        defineField({
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Other Social Links',
            type: 'array',
            of: [{ type: 'url' }],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
