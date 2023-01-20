// import {theme} from 'https://themer.sanity.build/api/hues?default=darkest:15152e&primary=2276fc;50&transparent=8690a0;50&positive=43d675;300'

import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  // theme,
  name: 'default',
  title: 'CMS-Corporate-Sanity',

  projectId: 'dz3s2iiw',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
