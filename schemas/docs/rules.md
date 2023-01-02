# Rules and Exceptions for the Coding Standard of This Project

## Rules: 

1. the three required properties of a Schema, and its mandatory orders are : 

```Javascript

{
    name: 'first required property, identifier for the Schema',
    title: 'second required property, human friendly identier for the Schema',
    type: 'sanity.io specific Schema types'
}


```

2. Each Word of Title Must Be Capitalized, Just Like This Sentence :D.



--- 

## Exceptions: 

1. Anytime that there is two reoccuring key in both child and parent obj, when making decisions regarding naming conventions in `./SchemaStructure.md`, **Content** can be used as an alias. For example: 

> screenshot-two.js

```Javascript

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
              }

    // ...
            ]
          }
        ]
      }
    ]
}


```

The very inner title says: `title: 'Home Page Screenshot Feature 2 Section Text Content'`. **Content** is used here as an alias, instead of `Home Page Screenshot Feature 2 Section Text Text`, we can have `Home Page Screenshot Feature 2 Section Text Content`.


2. When it comes to the property **space** of a text Schema object, its title may also be **Spacing** in leiu. See example: 
> ROOT_DIR/schemas/home/stats.js


```Javascript
// ...
{
    name: 'space',
    title: 'Home page Stats Section Text Spacing',
    type: 'number'
}

// ...
```