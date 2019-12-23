import Vue from "vue";
import VueRouter from "vue-router";
import Pessoas from "../views/Pessoas.vue";
import Empresas from "../views/Empresas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Empresas",
    component: Empresas
  },
  {
    path: "/pessoas",
    name: "Pessoas",
    component: Pessoas
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
