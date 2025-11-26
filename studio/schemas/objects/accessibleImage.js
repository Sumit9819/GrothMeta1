import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'accessibleImage',
    title: 'Image',
    type: 'image',
    options: {
        hotspot: true,
    },
    fields: [
        defineField({
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            description: 'Important for SEO and accessiblity.',
            validation: (Rule) => Rule.required().error('Alt text is required for accessibility.'),
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'Visible text displayed below the image.',
        }),
        defineField({
            name: 'titleAttribute',
            title: 'Title Attribute',
            type: 'string',
            description: 'Text displayed on hover.',
        }),
        defineField({
            name: 'attribution',
            title: 'Attribution / Credit',
            type: 'string',
            description: 'Photographer or source credit.',
        }),
    ],
})
