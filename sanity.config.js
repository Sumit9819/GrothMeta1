import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/studio/schemas'

export default defineConfig({
    name: 'default',
    title: 'GrowthMeta Studio',

    projectId: 'jnbuqo69',
    dataset: 'production',
    basePath: '/studio',

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
