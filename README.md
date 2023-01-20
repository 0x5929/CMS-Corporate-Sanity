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


# To Deploy

1. `set up Github Action to include an API deploy token` [more info](https://www.sanity.io/docs/deployment#59a23cd85193).
2. `sanity deploy`
3. create `Netlify` build hook: 
    1. Go into `Netlify` panel
    2. click on `Site settings`
    3. find `Build and deploy`
    4. click `Add build hook` inside the `Build hooks` section
    5. enter a name, and connect to a branch to build
    6. save the hook URL

4.  go to sanity io panel > API settings > webhooks
5. add in the necessary info

---

### TODOs: 

1. create options for button color, radius, shadow, and other props
2. test and implement more friendlier identifiers for each data point
3. get rid of sanity studio middle column, each only has one entry anyways
4. figure out how to do live previews with gatsby. See issue below.

#### Issues: 

1. Each content change takes about 2 minutes for `Netlify` to rebuild page (could be solved by live preview)
