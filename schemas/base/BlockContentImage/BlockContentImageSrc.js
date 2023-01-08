export default {
    name: 'BlockContentImageSrc',
    title: 'Block Content Image Source',
    type: 'object',
    fields: [
        {
            name: 'extension',
            title: 'Extension',
            type: 'string'
        },
        {
            name: 'publicURL',
            title: 'Public Url',
            type: 'string'
        },
        {
            name: 'childImageSharp',
            title: 'Child Image Sharp',
            type: 'ChildImageSharp'
        }
    ]
}