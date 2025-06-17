import { CollectionConfig } from 'payload'

export const LecturerActivities: CollectionConfig = {
  slug: 'lecturer-activities',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'lecturer', 'activityDate', 'category', 'isFeatured', 'isActive'],
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
      name: 'description',
      type: 'richText',
      required: true,
      admin: {
        description: 'Activity description and details',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Activity featured image',
      },
    },
    {
      name: 'lecturer',
      type: 'text',
      required: true,
      admin: {
        description: 'Lecturer name',
      },
    },
    {
      name: 'lecturerTitle',
      type: 'text',
      admin: {
        description: 'Academic title (Dr., Prof., etc.)',
      },
    },
    {
      name: 'department',
      type: 'text',
      admin: {
        description: 'Department or specialization',
      },
    },
    {
      name: 'activityDate',
      type: 'date',
      required: true,
      admin: {
        description: 'Activity date',
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Research Publication', value: 'research' },
        { label: 'Conference Presentation', value: 'conference' },
        { label: 'Awards & Recognition', value: 'awards' },
        { label: 'Grant & Funding', value: 'funding' },
        { label: 'Media Interview', value: 'media' },
        { label: 'Policy Consultation', value: 'policy' },
        { label: 'International Collaboration', value: 'collaboration' },
        { label: 'Community Engagement', value: 'community' },
        { label: 'Editorial Work', value: 'editorial' },
        { label: 'Teaching Excellence', value: 'teaching' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Type of activity',
      },
    },
    {
      name: 'institution',
      type: 'text',
      admin: {
        description: 'Institution or organization involved',
      },
    },
    {
      name: 'achievement',
      type: 'textarea',
      admin: {
        description: 'Specific achievement or outcome',
      },
    },
    {
      name: 'collaborators',
      type: 'textarea',
      admin: {
        description: 'Collaborators or co-authors',
      },
    },
    {
      name: 'publicationUrl',
      type: 'url',
      admin: {
        description: 'Link to publication or external resource',
      },
    },
    {
      name: 'mediaUrl',
      type: 'url',
      admin: {
        description: 'Link to media coverage or interview',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Feature this activity on homepage',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Make activity visible to public',
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