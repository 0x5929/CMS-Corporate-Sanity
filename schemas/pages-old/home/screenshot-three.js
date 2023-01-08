import { imageRadiusOptions, imageShadowOptions, imageBorderOptions } from '../../options'

export default {
    name: 'home_screenshotFeature3',
    title: 'Home Page Screenshot Feature 3 Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Home Page Screenshot Feature 3 Section Text',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_screenshotFeature3_text',
            title: 'Home Page Screenshot Feature 3 Section Text Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Screenshot Feature 3 Section Text Content',
                type: 'string'
              },
              {
                name: 'color',
                title: 'Home Page Screenshot Feature 3 Section Text Content',
                type: 'string'
              },
              {
                name: 'variant',
                title: 'Home Page Screenshot Feature 3 Section Text Variant',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'images',
        title: 'Home Page Screenshot Feature 3 Section Images',
        type: 'array',
        validation: Rule => Rule.length(1),
        of: [
          {
            name: 'home_screenshotFeature3_image',
            title: 'Home Page Screenshot Feature 3 Section Images Fields',
            type: 'object',
            fields: [
              {
                name: 'src',
                title: 'Home Page Screenshot Feature 3 Section Images Src',
                type: 'url'
              },
              {
                name: 'alt',
                title: 'Home Page Screenshot Feature 3 Section Images Text',
                type: 'string',
                initialValue: 'alt text'
              },
              {
                name: 'radius',
                title: 'Home Page Screenshot Feature 3 Section Images Radius',
                type: 'string',
                options: {
                  list: imageRadiusOptions
                },
                initialValue: 'lg',
                readOnly: true,
                hidden: true,
              },
              {
                name: 'shadow',
                title: 'Home Page Screenshot Feature 3 Section Images Shadow',
                type: 'string',
                options: {
                  list: imageShadowOptions
                },
                initialValue: 'default',
                readOnly: true,
                hidden: true,
              },
              {
                name: 'border',
                title: 'Home Page Screenshot Feature 3 Section Images Border',
                type: 'string',
                options: {
                  list: imageBorderOptions
                },
                initialValue: 'lg',
                readOnly: true,
                hidden: true,
              },
              {
                name: 'effects',
                title: 'Home Page Screenshot Feature 3 Section Images Effects',
                type: 'array',
                validation: Rule => Rule.length(1),
                readOnly: true,
                hidden: true,
                initialValue : ['fadeInDown'],
                of : [{type: 'string'}]
              }
            ]
          }
        ]
      }
    ]
  }
