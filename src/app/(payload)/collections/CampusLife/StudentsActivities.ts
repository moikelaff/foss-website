import { CollectionConfig } from 'payload'

export const StudentActivities: CollectionConfig = {
  slug: 'student-activities',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'student', 'activityDate', 'category', 'isFeatured', 'isActive'],
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
      name: 'student',
      type: 'text',
      required: true,
      admin: {
        description: 'Student name(s) involved',
      },
    },
    {
      name: 'studentYear',
      type: 'select',
      options: [
        { label: 'First Year', value: '1st-year' },
        { label: 'Second Year', value: '2nd-year' },
        { label: 'Third Year', value: '3rd-year' },
        { label: 'Fourth Year', value: '4th-year' },
        { label: 'Graduate Student', value: 'graduate' },
        { label: 'PhD Student', value: 'phd' },
      ],
      admin: {
        description: 'Student academic level',
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
        description: 'Student program',
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
        { label: 'Academic Achievement', value: 'academic' },
        { label: 'Research Project', value: 'research' },
        { label: 'Conference Presentation', value: 'conference' },
        { label: 'Community Service', value: 'community' },
        { label: 'Leadership', value: 'leadership' },
        { label: 'Awards & Recognition', value: 'awards' },
        { label: 'Internship', value: 'internship' },
        { label: 'Publication', value: 'publication' },
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
        description: 'Specific achievement or outcome',
      },
    },
    {
      name: 'mentor',
      type: 'text',
      admin: {
        description: 'Faculty mentor or supervisor (if applicable)',
      },
    },
    {
      name: 'externalUrl',
      type: 'url',
      admin: {
        description: 'External link (portfolio, publication, etc.)',
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