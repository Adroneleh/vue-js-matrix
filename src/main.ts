import { createApp } from 'vue'
import App from './App.vue'
import { Store } from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(Store)
  .use(vuetify)
  .mount('#app')
