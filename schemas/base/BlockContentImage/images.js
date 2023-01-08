export default {
    name: 'images',
    title: 'Images',
    type: 'object',
    fields: [
        {
            name: 'fallback',
            title: 'Fallback Source Object',
            type: 'sourceObject'
        },
        {
            name: 'sources',
            title: 'Sources',
            type: 'sourceObjects'
        }
    ]
}