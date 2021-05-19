<template lang="html">
  <v-app-bar app color="#1c2835" dark>
    <v-btn v-if="isShowBackBtn" icon>
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>CMPOS Workshop V</v-toolbar-title>
    <v-spacer></v-spacer>
    <h1>Dev {{ $store.state.count }}</h1>
    <!-- <span>{{ $store.getters["username"] | capitalize }}</span> -->
    <v-btn icon @click="onClickLogOff">
      <v-icon>mdi-export</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="js">

const sub_paths = [
  "stock-create",
  "stock-edit", ]

  export default  {
    name: 'Header',
    props: [],
    computed: {
     version(){
        return process.env.VUE_APP_VERSION
      },
      isShowBackBtn(){
        return this.$route.matched.some(({ name }) => {
          let index = sub_paths.indexOf(name)
          return index != -1
          })
      }
    },
    methods: {
      isDev(){
       return process.env.VUE_APP_IS_PRODUCTION === '0'
      },
      onClickLogOff(){
        this.$store.dispatch('doLogout')
      }
    }
}
</script>

<style scoped></style>
