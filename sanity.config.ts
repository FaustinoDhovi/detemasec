import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes' // Points to the new folder

export default defineConfig({
  name: 'default',
  title: 'Detema_Sec',

  projectId: 'ga7bqmvx',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool()
  ],

  schema: schema,
})