// imageGallery.js

import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const imageGalleryType = defineType({
    name: 'gallery',
    type: 'object',
    title: 'Gallery',
    icon: DocumentTextIcon,
    preview: {
        select: {
            title: 'heading',
            image: 'image',
        },
        prepare({ title, image }) {
            return {
                title: title || 'Untitled',
                subtitle: 'Gallery',
                media: image || DocumentTextIcon,
            }
        },
    },
    fields: [
        {
            name: 'images',
            type: 'array',
            of: [
                defineField({
                    name: 'image',
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                        },
                    ],
                }),
            ],
            options: {
                layout: 'grid',
            },
        },
    ],
})