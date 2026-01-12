import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env' 

const builder = createImageUrlBuilder({ 
  projectId: projectId || 'ga7bqmvx', 
  dataset: dataset || 'production' 
})

export const urlFor = (source: any) => {
  if (!source) return null
  return builder.image(source)
}