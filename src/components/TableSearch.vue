<template>
    <v-text-field
      v-model="query"
      color="secondary"
      label="Search"
      variant="contained"
      placeholder="Table search"
    ></v-text-field>
    <v-btn color="success" class="mr-4" @click="getQuery">Search</v-btn>
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
