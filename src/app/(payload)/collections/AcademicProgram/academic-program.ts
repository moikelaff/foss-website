import { CollectionConfig } from 'payload'

export const AcademicPrograms: CollectionConfig = {
  slug: 'academic-programs',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  admin: {
    useAsTitle: 'programName',
    defaultColumns: ['programName', 'slug', 'isActive'],
  },
  fields: [
    {
      name: 'programName',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'overview',
      type: 'richText',
    },
    {
      name: 'learningOutcomes',
      type: 'richText',
    },
    {
      name: 'courseStructure',
      type: 'richText',
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
