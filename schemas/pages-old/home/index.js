import hero from './hero'
import stats from './stats'
import process from './process'
import features from './features'
import companies from './companies'
import testimonials from './testimonials'
import tabFeature1 from './tab-feature-one'
import tabFeature2 from './tab-feature-two'
import tabFeature3 from './tab-feature-three'
import screenshotFeature1 from './screenshot-one'
import screenshotFeature2 from './screenshot-two'
import screenshotFeature3 from './screenshot-three'
  
export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    hero,

    tabFeature1,
    tabFeature2,
    tabFeature3,

    screenshotFeature1,
    screenshotFeature2,
    screenshotFeature3,

    process,
    features,
    stats,
    testimonials,
    companies
  ]
}