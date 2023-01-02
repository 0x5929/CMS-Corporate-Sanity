import { imageRadiusOptions, imageShadowOptions, imageEffectOptions } from '../options'

export default {
    name: 'home_tabFeature2',
    title: 'Home Page Tab Feature 2 Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Home Page Tab Feature 2 Section Text',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_tabFeature2_text',
            title: 'Home Page Tab Feature 2 Section Text Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                type: 'string',
                title: 'Home Page Tab Feature 2 Section Text Content'
              },
              {
                name: 'variant',
                type: 'string',
                title: 'Home Page Tab Feature 2 Section Text Variant',
              }
            ]
          }
        ]
      },
      {
        name: 'images',
        title: 'Home Page Tab Feature 2 Section Text Images',
        type: 'array',
        validation: Rule => Rule.length(4),
        of: [
          {
            name: 'home_tabFeature2_images',
            title: 'Home Page Tab Feature 2 Section Text Images Fields',
            type: 'object',
            fields: [
              {
                name: 'src',
                title: 'Home Page Tab Feature 2 Section Images Src',
                type: 'url'
              },
              {
                name: 'alt',
                title: 'Home Page Tab Feature 2 Section Images Alt',
                type: 'string',
                initialValue: 'alt text'
              },
              {
                name: 'radius',
                title: 'Home Page Tab Feature 2 Section Images Radius',
                type: 'string',
                options: {
                  list: imageRadiusOptions
                }
              },
              {
                name: 'shadow',
                title: 'Home Page Tab Feature 2 Section Images Shadow',
                type: 'string',
                options: {
                  list: imageShadowOptions
                }
              },
              {
                name: 'effects',
                title: 'Home Page Tab Feature 2 Section Images Effects',
                type: 'array',
                of: [{type: 'string'}],
                validation: Rule => Rule.max(2),
                options: {
                  list: imageEffectOptions
                }
              },
              {
                name: 'position',
                title: 'Home Page Tab Feature 2 Section Images Position',
                type: 'object',
                fields : [
                  {
                    name: 'top',
                    title: 'Home Page Tab Feature 2 Section Images Position Top',
                    type: 'string'
                  },
                  {
                    name: 'left',
                    type: 'string',
                    title: 'Home Page Tab Feature 2 Section Images Position Left'
                  },
                  {
                    name: 'right',
                    title: 'Home Page Tab Feature 2 Section Images Position Right',
                    type: 'string'
                  },
                  {
                    name: 'bottom',
                    title: 'Home Page Tab Feature 2 Section Images Position Bottom',
                    type: 'string'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'collection',
        title: 'Home Page Tab Feature 2 Section Collection',
        type: 'array',
        validation: Rule => Rule.length(2),
        of: [
          {
            name: 'home_tabFeature2_collection',
            title: 'Home Page Tab Feature 2 Section Collection Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                type: 'array',
                title: 'Home Page Tab Feature 2 Section Collection Text',
                validation: Rule => Rule.length(3),
                of: [
                  {
                    name: 'home_tabFeature2_collectionText',
                    title: 'Home Page Tab Feature 2 Collection Text Fields',
                    type: 'object',
                    fields: [
                      {
                        name: 'text',
                        title: 'Home Page Tab Feature 2 Collection Text Content',
                        type: 'string'
                      },
                      {
                        name: 'color',
                        title: 'Home Page Tab Feature 2 Collection Text Color',
                        type: 'string'
                      },
                      {
                        name: 'variant',
                        title: 'Home Page Tab Feature 2 Collection Text Variant',
                        type: 'string'
                      },
                      {
                        name: 'space',
                        title: 'Home Page Tab Feature 2 Collection Text Spacing',
                        type: 'number'
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