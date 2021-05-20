import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Stock from "../views/Stock.vue";
import StockCreate from "../views/StockCreate.vue";
import StockEdit from "../views/StockEdit.vue";
import Shop from "../views/Shop.vue";
import Report from "../views/Report.vue";
import Transaction from "../views/Transaction.vue";
import api from "@/services/api";

Vue.use(VueRouter);

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
    meta: { isSecured: true },
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
    meta: { isSecured: true },
    component: Shop,
  },
  {
    path: "/report",
    name: "report",
    meta: { isSecured: true },
    component: Report,
  },
  {
    path: "/transaction",
    name: "transaction",
    meta: { isSecured: true },
    component: Transaction,
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "*",
    redirect: "/login",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Router guard
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => (record.meta.isSecured ? true : false))) {
    // secure route
    if (api.isLoggedIn()) {
      next();
    } else {
      next("/login");
    }
  } else {
    // unsecure route
    next();
  }
});

export default router;
