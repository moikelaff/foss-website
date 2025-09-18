import { CollectionConfig } from 'payload'

export const AlumniActivities: CollectionConfig = {
  slug: 'alumni-activities',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'alumniName', 'activityDate', 'category', 'isFeatured', 'isActive'],
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
      name: 'alumniName',
      type: 'text',
      required: true,
      admin: {
        description: 'Alumni name',
      },
    },
    {
      name: 'graduationYear',
      type: 'number',
      admin: {
        description: 'Year of graduation from UIII',
      },
    },
    {
      name: 'program',
      type: 'select',
      options: [
        { label: 'MA in Political Science', value: 'ma-political-science' },
        { label: 'PhD in Political Science', value: 'phd-political-science' },
        { label: 'Master in Public Policy', value: 'mpp' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Program graduated from',
      },
    },
    {
      name: 'currentPosition',
      type: 'text',
      admin: {
        description: 'Current job title or position',
      },
    },
    {
      name: 'currentOrganization',
      type: 'text',
      admin: {
        description: 'Current workplace or organization',
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
        { label: 'Career Achievement', value: 'career' },
        { label: 'Research & Publication', value: 'research' },
        { label: 'Entrepreneurship', value: 'entrepreneurship' },
        { label: 'Policy & Government', value: 'policy' },
        { label: 'International Recognition', value: 'international' },
        { label: 'Community Impact', value: 'community' },
        { label: 'Awards & Honors', value: 'awards' },
        { label: 'Media & Publications', value: 'media' },
        { label: 'University Collaboration', value: 'collaboration' },
        { label: 'Mentorship & Teaching', value: 'mentorship' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Type of activity',
      },
    },
    {
      name: 'achievement',
      type: 'textarea',
      admin: {
        description: 'Specific achievement or accomplishment',
      },
    },
    {
      name: 'impact',
      type: 'textarea',
      admin: {
        description: 'Impact or significance of the achievement',
      },
    },
    {
      name: 'linkedinUrl',
      type: 'text',
      admin: {
        description: 'Alumni LinkedIn profile',
      },
    },
    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        description: 'External link (news article, publication, etc.)',
      },
    },
    {
      name: 'quote',
      type: 'textarea',
      admin: {
        description: 'Inspirational quote from the alumni',
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