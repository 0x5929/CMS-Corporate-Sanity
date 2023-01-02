import hero_schemas from './hero'

const imageRadiusOptions = [
    { title: '', value: '' },
    { title: 'none', value: 'none' },
    { title: 'small', value: 'sm' },
    { title: 'default', value: 'default' },
    { title: 'large', value: 'lg' },
    { title: 'extra-large', value: 'xl' },
    { title: 'xx-large', value: 'xxl' },
  ]
  
  const imageShadowOptions = [
    { title: '', value: '' },
    { title: 'none', value: 'none' },
    { title: 'default', value: 'default' },
    { title: 'large', value: 'lg' },
    { title: 'extra-large', value: 'xl' }
  ]
  
  const imageBorderOptions = [
    { title: '', value: '' },
    { title: 'small', value: 'sm' },
    { title: 'medium', value: 'md' },
    { title: 'large', value: 'lg' },
    { title: 'extra-large', value: 'xl' },
    { title: 'xx-large', value: 'xxl' },
  ]
  
  const imageEffectOptions = [
    { title: '', value: '' },
    { title: 'Fade In Down', value: 'fadeInDown' },
    { title: 'Float', value: 'float' },
    { title: 'Fade In Up', value: 'fadeInUp' },
    { title: 'Float Faster', value: 'floatFaster' },
  ]
  

  export default {
    name: 'home',
    type: 'document',
    title: 'Home page contents',
    fields: [
        hero_schemas
    ]
  }