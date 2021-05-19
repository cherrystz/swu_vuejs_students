<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
  export default {
    name: "Stock",
    data () {
      return {
        header: [
          {
            text: "ID",
            value: "id"
          },
          {
            text: "Name",
            value: "name"
          },
          {
            text: "Price",
            value: "price"
          }
        ],
        data: [
          {
            id: "0", name: "pa", price:"1234"
          },
          {
            id: "1", name: "pb", price:"1234"
          },
          {
            id: "2", name: "pc", price:"1234"
          }
        ]
      }
    },
  }
</script>

<style>

</style>