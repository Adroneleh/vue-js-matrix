<template>
  <v-text-field
    v-model="query"
    color="secondary"
    label="Search"
    variant="contained"
    placeholder="Table search"
    @input="getQuery"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableSearch',
  data: () => ({
    query: '',
  }),
  methods: {
    getQuery() {
      this.$store.commit('updateQueryString', this.query)
    },
  },
})
</script>
