import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

// This is the standard way to build the image URL
const builder = createImageUrlBuilder({ 
  projectId: projectId || '', 
  dataset: dataset || '' 
})

export const urlFor = (source: any) => {
  return builder.image(source)
}