import { imageRadiusOptions, imageShadowOptions, imageBorderOptions } from '../options'

export default {
    name: 'home_screenshotFeature1',
    title: 'Home Page Screenshot Feature 1 Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Home Page Screenshot Feature 1 Section Text',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_screenshotFeature1_text',
            title: 'Home Page Screenshot Feature 1 Section Text Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Screenshot Feature 1 Section Text Content',
                type: 'string'
              },
              {
                name: 'color',
                title: 'Home Page Screenshot Feature 1 Section Text Color',
                type: 'string'
              },
              {
                name: 'variant',
                title: 'Home Page Screenshot Feature 1 Section Text Variant',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'images',
        title: 'Home Page Screenshot Feature 1 Section Images',
        type: 'array',
        validation: Rule => Rule.length(1),
        of: [
          {
            name: 'home_screenshotFeature1_images',
            title: 'Home Page Screenshot Feature 1 Section Images Fields',
            type: 'object',
            fields: [
              {
                name: 'src',
                title: 'Home Page Screenshot Feature 1 Section Images Src',
                type: 'url'
              },
              {
                name: 'alt',
                title: 'Home Page Screenshot Feature 1 Section Images Alt',
                type: 'string',
                initialValue: 'alt text'
              },
              {
                name: 'radius',
                title: 'Home Page Screenshot Feature 1 Section Images Radius',
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
                title: 'Home Page Screenshot Feature 1 Section Images Shadow',
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
                title: 'Home Page Screenshot Feature 1 Section Image Border',
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
                title: 'Home Page Screenshot Feature 1 Section Image Effects',
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