<template>
  <v-btn color="success" class="mr-4" @click="exportFile">Export</v-btn>
</template>

<script>
import * as XLSX from "xlsx";

export default {
  data: () => ({}),
  methods: {
    exportFile() {
      const data = XLSX.utils.json_to_sheet(this.$store.state.table);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, data, "data");
      XLSX.writeFile(wb, "demo.xlsx");
    },
  },
};
</script>
