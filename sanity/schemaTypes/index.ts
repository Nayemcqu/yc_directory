import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { startup } from './startup'
import { playlist } from './playlist'
console.log('author:', author.name)
console.log('startup:', startup.name)


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup,playlist],
}