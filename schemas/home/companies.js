export default {
    name: 'home_companies',
    title: 'Home Page Companies Section',
    type: 'object',
    fields: [
        {
            name: 'collection',
            title: 'Home Page Companies Section Collection',
            type: 'array',
            validation: Rule => Rule.length(5),

            of: [
                {
                    name: 'home_companies_collection',
                    title: 'Home Page Companies Section Collection Fields',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Home Page Companies Section Collection Text',
                            type: 'array',
                            validation: Rule => Rule.length(1),

                            of: [
                                {
                                    name: 'home_companies_collectionText',
                                    title: 'Home Page Companies Section Collection Text Fields',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'text',
                                            title: 'Home page Companies Section Collection Text Content',
                                            type: 'string'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'icon',
                            title: 'Home Page Companies Section Collection Icon',
                            type: 'object',
                            fields: [
                                {
                                    name: 'src',
                                    title: 'Home Page Companies Section Collection Icon Src',
                                    type: 'url'
                                },{
                                    name: 'alt',
                                    title: 'Home Page Companies Section Collection Icon Alt',
                                    type: 'string',
                                    initialValue: 'alt text'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}