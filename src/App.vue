<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <ImportXLSXFileVue />
          </v-col>
          <v-col cols="12" md="4">
            <TableSearch />
          </v-col>
        </v-row>
      </v-container>
      <TableView />
    </v-main>
  </v-app>
</template>

<script>
import TableView from './components/TableView.vue'
import TableSearch from './components/TableSearch.vue'
import ImportXLSXFileVue from './components/ImportXLSXFile.vue'


export default {
  name: 'App',

  components: {
    TableView,
    TableSearch,
    ImportXLSXFileVue
  },

  data: () => ({
    //
  }),
}
</script>
