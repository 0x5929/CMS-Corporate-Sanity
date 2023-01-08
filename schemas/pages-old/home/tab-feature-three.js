import { imageRadiusOptions, imageShadowOptions, imageEffectOptions } from '../../options'

export default {
    name: 'home_tabFeature3',
    title: 'Home Page Tab Feature 3 Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Home Page Tab Feature 3 Section Text',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_tabFeature3_text',
            title: 'Home Page Tab Feature 3 Section Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Tab Feature 3 Section Text Content',
                type: 'string'
              },
              {
                name: 'variant',
                title: 'Home Page Tab Feature 3 Section Text Variant',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'images',
        title: 'Home Page Tab Feature 3 Section Images',
        type: 'array',
        validation: Rule => Rule.length(2),
        of: [
          {
            name: 'home_tabFeature3_imageFields',
            title: 'Home Page Tab Feature 3 Section Images Fields',
            type: 'object',
            fields: [
              {
                name: 'src',
                title: 'Home Page Tab Feature 3 Section Images Src',
                type: 'url'
              },
              {
                name: 'alt',
                title: 'Home Page Tab Feature 3 Section Images Alt',
                type: 'string',
                initialValue: 'alt text'
              },
              {
                name: 'radius',
                title: 'Home Page Tab Feature 3 Section Images Radius',
                type: 'string',
                options: {
                  list: imageRadiusOptions
                }
              },
              {
                name: 'shadow',
                title: 'Home Page Tab Feature 3 Section Images Shadow',
                type: 'string',
                options: {
                  list: imageShadowOptions
                }
              },
              {
                name: 'effects',
                title: 'Home Page Tab Feature 3 Section Images Effects',
                type: 'array',
                of: [{type: 'string'}],
                validation: Rule => Rule.max(2),
                options: {
                  list: imageEffectOptions
                }
              },
              {
                name: 'position',
                title: 'Home Page Tab Feature 3 Section Images Position',
                type: 'object',
                fields : [
                  {
                    name: 'top',
                    title: 'Home Page Tab Feature 3 Section Images Position Top',
                    type: 'string'
                  },
                  {
                    name: 'left',
                    title: 'Home Page Tab Feature 3 Section Images Position Left',
                    type: 'string'
                  },
                  {
                    name: 'right',
                    title: 'Home Page Tab Feature 3 Section Images Position Right',
                    type: 'string'
                  },
                  {
                    name: 'bottom',
                    title: 'Home Page Tab Feature 3 Section Images Position Bottom',
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
        title: 'Home Page Tab Feature 3 Section Collection',
        type: 'array',
        validation: Rule => Rule.length(2),
        of: [
          {
            name: 'home_tabFeature3_collection',
            title: 'Home Page Tab Feature 3 Section Collection Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Tab Feature 3 Section Collection Text',
                type: 'array',
                validation: Rule => Rule.length(2),
                of: [
                  {
                    name: 'home_tabFeature3_collectionText',
                    title: 'Home Page Tab Feature 3 Section Collection Text Fields',
                    type: 'object',
                    fields: [
                      {
                        name: 'text',
                        title: 'Home Page Tab Feature 3 Section Collection Text Content',
                        type: 'string'
                      },
                      {
                        name: 'variant',
                        title: 'Home Page Tab Feature 3 Section Collection Text Variant',
                        type: 'string'
                      }
                    ]
                  }
                ]
              },
              {
                name: 'icon',
                type: 'object',
                fields: [
                  {
                    name: 'src',
                    title: 'Home Page Tab Feature 3 Section Collection Icon Src',
                    type: 'url'
                  },
                  {
                    name: 'color',
                    title: 'Home Page Tab Feature 3 Section Collection Icon Color',
                    type: 'string'
                  },
                  {
                    name: 'bg',
                    title: 'Tab Feature 3 Collection Icon Background Background',
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