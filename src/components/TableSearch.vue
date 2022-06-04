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

<script>
export default {
  name: 'TableSearch',

  data: () => ({
    query: '',
  }),
  methods: {
    getQuery() {
      this.$store.commit('updateQueryString', this.query)
    }
  }
}
</script>
