<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <ImportXLSXFile />
          </v-col>
          <v-col cols="12" md="4">
            <ExportXLSXFile />
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
import TableView from "./components/TableView.vue";
import TableSearch from "./components/TableSearch.vue";
import ImportXLSXFile from "./components/ImportXLSXFile.vue";
import ExportXLSXFile from "./components/ExportXLSXFile.vue";

export default {
  name: "App",

  components: {
    TableView,
    TableSearch,
    ImportXLSXFile,
    ExportXLSXFile,
  },

  data: () => ({
    //
  }),
};
</script>
