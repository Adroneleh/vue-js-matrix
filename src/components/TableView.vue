<template>
  <v-table fixed-header height="75vh">
    <thead v-on:click="cellClick">
      <tr>
        <th class="text-left" v-for="value in tableHeader" :key="value">{{ value }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredTable" :key="item.name">
        <td v-for="[key, val] in Object.entries(item)" :key="key">
          <input
            type="text"
            :value="val"
            :ref="key + item.id"
            @change="updateCell(item.id, key, this.$refs[key + item.id][0].value, item)"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import * as XLSX from "xlsx"

export default {
  data() {
    return {
      tableData: this.$store.state.table,
      tableHeader: this.$store.state.tableHeader,
    };
  },
  methods: {
    deleteRow(id) {
      this.$store.commit('deleteRow', id)
    },
    updateCell(id, key, text, item) {
      console.log(item)
      this.$store.commit('updateRow', { id, key, text })
    },
    exportFile() {
      const data = XLSX.utils.json_to_sheet(this.tableData)
      console.log(data)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, data, 'data')
      XLSX.writeFile(wb, 'demo.xlsx')
    },

  },
  computed: {
    filteredTable() {
      return this.tableData.filter((row) =>
        Object.keys(row).some((key) =>
          row[key].toString().toLowerCase().includes(this.$store.state.searchQuery.toLowerCase())
        )
      );
    },
  },
};
</script>

<!-- @click="deleteRow(item.id) -->
