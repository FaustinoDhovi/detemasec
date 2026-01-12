import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { rapidCSVIngester } from 'sanity-plugin-rapid-csv-ingester' // Correct import
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Detema_Sec',

  projectId: 'ga7bqmvx',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    rapidCSVIngester({}), // Add the plugin with empty config object
  ],

  schema: schema,
})