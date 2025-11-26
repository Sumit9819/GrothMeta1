import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'clientName',
            title: 'Client Name',
            type: 'string',
        }),
        defineField({
            name: 'clientRole',
            title: 'Client Role (e.g. CMO, TechFlow)',
            type: 'string',
        }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
        }),
        defineField({
            name: 'headshot',
            title: 'Headshot',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
