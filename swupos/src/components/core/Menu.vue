<template lang="html">
  <v-navigation-drawer
    app
    permanent
    absolute
    dark
    src="@/assets/background_menu.jpg"
  >
    <router-link to="/" exact>
      <img src="@/assets/vue_display.jpg" alt="" width="100%" />
    </router-link>

    <v-list shaped>
      <v-subheader>MENUS</v-subheader>
      <v-list-item-group v-model="selectedMenu" mandatory>
        <v-list-item
          class="tile"
          v-for="([icon, text, route], i) in menus"
          :key="i"
          link
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="js">

  export default  {
    name: 'Menu',
    props: [],
    mounted () {
      this.selectedMenu = this.menus.findIndex(menu=> menu[2] == this.$route.path)
    },
    data () {
      return {
        selectedMenu:0,
        menus: [
        ['mdi-apps-box', 'Stock', '/stock'],
        ['mdi-cart-outline', 'Shop', '/shop'],
        ['mdi-chart-areaspline', 'Report', '/report'],
        ['mdi-folder-multiple-outline', 'Transaction', '/transaction'],

      ],
      }
    },
    methods: {
      onClickMenu(link){
        this.$router.push(link).catch(err => {})
      }
    },
    watch:{
     $route(to, from) {
       console.log(`to:${to}, from:${from}`)
       this.selectedMenu = this.menus.findIndex(menu=> menu[2] == to.path)
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
// .menu {
  
// }

.tile {
  color: #fff;
}
.tile:hover {
  background: green;
}
.tile:active {
  background: #05ab71;
}
</style>
