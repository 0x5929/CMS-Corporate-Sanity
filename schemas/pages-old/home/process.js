
export default {
    name: 'home_process',
    title: 'Home Page Process Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Home Page Process Section Text',
        type: 'array',
        validation: Rule => Rule.length(2),
        of: [
          {
            name: 'home_process_text',
            title: 'Home Page Process Section Text Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home page Process Section Text Content',
                type: 'string'
              },
              {
                name: 'variant',
                title: 'Home page Process Section Text Variant',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'collection',
        title: 'Home Page Process Section Collection',
        type: 'array',
        validation: Rule => Rule.length(4),
        of: [
          {
            name: 'home_process_collection',
            title: 'Home Page Process Section Collection Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Process Section Collection Text',
                type: 'array',
                validation: Rule => Rule.length(2),
                of: [
                  {
                    name: 'home_process_collectionText',
                    title: 'Home Page Process Section Collection Text Fields',
                    type: 'object',
                    fields: [
                      {
                        name: 'text',
                        title: 'Home Page Process Section Collection Text Content',
                        type: 'string'
                      },
                      {
                        name: 'variant',
                        title: 'Home Page Process Section Collection Text Variant',
                        type: 'string'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'buttons',
        title: 'Home Page Process Section Buttons',
        type: 'array',
        validation: Rule => Rule.length(1),
        of: [
          {
            name: 'home_process_buttons',
            title: 'Home Page Process Section Buttons Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Process Section Buttons Text',
                type: 'string'
              },
              {
                name: 'type',
                title: 'Home Page Process Section Buttons Type',
                type: 'string',
                initialValue: 'MODAL',
                readonly: true,
                hidden: true
              },
              {
                name: 'link',
                title: 'Home Page Process Section Buttons Link',
                type: 'string',
                initialValue: 'contact',
                readOnly: true,
                hidden: true
              },
              {
                name: 'variant',
                title: 'Home Page Process Section Buttons Variant',
                type: 'string',
                initialValue: 'gradient',
                readOnly: true,
                hidden: true
              }
            ]
          }
        ]
      }
    ]
  }