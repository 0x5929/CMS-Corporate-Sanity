export default {
    name: 'BlockContentFormField',
    title: 'Block Content Form Field',
    type: 'object',
    fields: [
        {
            name: 'identifier',
            title: 'Identifier',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Text', value: 'TEXT' },
                    { title: 'Text Area', value: 'TEXTAREA' },
                    { title: 'Email', value: 'EMAIL' },
                    { title: 'Password', value: 'PASSWORD' },
                    { title: 'Checkbox', value: 'CHECKBOX' },
                    { title: 'Hidden', value: 'HIDDEN' }
                  ]
            }
        },
        {
            name: 'compact',
            title: 'Compact',
            type: 'boolean'
        },
        {
            name: 'required',
            title: 'Required',
            type: 'boolean'
        },
        {
            name: 'placeholder',
            title: 'Placeholder',
            type: 'BlockContentText'
        },
        {
            name: 'value',
            title: 'Value',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'BlockContentIcon'
        }
    ]
}