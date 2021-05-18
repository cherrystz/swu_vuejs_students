import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Stock from "../views/Stock.vue";
import StockCreate from "../views/StockCreate.vue";
import StockEdit from "../views/StockEdit.vue";
import Shop from "../views/Shop.vue";
import Report from "../views/Report.vue";
import Transaction from "../views/Transaction.vue";

Vue.use(VueRouter)


const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/stock",
    name: "stock",
    component: Stock,
  },
  {
    path: "/stock-create",
    name: "stock-create",
    component: StockCreate,
  },
  {
    path: "/stock-edit/:id",
    name: "stock-edit",
    component: StockEdit,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/report",
    name: "report",
    component: Report,
  },
  {
    path: "/transaction",
    name: "transaction",
    component: Transaction,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {   // * must be the last sequences (page not found)
    path: "*",
    redirect: "/login"
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
