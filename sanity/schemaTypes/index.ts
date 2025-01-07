import { type SchemaTypeDefinition } from 'sanity'
import { Heading } from './heading'
import { BlogCard } from './blogCard'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Heading,BlogCard],
}
