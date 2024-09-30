// ./schemas/formType.js

import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const formType = defineType({
    name: 'form',
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
                subtitle: 'Form',
                media: image || DocumentTextIcon,
            }
        },
    },
    fields: [
        defineField({
            name: 'label',
            type: 'string',
        }),
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'form',
            type: 'string',
            description: 'Select form type',
            options: {
                list: ['newsletter', 'register', 'contact'],
            },
        }),
    ],
})