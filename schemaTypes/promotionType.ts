// ./schemas/promotionType.ts

import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const promotionType = defineType({
    name: 'promotion',
    type: 'document',
    title: 'Promotion',
    icon: DocumentTextIcon,
    preview: {
        select: {
            title: 'heading',
            image: 'image',
        },
        prepare({ title, image }) {
            return {
                title: title || 'Untitled',
                subtitle: 'Promotion',
                media: image || DocumentTextIcon,
            }
        },
    },
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'link',
            type: 'url',
        }),
    ],
})