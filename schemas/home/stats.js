export default {
    name: 'home_stats',
    title: 'Home Page Stats Section',
    type: 'object',
    fields: [
      {
        name: 'container',
        title: 'Home Page Stats Section Container',
        type: 'object',
        fields: [
          {
            name: 'variant',
            title: 'Home page Stats Section Container Variant',
            type: 'string',
            readOnly: true,
            hidden: true,
            initialValue: ''
          }
        ]
      },
      {
        name: 'text',
        title: 'Home Page Stats Section Text',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_stats_text',
            title: 'Home Page Stats Section Text Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Stats Section Text Content',
                type: 'string'
              },
              {
                name: 'variant',
                title: 'Home Page Stats Section Text Variant',
                type: 'string'
              },
              {
                name: 'space',
                title: 'Home page Stats Section Text Spacing',
                type: 'number'
              }
            ]
          }
        ]
      },
      {
        name: 'collection',
        title: 'Home Page Stats Section Collection',
        type: 'array',
        validation: Rule => Rule.length(4),
        of: [
          {
            name: 'home_stats_collection',
            title: 'Home Page Stats Section Collection Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Stats Section Collection Text',
                type: 'array',
                validation: Rule => Rule.length(2),
                of: [
                  {
                    name: 'home_stats_collectionText',
                    title: 'Home Page Stats Section Collection Text Fields',
                    type: 'object',
                    fields: [
                      {
                        name: 'text',
                        title: 'Home Page Stats Section Collection Text Content',
                        type: 'string'
                      },
                      {
                        name: 'color',
                        title: 'Home Page Stats Section Collection Text Color',
                        type: 'string'
                      },
                      {
                        name: 'variant',
                        title: 'Home Page Stats Section Collection Text Variant',
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