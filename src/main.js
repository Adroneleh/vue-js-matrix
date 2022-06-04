import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      searchQuery: "",
      tableHeader: {},
      table: [],
    };
  },
  mutations: {
    updateQueryString(state, string) {
      state.searchQuery = string;
    },
    deleteRow(state, idx) {
      state.table.forEach((row, index) => {
        if (index == idx) {
          state.table.splice(index, 1);
        }
      });
    },
    updateRow(state, params) {
      console.log(params);
      const { ind, key, text } = params;
      state.table.forEach((row, index) => {
        if (index === ind) {
          row[key] = text;
        }
      });
    },
    uploadDataFromFile(state, data) {
      state.table = data;
    },
    updateTableHeader(state, data) {
      state.tableHeader = data;
    },
    copyRow(state, idx) {
      state.table.push(state.table[idx])
    },
  },
});

loadFonts();

createApp(App).use(vuetify).use(store).mount("#app");
