import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      searchQuery: '',
      table: [
        {
          count: 10,
          name: 'Art',
          address: 'Lenin street',
          emailAddress: 'exampleSobakasite.com',
          phoneNumber: '89991231223',
          amount: 890
        },
        {
          count: 10,
          name: 'Andrey',
          address: 'Lenin street',
          emailAddress: 'exampleSobakasite.com',
          phoneNumber: '89991231223',
          amount: 890
        },
          {
          count: 10,
          name: 'Andrey',
          address: 'Lenin street',
          emailAddress: 'exampleSobakasite.com',
          phoneNumber: '89991231223',
          amount: 890
        },
          {
          count: 10,
          name: 'Andrey',
          address: 'Lenin street',
          emailAddress: 'exampleSobakasite.com',
          phoneNumber: '89991231223',
          amount: 890
        },
      ],
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    updateQueryString (state, string) {
      state.searchQuery = string
    }
  }
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(store)
  .mount('#app')
