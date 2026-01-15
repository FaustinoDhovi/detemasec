import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'  // ✅ Import 'schema' not 'schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'School Management System',
  projectId: 'ga7bqmvx',
  dataset: 'production',
  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],
  schema, // ✅ Use the imported 'schema' object
})