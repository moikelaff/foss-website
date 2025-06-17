import { CollectionConfig } from 'payload'

export const Programs: CollectionConfig = {
  slug: 'programs',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'isActive'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly version of the title',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Program featured image',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief program description',
      },
    },
    {
      name: 'fullDescription',
      type: 'richText',
      admin: {
        description: 'Detailed program information',
      },
    },
    {
      name: 'detailsPage',
      type: 'text',
      admin: {
        description: 'Link to the detailed program page (e.g., /academic-program/ma-political-science)',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
    {
      name: 'duration',
      type: 'text',
      admin: {
        description: 'Program duration (e.g., "2 Years", "3-4 Years")',
      },
    },
    {
      name: 'degree',
      type: 'select',
      options: [
        { label: 'Master of Arts (MA)', value: 'ma' },
        { label: 'Master in Public Policy (MPP)', value: 'mpp' },
        { label: 'Doctor of Philosophy (PhD)', value: 'phd' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Type of degree offered',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Make program visible to public',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate slug from title if not provided
        if (data.title && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        }
        return data;
      },
    ],
  },
}