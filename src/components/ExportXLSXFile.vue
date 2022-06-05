<template>
  <v-btn color="normal" class="mr-4" @click="exportFile">Export</v-btn>
</template>

<script lang="ts">
import * as XLSX from 'xlsx'

import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({}),
  methods: {
    exportFile() {
      const data: any = XLSX.utils.json_to_sheet(this.$store.state.table)
      const wb: any = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, data, 'data')
      XLSX.writeFile(wb, 'file.xlsx')
    },
  },
})
</script>
