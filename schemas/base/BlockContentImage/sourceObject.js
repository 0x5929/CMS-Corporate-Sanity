/**
 * 
 *  NOTE: this object is used both in 
 *      1. Fallback Source Object, and;
 *      2. Sources key for the Source Object  
 *       
 *      The first usage will include src, while 
 *      the second usage will inlude type instead
 * 
 *      When query using graphql, query src key and exclude type key
 *      in Fallback Source Object; in contrary, 
 *      query type key and exclude src key in the Sources key for the Source Object
 *      
 *      
 */

export default {
    name: 'sourceObject',
    title: 'Source Object',
    type: 'object',
    fields: [
        {
            name: 'src',
            title: 'Source',
            type: 'string'
        },
        {
            name: 'srcSet',
            title: 'Source Set',
            type: 'text'
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string'
        },
        {
            name: 'sizes',
            title: 'Sizes',
            type: 'string'
        }
    ]
}