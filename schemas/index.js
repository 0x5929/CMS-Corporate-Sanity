// import all schemas from parent dir
import shared from './shared'
import baseBlockContents from './base'
import { home, about, services, pricing } from './pages'


export const schemaTypes = [

    // hoisting custom object/array types on top level
    ...baseBlockContents,

    // documents
    home,
    about,
    services,
    pricing,
    shared,
]
