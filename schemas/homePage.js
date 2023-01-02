const imageRadiusOptions = [
  { title: '', value: '' },
  { title: 'none', value: 'none' },
  { title: 'small', value: 'sm' },
  { title: 'default', value: 'default' },
  { title: 'large', value: 'lg' },
  { title: 'extra-large', value: 'xl' },
  { title: 'xx-large', value: 'xxl' },
]

const imageShadowOptions = [
  { title: '', value: '' },
  { title: 'none', value: 'none' },
  { title: 'default', value: 'default' },
  { title: 'large', value: 'lg' },
  { title: 'extra-large', value: 'xl' }
]

const imageBorderOptions = [
  { title: '', value: '' },
  { title: 'small', value: 'sm' },
  { title: 'medium', value: 'md' },
  { title: 'large', value: 'lg' },
  { title: 'extra-large', value: 'xl' },
  { title: 'xx-large', value: 'xxl' },
]

const imageEffectOptions = [
  { title: '', value: '' },
  { title: 'Fade In Down', value: 'fadeInDown' },
  { title: 'Float', value: 'float' },
  { title: 'Fade In Up', value: 'fadeInUp' },
  { title: 'Float Faster', value: 'floatFaster' },
]

export default {
  name: 'HomePage',
  type: 'document',
  title: 'Home page contents',
  fields: [

    /** HERO FEATURE SECTION */
    {
      name: 'hero',
      title: 'Hero Section Contents',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Hero Text Content',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'hero_textFields',
              title: 'Hero Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Hero Section Text Content'
                },
                {
                  name: 'color',
                  type: 'string',
                  title: 'Hero Section Text Color'
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Hero Section Text Variant'
                }
              ]
            }
          ]
        },
        {
          name: 'images',
          title: 'Hero Image Content',
          type: 'array',
          validation: Rule => Rule.length(1),
          of: [
            {
              name: 'hero_imageFields',
              title: 'Hero Image Fields',
              type: 'object',
              fields: [
                {
                  name: 'src',
                  type: 'url',
                  title: 'Hero Image URL',
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Hero Image Alt Text',
                  initialValue: 'alt text'
                },
                {
                  name: 'radius',
                  type: 'string',
                  title: 'Hero Image Radius',
                  options: {
                    list: imageRadiusOptions
                  },
                  initialValue: 'lg',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'shadow',
                  type: 'string',
                  title: 'Hero Image Shadow',
                  options: {
                    list: imageShadowOptions
                  },
                  initialValue: 'default',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'border',
                  type: 'string',
                  title: 'Hero Image Border',
                  options: {
                    list: imageBorderOptions
                  },
                  initialValue: 'lg',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'effects',
                  type: 'array',
                  validation: Rule => Rule.length(1),
                  title: 'Hero Image Effects',
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
          title: 'Hero Button Content',
          type: 'array',
          of: [
            {
              name: 'hero_buttonFields',
              title: 'Hero Button Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Hero Call To Action Button Text',
                },
                {
                  name: 'type',
                  type: 'string',
                  title: 'Hero Call To Action Button type',
                  readonly: true,
                  hidden: true,
                  initialValue: 'MODAL'
                },
                {
                  name: 'link',
                  type: 'string',
                  title: 'Hero Call To Action Button Link',
                  readOnly: true,
                  hidden: true,
                  initialValue: 'authentication',
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Hero Call To Action Button Variant',
                  readOnly: true,
                  hidden: true,
                  initialValue: 'white'
                }
              ]
            }
          ]
        }
      ]
    },
    
    /** TAB FEATURE SECTION */
    {
      name: 'tabFeature1',
      title: 'Tab Feature 1 Contents',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Tab Feature 1 Text Content',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'tabFeature1_textFields',
              title: 'Tab Feature 1 Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Tab Feature 1 Text Content'
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Tab Feature 1 Text Variant',
                }
              ]
            }
          ]
        },
        {
          name: 'images',
          title: 'Tab Feature 1 Image Content',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'tabFeature1_imageFields',
              title: 'Tab Feature 1 Image Fields',
              type: 'object',
              fields: [
                {
                  name: 'src',
                  type: 'url',
                  title: 'Tab Feature 1 Image URL'
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Tab Feature 1 Image Alt Text',
                  initialValue: 'alt text'
                },
                {
                  name: 'radius',
                  type: 'string',
                  title: 'Tab Feature 1 Image Radius',
                  options: {
                    list: imageRadiusOptions
                  }
                },
                {
                  name: 'shadow',
                  type: 'string',
                  title: 'Tab Feature 1 Image Shadow',
                  options: {
                    list: imageShadowOptions
                  }
                },
                {
                  name: 'effects',
                  type: 'array',
                  title: 'Tab Feature 1 Image Effects',
                  of: [{type: 'string'}],
                  validation: Rule => Rule.max(2),
                  options: {
                    list: imageEffectOptions
                  }
                },
                {
                  name: 'position',
                  type: 'object',
                  title: 'Tab Feature 1 Image Position',
                  fields : [
                    {
                      name: 'top',
                      type: 'string',
                      title: 'Tab Feature 1 Image Top Position'
                    },
                    {
                      name: 'left',
                      type: 'string',
                      title: 'Tab Feature 1 Image Left Position'
                    },
                    {
                      name: 'right',
                      type: 'string',
                      title: 'Tab Feature 1 Image Right Position'
                    },
                    {
                      name: 'bottom',
                      type: 'string',
                      title: 'Tab Feature 1 Image Bottom Position'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'collection',
          title: 'Tab Feature 1 Collection Content',
          type: 'array',
          validation: Rule => Rule.length(4),
          of: [
            {
              name: 'tabFeature1_collectionFields',
              title: 'Tab Feature 1 Collection Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'array',
                  validation: Rule => Rule.length(1),
                  title: 'Tab Feature 1 Collection Text',
                  of: [
                    {
                      name: 'tabFeature_collectionText',
                      title: 'Tab Feature 1 Collection Text Field',
                      type: 'object',
                      fields: [
                        {
                          name: 'text',
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
                      title: 'Tab Feature 1 collection Icon URL',
                      type: 'url'
                    },
                    {
                      name: 'color',
                      title: 'Tab Feature 1 collection Icon Color',
                      type: 'string'
                    }
                  ]
                },      
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'tabFeature2',
      title: 'Tab Feature 2 Contents',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Tab Feature 2 Text Content',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'tabFeature2_textFields',
              title: 'Tab Feature 2 Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Tab Feature 2 Text Content'
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Tab Feature 2 Text Variant',
                }
              ]
            }
          ]
        },
        {
          name: 'images',
          title: 'Tab Feature 2 Image Content',
          type: 'array',
          validation: Rule => Rule.length(4),
          of: [
            {
              name: 'tabFeature2_imageFields',
              title: 'Tab Feature 2 Image Fields',
              type: 'object',
              fields: [
                {
                  name: 'src',
                  type: 'url',
                  title: 'Tab Feature 2 Image URL'
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Tab Feature 2 Image Alt Text',
                  initialValue: 'alt text'
                },
                {
                  name: 'radius',
                  type: 'string',
                  title: 'Tab Feature 2 Image Radius',
                  options: {
                    list: imageRadiusOptions
                  }
                },
                {
                  name: 'shadow',
                  type: 'string',
                  title: 'Tab Feature 2 Image Shadow',
                  options: {
                    list: imageShadowOptions
                  }
                },
                {
                  name: 'effects',
                  type: 'array',
                  title: 'Tab Feature 2 Image Effects',
                  of: [{type: 'string'}],
                  validation: Rule => Rule.max(2),
                  options: {
                    list: imageEffectOptions
                  }
                },
                {
                  name: 'position',
                  type: 'object',
                  title: 'Tab Feature 2 Image Position',
                  fields : [
                    {
                      name: 'top',
                      type: 'string',
                      title: 'Tab Feature 2 Image Top Position'
                    },
                    {
                      name: 'left',
                      type: 'string',
                      title: 'Tab Feature 2 Image Left Position'
                    },
                    {
                      name: 'right',
                      type: 'string',
                      title: 'Tab Feature 2 Image Right Position'
                    },
                    {
                      name: 'bottom',
                      type: 'string',
                      title: 'Tab Feature 2 Image Bottom Position'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'collection',
          title: 'Tab Feature 2 Collection Content',
          type: 'array',
          validation: Rule => Rule.length(2),
          of: [
            {
              name: 'tabFeature2_collectionFields',
              title: 'Tab Feature 2 Collection Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'array',
                  validation: Rule => Rule.length(3),
                  title: 'Tab Feature 2 Collection Text',
                  of: [
                    {
                      name: 'tabFeature_collectionText',
                      title: 'Tab Feature 2 Collection Text Field',
                      type: 'object',
                      fields: [
                        {
                          name: 'text',
                          type: 'string'
                        },
                        {
                          name: 'color',
                          type: 'string'
                        },
                        {
                          name: 'variant',
                          type: 'string'
                        },
                        {
                          name: 'space',
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
    },
    {
      name: 'tabFeature3',
      title: 'Tab Feature 3 Contents',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Tab Feature 3 Text Content',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'tabFeature3_textFields',
              title: 'Tab Feature 3 Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Tab Feature 3 Text Content'
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Tab Feature 3 Text Variant',
                }
              ]
            }
          ]
        },
        {
          name: 'images',
          title: 'Tab Feature 3 Image Content',
          type: 'array',
          validation: Rule => Rule.length(2),
          of: [
            {
              name: 'tabFeature3_imageFields',
              title: 'Tab Feature 3 Image Fields',
              type: 'object',
              fields: [
                {
                  name: 'src',
                  type: 'url',
                  title: 'Tab Feature 3 Image URL'
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Tab Feature 3 Image Alt Text',
                  initialValue: 'alt text'
                },
                {
                  name: 'radius',
                  type: 'string',
                  title: 'Tab Feature 3 Image Radius',
                  options: {
                    list: imageRadiusOptions
                  }
                },
                {
                  name: 'shadow',
                  type: 'string',
                  title: 'Tab Feature 3 Image Shadow',
                  options: {
                    list: imageShadowOptions
                  }
                },
                {
                  name: 'effects',
                  type: 'array',
                  title: 'Tab Feature 3 Image Effects',
                  of: [{type: 'string'}],
                  validation: Rule => Rule.max(2),
                  options: {
                    list: imageEffectOptions
                  }
                },
                {
                  name: 'position',
                  type: 'object',
                  title: 'Tab Feature 3 Image Position',
                  fields : [
                    {
                      name: 'top',
                      type: 'string',
                      title: 'Tab Feature 3 Image Top Position'
                    },
                    {
                      name: 'left',
                      type: 'string',
                      title: 'Tab Feature 3 Image Left Position'
                    },
                    {
                      name: 'right',
                      type: 'string',
                      title: 'Tab Feature 3 Image Right Position'
                    },
                    {
                      name: 'bottom',
                      type: 'string',
                      title: 'Tab Feature 3 Image Bottom Position'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'collection',
          title: 'Tab Feature 3 Collection Content',
          type: 'array',
          validation: Rule => Rule.length(2),
          of: [
            {
              name: 'tabFeature3_collectionFields',
              title: 'Tab Feature 3 Collection Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'array',
                  validation: Rule => Rule.length(2),
                  title: 'Tab Feature 3 Collection Text',
                  of: [
                    {
                      name: 'tabFeature3_collectionText',
                      title: 'Tab Feature 3 Collection Text Field',
                      type: 'object',
                      fields: [
                        {
                          name: 'text',
                          type: 'string'
                        },
                        {
                          name: 'variant',
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
                      title: 'Tab Feature 3 collection Icon URL',
                      type: 'url'
                    },
                    {
                      name: 'color',
                      title: 'Tab Feature 3 collection Icon Color',
                      type: 'string'
                    },
                    {
                      name: 'bg',
                      title: 'Tab Feature 3 Collection Icon Background Color',
                      type: 'string'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    /** SCREENSHOT FEATURE SECTION */
    {
      name: 'screenshotFeature1',
      title: 'Screenshot Feature 1 Contents',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Screenshot Feature 1 Text Contents',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'screenshotFeature1_textFields',
              title: 'Screenshot Feature 1 Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Screenshot Feature 1 Text Content'
                },
                {
                  name: 'color',
                  type: 'string',
                  title: 'Screenshot Feature 1 Text Color'
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Screenshot Feature 1 Text Variant'
                }
              ]
            }
          ]
        },
        {
          name: 'images',
          title: 'Screenshot Feature 1 Image Content',
          type: 'array',
          validation: Rule => Rule.length(1),
          of: [
            {
              name: 'screenshotFeature1_imageFields',
              title: 'Screenshot Feature 1 Image Fields',
              type: 'object',
              fields: [
                {
                  name: 'src',
                  type: 'url',
                  title: 'Screenshot Feature 1 Image URL',
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Screenshot Feature 1 Image Alt Text',
                  initialValue: 'alt text'
                },
                {
                  name: 'radius',
                  type: 'string',
                  title: 'Screenshot Feature 1 Image Radius',
                  options: {
                    list: imageRadiusOptions
                  },
                  initialValue: 'lg',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'shadow',
                  type: 'string',
                  title: 'Screenshot Feature 1 Image Shadow',
                  options: {
                    list: imageShadowOptions
                  },
                  initialValue: 'default',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'border',
                  type: 'string',
                  title: 'Screenshot Feature 1 Image Border',
                  options: {
                    list: imageBorderOptions
                  },
                  initialValue: 'lg',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'effects',
                  type: 'array',
                  validation: Rule => Rule.length(1),
                  title: 'Screenshot Feature 1 Image Effects',
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
    },
    {
      name: 'screenshotFeature2',
      title: 'Screenshot Feature 2 Contents',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Screenshot Feature 2 Text Contents',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'screenshotFeature2_textFields',
              title: 'Screenshot Feature 2 Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Screenshot Feature 2 Text Content'
                },
                {
                  name: 'color',
                  type: 'string',
                  title: 'Screenshot Feature 2 Text Color'
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Screenshot Feature 2 Text Variant'
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
                  type: 'url',
                  title: 'Screenshot Feature 2 Image URL',
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Screenshot Feature 2 Image Alt Text',
                  initialValue: 'alt text'
                },
                {
                  name: 'radius',
                  type: 'string',
                  title: 'Screenshot Feature 2 Image Radius',
                  options: {
                    list: imageRadiusOptions
                  },
                  initialValue: 'lg',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'shadow',
                  type: 'string',
                  title: 'Screenshot Feature 2 Image Shadow',
                  options: {
                    list: imageShadowOptions
                  },
                  initialValue: 'default',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'border',
                  type: 'string',
                  title: 'Screenshot Feature 2 Image Border',
                  options: {
                    list: imageBorderOptions
                  },
                  initialValue: 'lg',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'effects',
                  type: 'array',
                  validation: Rule => Rule.length(1),
                  title: 'Screenshot Feature 1 Image Effects',
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
    },
    {
      name: 'screenshotFeature3',
      title: 'Screenshot Feature 3 Contents',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Screenshot Feature 3 Text Contents',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'screenshotFeature3_textFields',
              title: 'Screenshot Feature 3 Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Screenshot Feature 3 Text Content'
                },
                {
                  name: 'color',
                  type: 'string',
                  title: 'Screenshot Feature 3 Text Color'
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Screenshot Feature 3 Text Variant'
                }
              ]
            }
          ]
        },
        {
          name: 'images',
          title: 'Screenshot Feature 3 Image Content',
          type: 'array',
          validation: Rule => Rule.length(1),
          of: [
            {
              name: 'screenshotFeature3_imageFields',
              title: 'Screenshot Feature 3 Image Fields',
              type: 'object',
              fields: [
                {
                  name: 'src',
                  type: 'url',
                  title: 'Screenshot Feature 3 Image URL',
                },
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Screenshot Feature 3 Image Alt Text',
                  initialValue: 'alt text'
                },
                {
                  name: 'radius',
                  type: 'string',
                  title: 'Screenshot Feature 3 Image Radius',
                  options: {
                    list: imageRadiusOptions
                  },
                  initialValue: 'lg',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'shadow',
                  type: 'string',
                  title: 'Screenshot Feature 3 Image Shadow',
                  options: {
                    list: imageShadowOptions
                  },
                  initialValue: 'default',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'border',
                  type: 'string',
                  title: 'Screenshot Feature 3 Image Border',
                  options: {
                    list: imageBorderOptions
                  },
                  initialValue: 'lg',
                  readOnly: true,
                  hidden: true,
                },
                {
                  name: 'effects',
                  type: 'array',
                  validation: Rule => Rule.length(1),
                  title: 'Screenshot Feature 3 Image Effects',
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
    },

    /** PROCESS SECTION */
    {
      name: 'process',
      title: 'Process Contents',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Process Text Contents',
          type: 'array',
          validation: Rule => Rule.length(2),
          of: [
            {
              name: 'process_textFields',
              title: 'Process Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Process Section Text Content'
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Process Section Text Variant'
                }
              ]
            }
          ]
        },
        {
          name: 'collection',
          title: 'Process Collection Contents',
          type: 'array',
          validation: Rule => Rule.length(4),
          of: [
            {
              name: 'process_collectionFields',
              title: 'Process Collection Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Process Collection Text',
                  type: 'array',
                  validation: Rule => Rule.length(2),
                  of: [
                    {
                      name: 'process_collectionText',
                      title: 'Process Collection Text Field',
                      type: 'object',
                      fields: [
                        {
                          name: 'text',
                          type: 'string'
                        },
                        {
                          name: 'variant',
                          type: 'string'
                        }
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
          title: 'Process Button Contents',
          type: 'array',
          validation: Rule => Rule.length(1),
          of: [
            {
              name: 'process_buttonFields',
              title: 'Process Button Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Process Button Text',
                },
                {
                  name: 'type',
                  type: 'string',
                  title: 'Process Button Text',
                  readonly: true,
                  hidden: true,
                  initialValue: 'MODAL'
                },
                {
                  name: 'link',
                  type: 'string',
                  title: 'Process Button Text',
                  readOnly: true,
                  hidden: true,
                  initialValue: 'contact',
                },
                {
                  name: 'variant',
                  type: 'string',
                  title: 'Process Button Text',
                  readOnly: true,
                  hidden: true,
                  initialValue: 'gradient'
                }
              ]
            }
          ]
        }
      ]
    },



    /** FEATURES SECTION */
    {
      name: 'features',
      title: 'Feature Contents',
      type: 'object',
      fields: [
        {
          name: 'collection',
          title: 'Feature Collection Contents',
          type: 'array',
          validation: Rule => Rule.length(4),
          of: [
            {
              name: 'features_collectionFields',
              title: 'Features Collection Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Features Collection Text',
                  type: 'array',
                  validation: Rule => Rule.length(2),
                  of: [
                    {
                      name: 'features_collectionText',
                      title: 'Features Connection Text Field',
                      type: 'object',
                      fields: [
                        {
                          name: 'text',
                          type: 'string'
                        },
                        {
                          name: 'variant',
                          type: 'string'
                        }
                      ]
                    }
                  ]

                },
                {
                  name: 'icons',
                  title: 'Features Collection Icons',
                  type: 'object',
                  fields: [
                    {
                      name: 'src',
                      title: 'Features Collection Icon URL',
                      type: 'url'
                    },
                    {
                      name: 'color',
                      title: 'Features Collection Icon Color',
                      type: 'string'
                    },
                    {
                      name: 'bg',
                      title: 'Features Collection Icon Background Color',
                      type: 'string'
                    }
                  ]
                },
                {
                  name: 'buttons',
                  title: 'Features Collection Buttons',
                  type: 'array',
                  validation: Rule => Rule.length(1),
                  of: [
                    {
                     name: 'features_buttonFields',
                     title: 'Features Button Fields',
                     type: 'object',
                     fields: [
                      {
                        name: 'text',
                        type: 'string',
                        title: 'Features Button Text',
                        initialValue: 'Learn More   ➜'
                      },
                      {
                        name: 'type',
                        type: 'string',
                        title: 'Features Button Text',
                        readonly: true,
                        hidden: true,
                        initialValue: 'PAGE'
                      },
                      {
                        name: 'link',
                        type: 'string',
                        title: 'Features Button Text',
                        readOnly: true,
                        hidden: true,
                        initialValue: 'about',
                      },
                      {
                        name: 'variant',
                        type: 'string',
                        title: 'Features Button Text',
                        readOnly: true,
                        hidden: true,
                        initialValue: 'links.normal'
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
    },


    /** STATS SECTION */
    {
      name: 'stats',
      title: 'Stats Contents',
      type: 'object',
      fields: [
        {
          name: 'container',
          title: 'Stats Container Contents',
          type: 'object',
          fields: [
            {
              name: 'variant',
              type: 'string',
              readOnly: true,
              hidden: true,
              initialValue: ''
            }
          ]
        },
        {
          name: 'text',
          title: 'Stats Text Contents',
          type: 'array',
          validation: Rule => Rule.length(3),
          of: [
            {
              name: 'stats_textFields',
              title: 'Stats Section Text Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Stats Section Text Content',
                  type: 'string'
                },
                {
                  name: 'variant',
                  title: 'Stats Section Text Variant',
                  type: 'string'
                },
                {
                  name: 'space',
                  title: 'Stats Section Text Spacing',
                  type: 'number'
                }
              ]
            }
          ]
        },
        {
          name: 'collection',
          title: 'Stats Collection Contents',
          type: 'array',
          validation: Rule => Rule.length(4),
          of: [
            {
              name: 'stats_collectionFields',
              title: 'Stats Section Collection Fields',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Stats Section Collections Text Content',
                  type: 'array',
                  validation: Rule => Rule.length(2),
                  of: [
                    {
                      name: 'stats_collectionText',
                      title: 'Stats Collection Text Field',
                      type: 'object',
                      fields: [
                        {
                          name: 'text',
                          type: 'string'
                        },
                        {
                          name: 'color',
                          type: 'string'
                        },
                        {
                          name: 'variant',
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
  ]
}
    

