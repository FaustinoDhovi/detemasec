import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env' // Fixed: Added one more level up

const builder = createImageUrlBuilder({ 
  projectId: projectId || '', 
  dataset: dataset || '' 
})

export const urlFor = (source: any) => {
  return builder.image(source)
}