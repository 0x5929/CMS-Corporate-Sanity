export default {
  name: 'shared_footer',
  title: 'Shared Content Footer Section',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Shared Content Footer Section Images',
      type: 'array',
      validation: Rule => Rule.length(1),

      of: [
        {
          name: 'shared_footer_images',
          title: 'Shared Content Footer Section Images Fields',
          type: 'object',
          fields: [
            {
              name: 'src',
              title: 'Shared Content Footer Section Images Src',
              type: 'url'
            },
            {
              name: 'alt',
              title: 'Shared Content Footer Section Images Alt',
              type: 'string',
              initialValue: 'alt text'
            },
          ]
        }
      ]
    },
    {
      name: 'collection',
      title: 'Shared Content Footer Section Collection',
      type: 'array',
      validation: Rule => Rule.length(3),

      of : [
        {
          name: 'shared_footer_collection',
          title: 'Shared Content Footer Section Collection Fields',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Shared Content Footer Section Collection Text',
              type: 'array',
              validation: Rule => Rule.length(1),

              of: [
                {
                  name: 'shared_footer_collectionText',
                  title: 'Shared Content Footer Section Collection Text Fields',
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Shared Content Footer Section Collection Text Content',
                      type: 'string'
                    }
                  ]
                }
              ]
            },
            {
              name: 'buttons',
              title: 'Shared Content Footer Section Collection Buttons',
              type: 'array',
              validation: Rule => Rule.length(3),

              of: [
                {
                  name: 'shared_footer_collectionButtons',
                  title: 'Shared Content Footer Section Collection Buttons Fields',
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Shared Content Footer Section Collection Buttons Text',
                      type: 'string'
                    },
                    {
                      name: 'type',
                      title: 'Shared Content Footer Section Collection Buttons Type',
                      type: 'string'
                    },
                    {
                      name: 'link',
                      title: 'Shared Content Footer Section Collection Buttons Link',
                      type: 'string'
                    },
                    {
                      name: 'variant',
                      title: 'Shared Content Footer Section Collection Buttons Variant',
                      type: 'string'
                    },
                    {
                      name: 'icon',
                      title: 'Shared Content Footer Section Collection Buttons Icon',
                      type: 'object',
                      fields: [
                        {
                          name: 'src',
                          title: 'Shared Content Footer Section Collection Buttons Icon Src',
                          type: 'string'
                        },
                        {
                          name: 'color',
                          title: 'Shared Content Footer Section Collection Buttons Icon Color',
                          type: 'string'
                        }
                      ]
                    },
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