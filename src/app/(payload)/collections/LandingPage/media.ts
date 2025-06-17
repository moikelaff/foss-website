import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  upload: {
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
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', 'application/pdf'],
    disableLocalStorage: false,
    // Add file handling options
    formatOptions: {
      format: 'webp',
      options: {
        quality: 85,
      },
    },
  },
  hooks: {
    beforeDelete: [
      ({ req, id }) => {
        console.log(`Attempting to delete media with ID: ${id}`);
      },
    ],
    afterDelete: [
      ({ req, id, doc }) => {
        console.log(`Successfully deleted media with ID: ${id}`);
      },
    ],
    // Add error handling for missing files
    beforeRead: [
      ({ req, doc }) => {
        if (doc && doc.filename) {
          const fs = require('fs');
          const path = require('path');
          const filePath = path.join(process.cwd(), 'media', doc.filename);
          
          if (!fs.existsSync(filePath)) {
            console.warn(`File missing: ${filePath}`);
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
}