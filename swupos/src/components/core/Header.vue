<template lang="html">
  <v-app-bar app color="#1c2835" dark>
    <v-btn icon >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title
      >CMPOS Workshop V</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <h1>Dev</h1>
    <!-- <span>{{ $store.getters["username"] | capitalize }}</span> -->
    <v-btn icon >
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="js">
const sub_paths = [
  "stock-create",
  "stock-edit"]

  export default  {
    name: 'Header',
    props: []
}
</script>

<style scoped lang="scss"></style>
