import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
// import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: 'default',
  title: 'E Cure Environment Backend',

  projectId: '654mbk54',
  dataset: 'production',

  basePath: "/admin",

  // plugins: [structureTool(), visionTool()],
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
