import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      searchQuery: '',
      tableHeader: {},
      table: [],
    }
  },
  mutations: {
    updateQueryString(state, string) {
      state.searchQuery = string
    },
    deleteRow(state, id) {
      state.table.forEach((row, index) => {
        if (row.id == id) {
          state.table.splice(index, 1)
        }
      });
    },
    updateRow(state, params) {
      console.log(params)
      const { id, key, text } = params
      state.table.forEach( (row) => {
        if (row.id === id) {
          row[key] = text
        }
      })
    },
    uploadDataFromFile(state, data) {
      state.table = data
    },
    updateTableHeader(state, data) {
      state.tableHeader = data
    }
  }
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(store)
  .mount('#app')
