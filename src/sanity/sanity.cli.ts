import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ga7bqmvx',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
  deployment: {
    appId: 'xcni9pnkn1dml4z3shjyxg7n',
  },
})
