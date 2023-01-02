---
title: Schema Structure Standards
author: Kevin
description: Schema structure standard for all schemas in this project
---

# Schema Structure Standards

*For more information on how each schema is imported, please see FileStructure.md*

> Each route/page will start with the following schema, 

```Javascript
export default {
    name: '<page-name>',
    title: 'Page Name Title Content'
    type: 'document',
    fields: [
        // matches each page's data content json blocks from frontend
        // imported from respective page directories
    ]
}

```

> Each json block's schema  

<table>
<tr>
<th> Sample target Block JSON file </th>
<th> Coresponding Schema js file </th>
</tr>
<tr>
<td>

```Json
{
    "container": {
        "variant": ""
    },
    "text": [
        {
            "text": "Don't Just Take our Word for it!",
            "variant": "h2",
            "space": 3
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "variant": "medium"
        },
        {
            "text": "Sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet.",
            "variant": "medium"
        }
    ],
    "images": [
        {
        "src": "../../../assets/flexiblocks/homepage/saas-v2/hero.png",
        "alt": "alt text",
        "radius": "lg",
        "shadow": "default",
        "border": "lg",
        "effects": ["fadeInDown"]
        }
    ],
    "collection": [
        {
            "text": [
                {
                "text": "570",
                "color": "betaLight",
                "variant": "h1"
                },
                {
                "text": "Active Users",
                "color": "omegaDark",
                "variant": "h5"
                }
            ],
            "icon": {
                "src": "../../../assets/flexiblocks/companies/company-airbnb.svg",
                "alt": "alt text"
            }
        },
        {
            "text": [
                {
                    "text": "1300",
                    "color": "beta",
                    "variant": "h1"
                },
                {
                    "text": "Downloads",
                    "color": "omegaDark",
                    "variant": "h5"
                }
            ],
            "icon": {
                "src": "../../../assets/flexiblocks/companies/company-airbnb.svg",
                "alt": "alt text"
        }
        }
    ]
}
```

</td>
 
<td>
        
```Javascript
export default {
    name: 'pageName_sectionName',
    title: 'Page Name Section Name',
    type: 'object',
    fields: [
        {
            name: 'container',
            title: 'Page Name Section Name Container',
            type: 'object',
            fields: [
                {
                    name: 'variant',
                    title: 'Page Name Section Name Container Variant',
                    type: 'string,
                    initialValue: '',
                    readOnly: true,
                    hidden: true
                }
            ]
        },
        {
            name: 'text',
            title: 'Page Name Section Name Text',
            type: 'array',
            validation: Rule => Rule.length(3),
            of: [
                {
                    name: 'pageName_sectionName_text',
                    title: 'Page Name Section Name Text Fields',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Page Name Section Name Text Content',
                            type: 'string',
                        },
                        {
                            name: 'space',
                            title: 'Page Name Section Name Text Spacing',
                            type: 'string',
                        },
                        {
                            name: 'variant',
                            title: 'Page Name Section Name Text Variant',
                            type: 'string',
                        }
                    ]
                }
            ]
        },
        {
            name: 'images',
            title: 'Page Name Section Name Image',
            type: 'array',
            validation: Rule => Rule.length(1),
            of: [
                {
                    name: 'pageName_sectionName_image',
                    title: 'Page Name Section Name Image Fields',
                    type: 'object',
                    fields: [
                        {
                            name: 'src',
                            title: 'Page Name Section Name Image Src',
                            type: 'url'
                        },
                        {
                            name: 'alt',
                            title: 'Page Name Section Name Image Alt',
                            type: 'string',
                            initialValue: 'alt text'
                        },
                        {
                            name: 'radius',
                            title: 'Page Name Section Name Image Radius',
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
                            title: 'Page Name Section Name Image Shadow',
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
                            title: 'Page Name Section Name Image Border',
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
                            title: 'Page Name Section Name Image Effects',
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
            name: 'collection'
            title: 'Page Name Section Name Collection',
            type: 'array',
            validation: Rule => Rule.length(2),
            of: [
                {
                    name: 'pageName_sectionName_collection',
                    title: 'Page Name Section Name Collection Fields',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Page Name Section Name Collection Text',
                            type: 'array',
                            validation: Rule => Rule.length(2),
                            of: [
                                {
                                    name: 'pageName_sectionName_collectionText,
                                    title: 'Page Name Section Name Collection Text Fields',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'text',
                                            title: 'Page Name Section Name Collection Text Content',
                                            type: 'string'
                                        },
                                        {
                                            name: 'color',
                                            title: 'Page Name Section Name Collection Text Color',
                                            type: 'string'
                                        },
                                        {
                                            name: 'variant',
                                            title: 'Page Name Section Name Collection Text Variant',
                                            type: 'string'
                                        }   
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'icon',
                            title: 'Page Name Section Name Collection Icon',
                            type: 'object',
                            fields: [
                                {
                                    name: 'src',
                                    title: 'Page Name Section Name Collection Icon Src',
                                    type: 'url'
                                },
                                {
                                    name: 'alt',
                                    title: 'Page Name Section Name Collection Icon Alt',
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
```
</td>
</tr>
</table>

---

## Summary

*NOTE that all levels are decrementing from top down*
*NOTE that section and block are used interchangeabily*

|  field  |   level   |   level example                            |  naming convention                  | 
| ------- | --------- | ------------------------------------------ | ----------------------------------- |
|  name   |  page     |  home                                      | pageName                            |
|  name   |  section  |  home > hero                               | pageName_sectionName                |
|  name   |  object   |  home > hero > obj                         | objKey1                             |
|  name   |  array    |  home > hero > obj > obj                   | pageName_sectionName_objKey1ObjKey2 |
|  name   |  array    |  home > hero > obj > arr                   | pageName_sectionName_objKey1        |
|  name   |  object   |  home > hero > obj > arr > obj             | objKey2                             |
|  name   |  array    |  home > hero > obj > arr > obj > arr       | pageName_sectionName_objKey1ObjKey2 |
|  name   |  array    |  home > hero > obj > arr > obj > arr > obj | objKey3                             |




|  field  |   level   |   level example                            |  naming convention                             | 
| ------- | --------- | ------------------------------------------ | ---------------------------------------------- |
|  title  |  page     |  home                                      | Page Name                                      |
|  title  |  section  |  home > hero                               | Page Name Section Name                         |
|  title  |  object   |  home > hero > obj                         | Page Name Section Name Objkey1                 |
|  title  |  array    |  home > hero > obj > obj                   | Page Name Section Name Objkey1 Objkey2         |
|  title  |  array    |  home > hero > obj > arr                   | Page Name Section Name Objkey1 Fields          |
|  title  |  object   |  home > hero > obj > arr > obj             | Page Name Section Name Objkey1 Objkey2         |
|  title  |  array    |  home > hero > obj > arr > obj > arr       | Page Name Section Name Objkey1 Objkey2 Fields  |
|  title  |  array    |  home > hero > obj > arr > obj > arr > obj | Page Name Section Name Objkey1 Objkey2 Objkey3 |