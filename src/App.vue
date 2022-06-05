<template>
  <v-app>
    <v-main>
      <v-container class="header">
          <v-container class="header__left">
            <TableSearch />
          </v-container>
          <v-container class="header__right">
            <ImportXLSXFile />
            <ExportXLSXFile />
          </v-container>
      </v-container>
      <TableView />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import TableView from './components/TableView.vue'
import TableSearch from './components/TableSearch.vue'
import ImportXLSXFile from './components/ImportXLSXFile.vue'
import ExportXLSXFile from './components/ExportXLSXFile.vue'
import '@/App.scss'

export default {
  name: 'App',
  components: {
    TableView,
    TableSearch,
    ExportXLSXFile,
    ImportXLSXFile,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

body::-webkit-scrollbar {
  display: none;
}
</style>
