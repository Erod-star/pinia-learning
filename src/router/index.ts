import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// ? Routes
import HomePage from "../pages/HomePage.vue";
import PokemonPage from "../pages/PokemonPage/PokemonPage.vue";
import Movies from "./Movies";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  { path: "/pokemonGame", name: "pokemonGame", component: PokemonPage },
  ...Movies,
  {
    path: "/:catchAll(.*)",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
