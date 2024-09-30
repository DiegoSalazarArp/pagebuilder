// ./schemas/videoType.js

import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const videoType = defineType({
    name: 'video',
    type: 'object',
    icon: DocumentTextIcon,
    preview: {
        select: {
            title: 'heading',
            image: 'image',
        },
        prepare({ title, image }) {
            return {
                title: title || 'Untitled',
                subtitle: 'Video',
                media: image || DocumentTextIcon,
            }
        },
    },
    fields: [
        defineField({
            name: 'videoLabel',
            type: 'string',
        }),
        defineField({
            name: 'url',
            type: 'string',
            title: 'URL',
        }),
    ],
})