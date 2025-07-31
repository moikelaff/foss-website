import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'

import { Media } from './src/app/(payload)/collections/LandingPage/media'
import { Hero } from './src/app/(payload)/collections/LandingPage/Hero'
import { Headlines } from './src/app/(payload)/collections/LandingPage/Headlines'
import { Research } from './src/app/(payload)/collections/LandingPage/Research'
import { Programs } from './src/app/(payload)/collections/LandingPage/Programs'
import { Users } from './src/app/(payload)/collections/Users'
import { Events } from './src/app/(payload)/collections/CampusLife/Events'
import { StudentsActivities } from './src/app/(payload)/collections/CampusLife/StudentsActivities'
import { LecturerActivities } from './src/app/(payload)/collections/CampusLife/LecturerActivities'
import { AlumniActivities } from './src/app/(payload)/collections/CampusLife/AlumniActivities'


export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Users,
    Media,

    // landing
    Hero,
    Programs,
    Headlines,
    Research,

    // campus life
    Events,
    // StudentActivities,
    // LecturerActivities,
    // AlumniActivities,
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  
  // PostgreSQL Database Adapter
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,

  // Admin panel configuration
  admin: {
    user: 'users',
  },

  // CORS settings for frontend access
  cors: [
    process.env.FRONTEND_URL || 'http://localhost:3001',
  ],

  // TypeScript generation
  typescript: {
    outputFile: './payload-types.ts',
  },
})