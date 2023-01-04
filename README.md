# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)



---


# To Get Started

1. `git clone <this-repo.git>`
2. `cd CMS-Corporate-Sanity/`
3. `yarn`
4. `yarn dev`

---

# This project is now abandonned because of the following reasons

1. sanity schemas are written differently if graphql is used.
2. sanity schema changes are not automtically detected by graphql, needs redeploy workflow
3. if using the strict schemas by graphql, the content editor UI may look clumpy because so many object fields are now at the top level, not needed at all!
4. alternative was very easy to set up and use: `strapi` [strapi.io](https://strapi.io/)
