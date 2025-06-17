import { CollectionConfig } from 'payload'

export const Research: CollectionConfig = {
  slug: 'research',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'publishedDate', 'category', 'isFeatured', 'isActive'],
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
      name: 'author',
      type: 'text',
      required: true,
      admin: {
        description: 'Research author(s)',
      },
    },
    {
      name: 'abstract',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Research abstract/summary',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Research thumbnail image',
      },
    },
    {
      name: 'content',
      type: 'richText',
      admin: {
        description: 'Full research paper content',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      required: true,
    },
    {
      name: 'pdfFile',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload research paper PDF',
      },
    },
    {
      name: 'keywords',
      type: 'array',
      fields: [
        {
          name: 'keyword',
          type: 'text',
        },
      ],
      admin: {
        description: 'Research keywords for search and categorization',
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Political Science', value: 'political-science' },
        { label: 'Public Policy', value: 'public-policy' },
        { label: 'International Relations', value: 'international-relations' },
        { label: 'Comparative Politics', value: 'comparative-politics' },
        { label: 'Political Theory', value: 'political-theory' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Research category',
      },
    },
    {
      name: 'researchType',
      type: 'select',
      options: [
        { label: 'Journal Article', value: 'journal' },
        { label: 'Working Paper', value: 'working-paper' },
        { label: 'Conference Paper', value: 'conference' },
        { label: 'Book Chapter', value: 'book-chapter' },
        { label: 'Thesis/Dissertation', value: 'thesis' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Type of research publication',
      },
    },
    {
      name: 'journal',
      type: 'text',
      admin: {
        description: 'Journal name (if applicable)',
        condition: (data) => data.researchType === 'journal',
      },
    },
    {
      name: 'doi',
      type: 'text',
      admin: {
        description: 'Digital Object Identifier (DOI)',
      },
    },
    {
      name: 'externalUrl',
      type: 'url',
      admin: {
        description: 'External link to full research paper',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Show on homepage',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Make research visible to public',
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