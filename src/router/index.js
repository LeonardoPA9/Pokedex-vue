import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        name: "Pagination",
        path: "Pokemon/paginator",
        component: () => import("@/components/Pokedex/PokeGrid.vue"),
      },
    ],
  },
  {
    path: "/search/:searchValue",
    component: () => import("@/views/PokemonSearch.vue"),
    children: [
      {
        name: "detail",
        path: "",
        component: () => import("@/components/Search/SearchWrapper.vue"),
      },
    ],
  },
  {
    path: "/detail/:pokemon",
    component: () => import("@/views/PokemonSearch.vue"),
    children: [
      {
        path: "",
        component: () => import("@/components/PokeDetail/DetailWrapper.vue"),
      },
    ],
  },
  {
    path: "*",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
