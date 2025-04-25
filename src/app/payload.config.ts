import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { buildConfig } from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';
// Add this import for Pool config type
import type { PoolConfig } from 'pg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define pool configuration object separately
const poolConfig: PoolConfig = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'admin',
  database: process.env.POSTGRES_DB || 'foss_website',
  // Disable native libraries and Cloudflare features
  ssl: false,
};

export default buildConfig({
  admin: {
    user: 'users',
  },
  editor: lexicalEditor({}),
  collections: [
    {
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
      ],
    },
    // Add other collections as needed for your company profile
  ],
  db: postgresAdapter({
    // Pass the configuration object instead of a Pool instance
    // This avoids potential initialization issues with certain environments
    pool: poolConfig,
  }),
  secret: process.env.PAYLOAD_SECRET || 'foss-admin',

  // Set the correct paths for migrations and media
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  // Define graphQL endpoint
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})