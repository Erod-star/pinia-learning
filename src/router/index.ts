import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// ? Routes
import HomePage from "../pages/HomePage.vue";
import PokemonPage from "../pages/PokemonPage/PokemonPage.vue";
import MoviesPage from "../pages/MoviesPage/MoviesPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: PokemonPage,
  },
  { path: "/pokemonGame", name: "pokemonGame", component: HomePage },
  {
    path: "/movies",
    name: "movies",
    component: MoviesPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
