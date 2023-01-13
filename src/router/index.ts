import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// ? Routes
import HomePage from "../pages/HomePage.vue";
import PokemonPage from "../pages/PokemonPage/PokemonPage.vue";
import MoviesPage from "../pages/MoviesPage/MoviesPage.vue";
import UserProfilePage from "../pages/MoviesPage/UserProfile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  { path: "/pokemonGame", name: "pokemonGame", component: PokemonPage },
  {
    path: "/movies",
    name: "movies",
    component: MoviesPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfilePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
