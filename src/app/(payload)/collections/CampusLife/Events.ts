import { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'eventDate', 'isUpcoming', 'isActive'],
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
        description: 'Event description and details',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Event poster/featured image',
      },
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
      admin: {
        description: 'Event date',
      },
    },
    {
      name: 'eventTime',
      type: 'text',
      admin: {
        description: 'Event time (e.g., "14:00 - 15:30 PM JKT")',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Event location',
      },
    },
    {
      name: 'registerLink',
      type: 'text',
      admin: {
        description: 'Registration link (optional)',
      },
    },
    {
      name: 'eventType',
      type: 'select',
      options: [
        { label: 'Brownbag Series', value: 'brownbag' },
        { label: 'Workshop', value: 'workshop' },
        { label: 'Seminar', value: 'seminar' },
        { label: 'Conference', value: 'conference' },
        { label: 'Lecture', value: 'lecture' },
        { label: 'Other', value: 'other' },
      ],
      admin: {
        description: 'Type of event',
      },
    },
    {
      name: 'speaker',
      type: 'text',
      admin: {
        description: 'Event speaker/presenter',
      },
    },
    {
      name: 'speakerBio',
      type: 'textarea',
      admin: {
        description: 'Speaker biography',
      },
    },
    {
      name: 'isUpcoming',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Mark as upcoming event',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Feature this event on homepage',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Make event visible to public',
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
        
        // Auto-determine if event is upcoming based on date
        if (data.eventDate) {
          const eventDate = new Date(data.eventDate);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          data.isUpcoming = eventDate >= today;
        }
        
        return data;
      },
    ],
  },
}