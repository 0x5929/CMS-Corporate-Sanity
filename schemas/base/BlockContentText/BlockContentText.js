export default {
    name: 'BlockContentText',
    title: 'Block Content Text',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'textGroup',
            title: 'Text Groups',
            type: 'textGroup'
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
        },
        {
            name: 'space',
            title: 'Space',
            type: 'number'
        },
        {
            name: 'variant',
            title: 'Variant',
            type: 'string'
        }
    ]
}