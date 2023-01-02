---
title: File Structure Standards
author: Kevin
description: Topdown explanation of file structures within the schema dir 
---

# File Structure Standards
## Structure convention overview

`SANITY_ROOT_DIR/schemas`

```
schemas/
    index.js
    docs/
        FileStructure.md
        SchemaStructure.md
    home/
        index.js
        hero.js
        tab-feature-one.js
        tab-feature-two.js
        tab-feature-three.js
        screenshot-one.js
        screenshot-two.js
        screenshot-three.js
        process.js
        features.js
        stats.js
        testimonials.js
        companies.js
    about/
    services/
    pricing/
    shared/

```

**NOTE** of the following: 

- All directories other than docs/ matches a route for a frontend page
    - All files other than index.js within each of the directories described matches 
            `FRONTEND_ROOT_DIR/content/blocks/site/<route-name>/<matching-file>.json`

    - All schemas are exported to each directory's `index.js` file
    - Each route's schema is then exported to the `SANITY_ROOT_DIR/schemas/index.js` file to be used in studio

---

## File/directory naming convention overview

**NOTE** of the following: 

-  All directories (other than index) **must** match route/directory names within `FRONTEND_ROOT_DIR/CMS-Corporate/src/pages` directory
- All `js` files **must** match json data file names within `FRONTEND_ROOT_DIR/content/blocks/site/<route-name>/` directory

