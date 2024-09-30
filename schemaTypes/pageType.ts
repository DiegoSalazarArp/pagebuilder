// ./schemas/pageType.ts

import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const pageType = defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    icon: DocumentTextIcon,
    preview: {
        select: {
            title: 'heading',
            image: 'image',
        },
        prepare({ title, image }) {
            return {
                title: title || 'Untitled',
                subtitle: 'Hero',
                media: image || DocumentTextIcon,
            }
        },
    },
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
            name: 'pageBuilder',
            type: 'array',
            title: 'Page builder',
            of: [
                defineArrayMember({
                    name: 'hero',
                    type: 'hero',
                }),
                defineArrayMember({
                    name: 'textWithIllustration',
                    type: 'textWithIllustration',
                }),
                defineArrayMember({
                    name: 'gallery',
                    type: 'gallery',
                }),
                defineArrayMember({
                    name: 'form',
                    type: 'form',
                }),
                defineArrayMember({
                    name: 'video',
                    type: 'video',
                }),
                defineArrayMember({
                    name: 'callToAction',
                    type: 'reference',
                    to: [{ type: 'promotion' }],
                }),
                // etc...
            ],
            options: {
                layout: 'grid',
                insertMenu: {
                    filter: true,
                    groups: [
                        {
                            name: 'landing',
                            title: 'Landing Page',
                            of: ['hero', 'promotion', 'form'],
                        },
                        {
                            name: 'promotions',
                            title: 'Promotions',
                            of: ['gallery', 'video', 'promotion'],
                        },
                        {
                            name: 'blackFriday',
                            title: 'Black Friday',
                            of: ['textWithIllustration', 'gallery', 'video'],
                        }
                    ],
                    views: [
                        { name: 'list' },
                        {
                            name: 'grid',
                            previewImageUrl: (schemaTypeName) => `/static/preview-${schemaTypeName}.jpg`
                        }
                    ]
                }
            },
        }),
    ],
})