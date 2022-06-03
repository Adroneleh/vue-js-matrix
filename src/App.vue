<template>
  <v-app>
    <v-main>
      <TableSearch/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TableSearch from './components/TableSearch.vue'


export default {
  name: 'App',

  components: {
    HelloWorld,
    TableSearch
  },

  data: () => ({
    //
  }),
}
</script>
