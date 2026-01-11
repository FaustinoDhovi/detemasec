// C:\Users\Fau\Desktop\Websites\detema-official\sanity.config.ts - FIXED
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'  // FIXED: correct path

export default defineConfig({
  name: 'default',
  title: 'Detema_Sec',

  projectId: 'ga7bqmvx',
  dataset: 'production',

  plugins: [
    structureTool(), // This should now work
    visionTool()
  ],

  schema: schema,
})