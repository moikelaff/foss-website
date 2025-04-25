import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { buildConfig } from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';
import type { PoolConfig } from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the database connection config
const poolConfig: PoolConfig = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'admin',
  database: process.env.POSTGRES_DB || 'university_website',
  ssl: false,
};

// Simplify the lexical editor configuration
const lexicalEditorConfig = lexicalEditor();

// Define Media collection for images, documents, etc.
const Media = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'banner',
        width: 1440,
        height: 600,
        position: 'centre',
      }
    ],
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'application/pdf', 'application/msword'],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
    }
  ],
};

// Users collection for CMS admins
const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Content Creator',
          value: 'creator',
        },
      ],
      defaultValue: ['creator'],
      required: true,
    },
  ],
};

// Pages collection for general content pages
const Pages = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  access: {
    read: () => true,
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
        description: 'URL-friendly version of the title (e.g., "about-us")',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
};

// Announcements collection for time-sensitive content like admissions
const Announcements = {
  slug: 'announcements',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'startDate', 'endDate', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Admission',
          value: 'admission',
        },
        {
          label: 'Event',
          value: 'event',
        },
        {
          label: 'News',
          value: 'news',
        },
        {
          label: 'Alert',
          value: 'alert',
        },
      ],
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      required: true,
    },
  ],
};

// Courses collection for academic offerings that change each semester
const Courses = {
  slug: 'courses',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['code', 'title', 'department', 'semester'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'department',
      type: 'text',
      required: true,
    },
    {
      name: 'credits',
      type: 'number',
      required: true,
    },
    {
      name: 'semester',
      type: 'select',
      options: [
        {
          label: 'Fall',
          value: 'fall',
        },
        {
          label: 'Spring',
          value: 'spring',
        },
        {
          label: 'Summer',
          value: 'summer',
        },
        {
          label: 'Winter',
          value: 'winter',
        },
      ],
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      min: 2000,
      max: 2050,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
      ],
      defaultValue: 'active',
      required: true,
    },
    {
      name: 'prerequisites',
      type: 'relationship',
      relationTo: 'courses',
      hasMany: true,
    },
    {
      name: 'instructors',
      type: 'text',
      hasMany: true,
    },
  ],
};

// Faculty collection for professor profiles
const Faculty = {
  slug: 'faculty',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'department'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'officeHours',
      type: 'text',
    },
    {
      name: 'research',
      type: 'array',
      fields: [
        {
          name: 'topic',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
};

// Main config export
export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- University CMS',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  // Use the predefined lexicalEditorConfig
  editor: lexicalEditorConfig,
  collections: [
    Users,
    Media,
    Pages,
    Announcements,
    Courses,
    Faculty,
  ],
  db: postgresAdapter({
    pool: poolConfig,
  }),
  secret: process.env.PAYLOAD_SECRET || 'university-cms-secret',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})