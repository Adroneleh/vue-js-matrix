<template>
  <v-table fixed-header height="500px">
    <thead v-on:click="cellClick">
      <tr>
        <th class="text-left">Count</th>
        <th class="text-left">Name</th>
        <th class="text-left">Address</th>
        <th class="text-left">EmailAddress</th>
        <th class="text-left">Phone Number</th>
        <th class="text-left">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in filteredTable" :key="item.name">
        <td v-for="key in Object.keys(item)" :key="item[key]">{{item[key]}}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      desserts: this.$store.state.table,
    };
  },
  methods: {
    cellClick() {
      console.log(this.filteredTable);
    },
  },
  computed: {
    filteredTable() {
      return this.desserts.filter((dessert) =>
        Object.keys(dessert).some((key) =>
          dessert[key].toString().toLowerCase().includes(this.$store.state.searchQuery)
        )
      );
    },
  },
};
</script>
