export default {
    name: 'home_testimonials',
    title: 'Home Page Testimonials Section',
    type: 'object',
    fields: [
        {
            name: 'text',
            title: 'Home Page Testimonials Section Text',
            type: 'array',
            validation: Rule => Rule.length(2),

            of: [
                {
                    name: 'home_testimonials_text',
                    title: 'Home Page Testimonials Section Text Fields',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Home Page Testimonials Section Text',
                            type: 'string'
                        },{
                            name: 'variant',
                            title: 'Home Page Testimonials Section Variant',
                            type: 'string'
                        }
                    ]
                }
            ]
        },
        {
            name: 'collection',
            title: 'Home page Testimonials Section Collection',
            type: 'array',
            validation: Rule => Rule.length(5),

            of: [
                {
                    name: 'home_testimonials_collection',
                    title: 'Home Page Testimonials Section Collection',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Home Page Testimonials Section Collection Text',
                            type: 'array',
                            validation: Rule => Rule.length(3),
                            
                            of: [
                                {
                                    name: 'home_testimonials_collectionText',
                                    title: 'Home Page Testimonials Section Collection Text Fields',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'text',
                                            title: 'Home Page Testimonials Section Collection Text Content',
                                            type: 'string'
                                        },
                                        {
                                            name: 'color',
                                            title: 'Home Page Testimonials Section Collections Text Color',
                                            type: 'string'
                                        },
                                        {
                                            name: 'variant',
                                            title: 'Home Page Testimonials Section Collections Text Variant',
                                            type: 'string'
                                        }
                                    ]
                                }
                            ]
                        },{
                            name: 'avatar',
                            title: 'Home Page Testimonials Section Collection Avatar',
                            type: 'object',
                            fields: [
                                {
                                    name: 'src',
                                    title: 'Home Page Testimonials Section Collection Avatar Src',
                                    type: 'string'
                                },{
                                    name: 'alt',
                                    title: 'Home Page Testimonials Section Collection Avatar Alt',
                                    type: 'string',
                                    initialValue: 'alt text'
                                }
                            ]
                        }
                    ]

                }
            ]
        },
        {
            name: 'buttons',
            title: 'Home Page Testimonials Section Buttons',
            type: 'array',
            validation: Rule => Rule.length(1),
            
            of: [
                {
                    name: 'home_testimonials_buttons',
                    title: 'Home Page Testimonials Section Buttons Fields',
                    type: 'object',
                    fields: [
                        {
                            name: 'text',
                            title: 'Home Page Testimonials Section Button Text',
                            type: 'string'
                        },
                        {
                            name: 'type',
                            title: 'Home Page Testimonials Section Button Type',
                            type: 'string',
                            initialValue: 'MODAL',
                            readOnly: true,
                            hidden: true
                        },
                        {
                            name: 'link',
                            title: 'Home Page Testimonials Section Button Link',
                            type: 'string',
                            initialValue: 'contact',
                            readOnly: true,
                            hidden: true
                        },
                        {
                            name: 'variant',
                            title: 'Home Page Testimonials Section Button Variant',
                            type: 'string',
                            initialValue: 'gradient',
                            readOnly: true,
                            hidden: true
                        }
                        
                    ]
                }
            ]

        }
    ]
}