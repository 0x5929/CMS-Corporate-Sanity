import { imageRadiusOptions, imageShadowOptions, imageBorderOptions } from '../options'

export default {

    name: 'home_hero',
    title: 'Home Page Hero Section',
    type: 'object',
    fields: [
      {
        name: 'text',
        title: 'Home Page Hero Section Text',
        type: 'array',
        validation: Rule => Rule.length(3),
        of: [
          {
            name: 'home_hero_text',
            title: 'Home Page Hero Section Text Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Hero Section Text Content',
                type: 'string'
              },
              {
                name: 'color',
                title: 'Home Page Hero Section Text Color',
                type: 'string',
              },
              {
                name: 'variant',
                title: 'Home Page Hero Section Text Variant',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'images',
        title: 'Home Page Hero Section Images',
        type: 'array',
        validation: Rule => Rule.length(1),
        of: [
          {
            name: 'home_hero_image',
            title: 'Home Page Hero Section Images Fields',
            type: 'object',
            fields: [
              {
                name: 'src',
                title: 'Home Page Hero Section Images Src',
                type: 'url'
              },
              {
                name: 'alt',
                title: 'Home Page Hero Section Images Alt',
                type: 'string',
                initialValue: 'alt text'
              },
              {
                name: 'radius',
                title: 'Home Page Hero Section Images Radius',
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
                title: 'Home Page Hero Section Images Shadow',
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
                title: 'Home Page Hero Section Images Border',
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
                title: 'Home Page Hero Section Images Effects',
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
      },
      {
        name: 'buttons',
        title: 'Home Page Hero Section Buttons',
        type: 'array',
        validation: Rule => Rule.length(1),
        of: [
          {
            name: 'page_hero_buttons',
            title: 'Home Page Hero Section Buttons Fields',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Home Page Hero Section Buttons Text',
                type: 'string'
              },
              {
                name: 'type',
                title: 'Home Page Hero Section Buttons type',
                type: 'string',
                initialValue: 'MODAL',
                readonly: true,
                hidden: true
              },
              {
                name: 'link',
                type: 'string',
                title: 'Home Page Hero Section Buttons Link',
                initialValue: 'authentication',
                readOnly: true,
                hidden: true
              },
              {
                name: 'variant',
                title: 'Home Page Hero Section Buttons Variant',
                type: 'string',
                initialValue: 'white',
                readOnly: true,
                hidden: true
              }
            ]
          }
        ]
      }
    ]
  }