export default {
    name: 'home_features',
    title: 'Home Page Features Section',
    type: 'object',
    fields: [
      {
        name: 'collection',
        title: 'Home Page Features Section Collection',
        type: 'array',
        validation: Rule => Rule.length(4),
        of: [
          {
            name: 'home_features_collection',
            title: 'Home Page Features Section Collection Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Features Section Collection Text',
                type: 'array',
                validation: Rule => Rule.length(2),
                of: [
                  {
                    name: 'home_features_collectionText',
                    title: 'Home Page Features Section Collection Text Fields',
                    type: 'object',
                    fields: [
                      {
                        name: 'text',
                        title: 'Home Page Features Section Collection Text Content',
                        type: 'string'
                      },
                      {
                        name: 'variant',
                        title: 'Home Page Features Section Collection Text variant',
                        type: 'string'
                      }
                    ]
                  }
                ]

              },
              {
                name: 'icons',
                title: 'Home page Features Section Collection Icons',
                type: 'object',
                fields: [
                  {
                    name: 'src',
                    title: 'Home page Features Section Collection Icons Src',
                    type: 'url'
                  },
                  {
                    name: 'color',
                    title: 'Home page Features Section Collection Icons Color',
                    type: 'string'
                  },
                  {
                    name: 'bg',
                    title: 'Home page Features Section Collection Icons Background Color',
                    type: 'string'
                  }
                ]
              },
              {
                name: 'buttons',
                title: 'Home Page Features Section Collection Buttons',
                type: 'array',
                validation: Rule => Rule.length(1),
                of: [
                  {
                   name: 'home_features_buttons',
                   title: 'Home Page Features Section Collection Buttons Fields',
                   type: 'object',
                   fields: [
                    {
                      name: 'text',
                      title: 'Home Page Features Section Collection Buttons Text',
                      type: 'string',
                      initialValue: 'Learn More   ➜'
                    },
                    {
                      name: 'type',
                      title: 'Home Page Features Section Collection Buttons Type',
                      type: 'string',
                      initialValue: 'PAGE',
                      readonly: true,
                      hidden: true
                    },
                    {
                      name: 'link',
                      title: 'Home Page Features Section Collection Buttons Link',
                      type: 'string',
                      initialValue: 'about',
                      readOnly: true,
                      hidden: true
                    },
                    {
                      name: 'variant',
                      title: 'Home Page Features Section Collection Buttons Variant',
                      type: 'string',
                      initialValue: 'links.normal',
                      readOnly: true,
                      hidden: true
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