export default {
    name: 'effects',
    title: 'Effects',
    type: 'array',
    of: [
        {
            name: 'effect',
            title: 'Effect',
            type: 'string',
            options: {
                list: [
                    { title: 'Fade In Down', value: 'fadeInDown' },
                    { title: 'Float', value: 'float' },
                    { title: 'Fade In Up', value: 'fadeInUp' },
                    { title: 'Float Faster', value: 'floatFaster' },
                    { title: 'Fade In Bounce', value: 'fadeInBounce' },
                    { title: 'Fade In Left', value: 'fadeInLeft' }
                  ]
            },
        }
    ]
}