import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'
import { structure } from './structure' // Import your structure

export default defineConfig({
  name: 'default',
  title: 'School Management System',
  projectId: 'ga7bqmvx',
  dataset: 'production',
  plugins: [
    structureTool({
      structure, // Use your custom structure
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})