<template>
  <div>
    <span class="bg_image"></span>
    <v-app>
      <Header v-if="$store.getters['isLogin']" />
      <Menu v-if="$store.getters['isLogin']" />
      <Content />
    </v-app>
  </div>
</template>

<script>
import Header from "@/components/core/Header";
import Menu from "@/components/core/Menu";
import Content from "@/components/core/Content";

export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content,
  },
  mounted() {
    this.$store.dispatch({ type: "restoreLogin" });
  },
};
</script>

<style scoped>
.bg_image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("assets/background.jpg") no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
}
</style>
