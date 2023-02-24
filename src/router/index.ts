import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// ? Routes
import HomePage from "../pages/HomePage.vue";
import PokemonPage from "../pages/PokemonPage/PokemonPage.vue";
import MoviesPage from "../pages/MoviesPage/MoviesPage.vue";
import MoviesSearcher from "../pages/MoviesPage/MoviesSearcher.vue";
import MovieDetail from "../pages/MoviesPage/MovieDetail.vue";
import UserProfilePage from "../pages/MoviesPage/UserProfile.vue";
import Movies from "./Movies";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  { path: "/pokemonGame", name: "pokemonGame", component: PokemonPage },
  ...Movies,
  // {
  //   path: "/movies",
  //   name: "movies",
  //   component: MoviesPage,
  // },
  // {
  //   path: "/movies/movie-detail",
  //   name: "movies-searcher",
  //   component: MovieDetail,
  // },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   component: UserProfilePage,
  // },
  // {
  //   path: "/search",
  //   name: "movies-searcher",
  //   component: MoviesSearcher,
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
