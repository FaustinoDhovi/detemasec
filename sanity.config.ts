/**
 * This configuration is used for the Sanity Studio that's mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Get environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// If you want to use separate schema and structure files, you need to create them first
// For now, let's use a basic inline setup

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  
  // Start with empty schemas - we'll add them later
  schema: {
    types: [],
  },
  
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})