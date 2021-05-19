import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import store from "./store";
import { imageUrl } from "@/services/constants";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.filter("imageUrl", (image) => {
  return `${imageUrl}/${image}?timestamp=${Date.now()}`;
});

Vue.filter("prefix", (value) => {
  return "#" + value;
});
