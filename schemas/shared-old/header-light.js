export default {
  name: 'shared_headerLight',
  title: 'Shared Content Header Light Section',
  type: 'object',
  fields: [
    {
    name: 'images',
    title: 'Shared Content Header Light Section Images',
    type: 'array',
    validation: Rule => Rule.length(1),
  
    of : [
      {
      name: 'shared_headerLight_images',
      title: 'Shared Content Header Light Section Images Fields',
      type: 'object',
      fields: [
        {
        name: 'src',
        title: 'Shared Content Header Light Section Images Src',
        type: 'url'
        },
        {
        name: 'alt',
        title: 'Shared Content Header Light Section Images Alt',
        type: 'string'
        }
      ]
      }
    ]
    },
    {
    name: 'collection',
    title: 'Shared Content Header Light Section Collection',
    type: 'array',
    validation: Rule => Rule.length(2),
  
    of : [
      {
      name: 'shared_headerLight_collection',
      title: 'Shared Content Header Light Section Collection Fields',
      type: 'object',
      fields: [
        {
        name: 'buttons',
        title: 'Shared Content Header Light Section Collection Buttons',
        type: 'array',
        validation: Rule => Rule.max(4),
  
        of: [
          {
          name: 'shared_headerLight_collectionButtons',
          title: 'Shared Content Header Light Section Collection Buttons Fields',
          type: 'object',
          fields: [
            {
            name: 'text',
            title: 'Shared Content Header Light Section Collection Buttons Text',
            type: 'string'
            },
            {
            name: 'type',
            title: 'Shared Content Header Light Section Collection Buttons Type',
            type: 'string'
            },
            {
            name: 'variant',
            title: 'Shared Content Header Light Section Collection Buttons Variant',
            type: 'string'
            },
            {
            name: 'link',
            title: 'Shared Content Header Light Section Collection Buttons Link',
            type: 'string'
            }
          ]
          }
        ]
        }
      ]
      }
    ]
    }
  ]
  }