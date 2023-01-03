export default {
  name: 'shared_advertisement',
  title: 'Shared Content Advertisement Section',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Shared Content Advertisement Section Text',
      type: 'array',
      validation: Rule => Rule.length(1),

      of: [
        {
          name: 'shared_advertisementText',
          title: 'Shared Content Advertisement Section Text Fields',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Shared Content Advertisement Section Text Content',
              type: 'string'
            },
            {
              name: 'color',
              title: 'Shared Content Advertisement Section Text Color',
              type: 'string',
              initialValue: '#805AD5',
              readOnly: true,
              hidden: true
            },
            {
              name: 'variant',
              title: 'Shared Content Advertisement Section Text Variant',
              type: 'string',
              initialValue: 'h2',
              readOnly: true,
              hidden: true
            },
            {
              name: 'space',
              title: 'Shared Content Advertisement Section Text Space',
              type: 'string',
              initialValue: 3,
              readOnly: true,
              hidden: true
            },
          ]
        }
      ]
    },
    {
      name: 'images',
      title: 'Shared Content Advertisement Sectino Images',
      type: 'array',
      validation: Rule => Rule.length(1),

      of: [
        {
          name: 'shared_advertisementImages',
          title: 'Shared Content Advertisement Section Images Fields',
          type: 'object',
          fields: [
            {
              name: 'src',
              title: 'Shared Content Advertisement Section Images Src',
              type: 'url'
            },
            {
              name: 'alt',
              title: 'Shared Content Advertisement Section Images Alt',
              type: 'string',
              initialValue: 'alt text'
            }
          ]
        }
      ]
    },
    {
      name: 'collection',
      title: 'Shared Content Advertisement Section Collection',
      type: 'array',
      validation: Rule => Rule.length(3),

      of: [
        {
          name: 'shared_advertisementCollection',
          title: 'Shared Content Advertisement Section Collection Fields',
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Shared Content Advertisement Section Collection Icon',
              type: 'object',
              fields: [
                {
                  name: 'src',
                  title: 'Shared Content Advertisement Section Collection Icon Src',
                  type: 'url'
                },
                {
                  name: 'color',
                  title: 'Shared Content Advertisement Section Collection Icon Color',
                  type: 'string',
                  initialValue: '#805AD5',
                  readOnly: true,
                  hidden: true
                },
                {
                  name: 'bg',
                  title: 'Shared Content Advertisement Section Collection Icon Background',
                  type: 'string',
                  initialValue: 'transparent',
                  readOnly: true,
                  hidden: true
                }
              ]
            },
            {
              name: 'text',
              title: 'Shared Content Advertisement Section Collection Text',
              type: 'array',
              validation: Rule => Rule.length(2),

              of: [
                {
                  name: 'shared_advertisement_collectionText',
                  title: 'Shared Content Advertisement Section Collection Text Fields',
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Shared Content Advertisement Section Collection Text Content',
                      type: 'string'
                    },
                    {
                      name: 'variant',
                      title: 'Shared Content Advertisement Section Collection Text Variant',
                      type: 'string'
                    },
                    {
                      name: 'space',
                      title: 'Shared Content Advertisement Section Collection Text Spacing',
                      type: 'string',
                      initialValue: 1,
                      readOnly: true,
                      hidden: true
                    },
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
      title: 'Shared Content Advertisement Section Buttons',
      type: 'array',
      validation: Rule => Rule.length(1),

      of : [
        {
          name: 'shared_advertisementButtons',
          title: 'Shared Content Advertisement Section Buttons Fields',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Shared Content Advertisement Section Buttons Text',
              type: 'string'
            },
            {
              name: 'type',
              title: 'Shared Content Advertisement Section Buttons Type',
              type: 'string',
              initialValue: 'PAGE',
              readOnly: true,
              hidden: true
            },
            {
              name: 'link',
              title: 'Shared Content Advertisement Section Buttons Link',
              type: 'string',
              initialValue: 'https://1.envato.market/LPD9RM',
              readOnly: true,
              hidden: true
            },
            {
              name: 'target',
              title: 'Shared Content Advertisement Section Buttons Target',
              type: 'string',
              initialValue: '_blank',
              readOnly: true,
              hidden: true
            },
            {
              name: 'variant',
              title: 'Shared Content Advertisement Section Buttons Variant',
              type: 'string',
              initialValue: 'secondary',
              readOnly: true,
              hidden: true
            },
            {
              name: 'bg',
              title: 'Shared Content Advertisement Section Buttons Background',
              type: 'string',
              initialValue: '#805AD5',
              readOnly: true,
              hidden: true
            },
          ]
        }
      ]
    }
  ]
}