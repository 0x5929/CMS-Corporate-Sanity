export default {
    name: 'BlockContentImage',
    title: 'Block Content Image',
    type: 'image',
    fields: [
        {
            name: 'position',
            title: 'Position',
            type: 'BlockContentImagePosition'
        },
        {
            name: 'effects',
            title: 'Effects',
            type: 'effects'
        },
        {
            name: 'alt',
            title: 'Alt',
            type: 'string'
        },
        {
            name: 'radius',
            title: 'Radius',
            type: 'string'
        },
        {
            name: 'shadow',
            title: 'Shadow',
            type: 'string'
        },
        {
            name: 'border',
            title: 'Border',
            type: 'string'
        },
        {
            name: 'width',
            title: 'Width',
            type: 'string'
        },
        {
            name: 'maxWidth',
            title: 'Max Width',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'BlockContentButton'
        }
    ]
}