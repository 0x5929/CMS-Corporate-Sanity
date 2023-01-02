import { imageRadiusOptions, imageShadowOptions, imageBorderOptions } from '../options'

export default {
    name: 'home_screenshotFeature2',
    title: 'Home Page Screenshot Feature 2 Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Home Page Screenshot Feature 2 Section Text',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_screenshotFeature2_text',
            title: 'Home Page Screenshot Feature 2 Section Text Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Screenshot Feature 2 Section Text Content',
                type: 'string'
              },
              {
                name: 'color',
                title: 'Home Page Screenshot Feature 2 Section Text Color',
                type: 'string'
              },
              {
                name: 'variant',
                title: 'Home Page Screenshot Feature 2 Section Text Variant',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'images',
        title: 'Screenshot Feature 2 Image Content',
        type: 'array',
        validation: Rule => Rule.length(1),
        of: [
          {
            name: 'screenshotFeature2_imageFields',
            title: 'Screenshot Feature 2 Image Fields',
            type: 'object',
            fields: [
              {
                name: 'src',
                title: 'Home Page Screenshot Feature 2 Section Image Src',
                type: 'url'
              },
              {
                name: 'alt',
                title: 'Home Page Screenshot Feature 2 Section Image Text',
                type: 'string',
                initialValue: 'alt text'
              },
              {
                name: 'radius',
                title: 'Home Page Screenshot Feature 2 Section Image Radius',
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
                title: 'Home Page Screenshot Feature 2 Section Image Shadow',
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
                title: 'Home Page Screenshot Feature 2 Section Image Border',
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
                title: 'Home Page Screenshot Feature 2 Section Image Effects',
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