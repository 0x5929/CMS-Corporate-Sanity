export default {
    name: 'BlockContentForm',
    title: 'Block Content Form',
    type: 'object',
    fields: [
        {
            name: 'action',
            title: 'Action',
            type: 'string'
        },
        {
            name: 'multiStep',
            title: 'Multi Step',
            type: 'boolean'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'BlockContentTexts'
        },
        {
            name: 'buttons',
            title: 'Buttons',
            type: 'BlockContentButtons'
        },
        {
            name: 'fields',
            title: 'Fields',
            type: 'BlockContentFormFields'
        }
    ]
}