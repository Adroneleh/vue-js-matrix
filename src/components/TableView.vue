<template>
  <v-table v-if="filteredTable" fixed-header height="75vh">
    <thead class="table_header" v-on:click="cellClick">
      <tr class="table_header__items">
        <th class="table_header__item" v-for="value in tableHeader" :key="value">
          {{ value }}
        </th>
        <th class="table_header__item" v-if="Object.values(tableHeader).length > 0">
          <v-icon class="table_content__icon" color="#000000" @click="addEmptyRow">mdi-plus-box</v-icon>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in filteredTable" :key="item.name" class="table_content">
        <td
          class="table_content__item"
          v-for="[key, val] in Object.entries(item)"
          :key="key"
        >
          <input
            type="text"
            :value="val"
            :ref="key + index"
            @change="updateCell(index, key, this.$refs[key + index][0].value)"
          />
        </td>
        <td class="table_content__item">
          <v-icon class="table_content__icon" color="#808080" @click="copyRow(index)">mdi-content-copy</v-icon>
          <v-icon class="table_content__icon" color="#FF0000" @click="deleteRow(index)">mdi-delete</v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import './TableView.scss'

import { TableTypes } from '@/types/table.types'

export default defineComponent({
  name: 'TableView',
  data() {
    return {
      tableData: this.$store.state.table,
      tableHeader: this.$store.state.tableHeader,
    }
  },
  methods: {
    deleteRow(index: number) {
      this.$store.commit('deleteRow', index)
    },
    updateCell(index: number, key: string, value: string) {
      this.$store.commit('updateRow', { index, key, value })
    },
    copyRow(index: number) {
      this.$store.commit('copyRow', index)
    },
    addEmptyRow() {
      this.$store.commit('addEmptyRow')
    },
  },
  watch: {
    '$store.state.tableHeader': {
      handler() {
        this.tableHeader = this.$store.state.tableHeader
      },
      immediate: true,
    },
  },
  computed: {
    filteredTable() {
      return this.$store.state.table.filter((row: TableTypes) =>
        Object.keys(row).some((key) =>
          row[key]
            .toString()
            .toLowerCase()
            .includes(this.$store.state.searchQuery.toLowerCase())
        )
      )
    },
  },
})
</script>
