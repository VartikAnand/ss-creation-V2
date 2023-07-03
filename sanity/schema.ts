import { type SchemaTypeDefinition } from 'sanity'

import category from './schemas/category'
import post from './schemas/post'
import carousel from './schemas/carousel'
import navbarLink from './schemas/navbarLink'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,category,carousel,navbarLink],
}
