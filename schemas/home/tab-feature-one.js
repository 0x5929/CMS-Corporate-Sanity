import { imageRadiusOptions, imageShadowOptions, imageEffectOptions } from '../options'

export default {
    name: 'home_tabFeature1',
    title: 'Home Page Tab Feature 1 Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Home Page Tab Feature 1 Section Text',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_tabFeature1_text',
            title: 'Home Page Tab Feature 1 Section Text Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Tab Feature 1 Section Text Content',
                type: 'string'
              },
              {
                name: 'variant',
                title: 'Home Page Tab Feature 1 Section Text Variant',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'images',
        title: 'Home Page Tab Feature 1 Section Text Images',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_tabFeature1_images',
            title: 'Home Page Tab Feature 1 Section Text Images Fields',
            type: 'object',
            fields: [
              {
                name: 'src',
                title: 'Home Page Tab Feature 1 Section Images Src',
                type: 'url'
              },
              {
                name: 'alt',
                title: 'Home Page Tab Feature 1 Section Images Alt',
                type: 'string',
                initialValue: 'alt text'
              },
              {
                name: 'radius',
                title: 'Home Page Tab Feature 1 Section Images Radius',
                type: 'string',
                options: {
                  list: imageRadiusOptions
                }
              },
              {
                name: 'shadow',
                title: 'Home Page Tab Feature 1 Section Images Shadow',
                type: 'string',
                options: {
                  list: imageShadowOptions
                }
              },
              {
                name: 'effects',
                title: 'Home Page Tab Feature 1 Section Images Effects',
                type: 'array',
                of: [{type: 'string'}],
                validation: Rule => Rule.max(2),
                options: {
                  list: imageEffectOptions
                }
              },
              {
                name: 'position',
                type: 'object',
                title: 'Home Page Tab Feature 1 Section Images Position',
                fields : [
                  {
                    name: 'top',
                    title: 'Home Page Tab Feature 1 Section Images Position Top',
                    type: 'string',
                  },
                  {
                    name: 'left',
                    title: 'Home Page Tab Feature 1 Section Images Position Left',
                    type: 'string',
                  },
                  {
                    name: 'right',
                    title: 'Home Page Tab Feature 1 Section Images Position Right',
                    type: 'string',
                  },
                  {
                    name: 'bottom',
                    title: 'Home Page Tab Feature 1 Section Images Position Bottom',
                    type: 'string',
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'collection',
        title: 'Home Page Tab Feature 1 Section Collection',
        type: 'array',
        validation: Rule => Rule.length(4),
        of: [
          {
            name: 'home_tabFeature1_collection',
            title: 'Home Page Tab Feature 1 Section Collection Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Tab Feature 1 Section Collection Text',
                type: 'array',
                validation: Rule => Rule.length(1),
                of: [
                  {
                    name: 'home_tabFeature1_collectionText',
                    title: 'Home Page Tab Feature 1 Section Collection Text Fields',
                    type: 'object',
                    fields: [
                      {
                        name: 'text',
                        title: 'Home page Tab Feature 1 Section Collection Text Content',
                        type: 'string'
                      }
                    ]
                  }
                ]
              },
              {
                name: 'icon',
                title: 'Home Page Tab Feature 1 Section Collection Icon',
                type: 'object',
                fields: [
                  {
                    name: 'src',
                    title: 'Home Page Tab Feature 1 Section Collection Icon Src',
                    type: 'url'
                  },
                  {
                    name: 'color',
                    title: 'Home Page Tab Feature 1 Section Collection Icon Color',
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