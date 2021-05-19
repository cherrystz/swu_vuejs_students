<template>
  <div style="margin: 10px">
  <h1>Computed</h1>
  <div>{{ random }}</div>
  <div>{{ random }}</div>
  <div>{{ random }}</div>
  <div>{{ random }}</div>
  
  <h1>Methods</h1>
  <div>{{ randomMethod() }}</div>
  <div>{{ randomMethod() }}</div>
  <div>{{ randomMethod() }}</div>
  <div>{{ randomMethod() }}</div>
  
  </div>
</template>

<script>
export default {
    name: "Stock",
    computed: {
      random() {
        return Math.random()
      }
    },
    methods: {
      randomMethod() {
        return Math.random()
      }
    }
}
</script>

<style>

</style>