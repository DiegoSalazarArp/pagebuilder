// ./schemas/textWithIllustration.js

import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const textWithIllustrationType = defineType({
    name: 'textWithIllustration',
    type: 'object',
    title: 'Text with Illustration',

    icon: DocumentTextIcon,
    preview: {
        select: {
            title: 'heading',
            image: 'image',
        },
        prepare({ title, image }) {
            return {
                title: title || 'Untitled',
                subtitle: 'Text with Illustration',
                media: image || DocumentTextIcon,
            }
        },
    },
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'tagline',
            type: 'string',
        }),
        defineField({
            name: 'excerpt',
            type: 'text',
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }),
            ],
        }),
    ],
})