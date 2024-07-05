import { defineField } from "sanity";

export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'string',
            description: 'The slug of the service',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the service',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'The description of the service',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ],
            description: 'Content description of the service (Portable Text)',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subservices',
            title: 'Subservices',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'service' }]
                }
            ],
            description: 'Subservices associated with this service'
        },),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true // Enables hotspot for image
            },
            description: 'Image associated with the service'
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Is featured service or not',
            initialValue: false
        }),
    ]
};
