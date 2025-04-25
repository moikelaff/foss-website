// Update your create-admin.ts script to use more explicit credentials and add logging
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import payload from 'payload';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { postgresAdapter } from '@payloadcms/db-postgres';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the config inline to avoid import issues
const payloadConfig = buildConfig({
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
  ],
  db: postgresAdapter({
    pool: {
      host: process.env.POSTGRES_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'admin',
      database: process.env.POSTGRES_DB || 'foss_website',
      ssl: false,
    },
  }),
  secret: process.env.PAYLOAD_SECRET || 'foss-admin',
});

async function createAdmin() {
  try {
    // Initialize Payload with the inline config
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || 'foss-admin',
      local: true,
      config: payloadConfig,
    });

    console.log('Payload initialized successfully, creating admin user...');

    // Clear credentials
    const email = 'admin@example.com';
    const password = 'Password123!';

    // Check if the user exists already
    const existingUser = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: email,
        }
      },
    });

    if (existingUser.docs.length > 0) {
      console.log(`User ${email} already exists. Updating password...`);
      const updatedUser = await payload.update({
        collection: 'users',
        id: existingUser.docs[0].id,
        data: {
          password,
        },
      });
      console.log('Password updated successfully!');
    } else {
      // Create an admin user with explicitly clear credentials
      const admin = await payload.create({
        collection: 'users',
        data: {
          email: email,
          password: password,
          name: 'Admin User',
        },
      });
      console.log('Admin user created successfully:');
      console.log(`Email: ${admin.email}`);
      console.log(`Password has been set to: Password123!`);
    }
  } catch (error) {
    console.error('Error:');
    console.error(error);
  }

  // Exit the process
  process.exit(0);
}

createAdmin();