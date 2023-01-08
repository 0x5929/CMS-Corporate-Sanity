export default {
    name: 'BlockContentButton',
    title: 'Block Content Button',
    type: 'object',
    fields: [
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Page', value: 'PAGE' },
                    { title: 'App', value: 'APP' },
                    { title: 'Video', value: 'VIDEO' },
                    { title: 'Anchor', value: 'ANCHOR' },
                    { title: 'Modal', value: 'MODAL' },
                    { title: 'Tab', value: 'TAB' },
                    { title: 'Submit', value: 'SUBMIT' },
                    { title: 'Sub', value: 'SUB' }
                  ]
            }
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'target',
            title: 'Target',
            type: 'string'
        },
        {
            name: 'variant',
            title: 'Variant',
            type: 'string'
        },
        {
            name: 'width',
            title: 'Width',
            type: 'string'
        },
        {
            name: 'bg',
            title: 'Background',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'BlockContentIcon'
        },
        {
            name: 'collection',
            title: 'Collection',
            type: 'Blockcontents'
        },
        {
            name: 'buttons',
            title: 'Buttons',
            type: 'BlockContentButtons'
        }
    
    ]
}