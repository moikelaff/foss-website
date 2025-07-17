import { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'title',
  },
  // Remove the upload configuration - we'll use Media collection instead
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'UIII ADMISSIONS 2025/2026 NOW OPEN',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Take the next step in your academic journey with our world-class programs',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Upload or select background image for the hero section',
      },
    },
    {
      name: 'ctaButtons',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
        },
        {
          name: 'style',
          type: 'select',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
          ],
          defaultValue: 'primary',
        },
      ],
      minRows: 1,
      maxRows: 3,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}