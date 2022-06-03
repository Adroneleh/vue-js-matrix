<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="12"
        >
          <v-text-field
            v-model="query"
            
            color="secondary"
            label="Search"
            variant="contained"
            placeholder="Table search"
          ></v-text-field>
        </v-col>
      </v-row>
          <v-btn
      color="success"
      class="mr-4"
      @click="getQuery"
    >
      Validate
    </v-btn>

    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'TableSearch',

  data: () => ({
    query: '',
  }),
  watch: {
    doIncrement() {
      this.increment()
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
    getQuery() {
      this.$store.commit('updateQueryString', this.query)
      console.log(this.$store.state.searchQuery)
    }
  }
}
// this.methods.increment()

</script>
