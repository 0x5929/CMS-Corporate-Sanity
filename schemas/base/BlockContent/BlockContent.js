export default {
    name: 'BlockContent',
    title: 'Block Content',
    type: 'object',
    fields: [
        {
            name: 'identifier',
            title: 'Identifier',
            type: 'string'
        },
        {
            name: 'page',
            title: 'Page',
            type: 'string'
        },
        {
            name: 'container',
            title: 'Container',
            type: 'BlockContentContainer'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'BlockContentTexts'
        },
        {
            name: 'images',
            title: 'Images',
            type: 'BlockContentImages'
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'BlockContentImage'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'BlockContentIcon'
        },
        {
            name: 'map',
            title: 'Map',
            type: 'BlockContentMap'
        },
        {
            name: 'buttons',
            title: 'Buttons',
            type: 'BlockContentButtons'
        },
        {
            name: 'form',
            title: 'Form',
            type: 'BlockContentForm'
        },
        {
            name: 'collection',
            title: 'Collection',
            type: 'BlockContents',
        }
        
    ]
}