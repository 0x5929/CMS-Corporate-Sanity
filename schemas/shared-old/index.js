import header from './header'
import footer from './footer'
// import contact from './contact'
import headerLight from './header-light'
import advertisement from './advertisement'
// import authentication from './authentication'

export default {
    name: 'shared',
    title: 'Shared Content',
    type: 'document',
    fields: [

      /** HEADER, FOOTER */
      header,
      footer,
      headerLight,
      
      /** MODALS */
      // contact,
      advertisement,
      // authentication
    ]
}