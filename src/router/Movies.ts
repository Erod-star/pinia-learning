import MoviesPage from "../pages/MoviesPage/MoviesPage.vue";
import MoviesSearcher from "../pages/MoviesPage/MoviesSearcher.vue";
import MovieDetail from "../pages/MoviesPage/MovieDetail.vue";
import UserProfilePage from "../pages/MoviesPage/UserProfile.vue";
import UserProfileForm from "../pages/MoviesPage/UserProfileForm.vue";

export default [
  {
    path: "/movies",
    name: "movies",
    component: MoviesPage,
    // children: [
    //   {
    //     path: "/movies/movie-detail",
    //     name: "movies-searcher",
    //     component: MovieDetail,
    //   },
    // ]
  },
  {
    path: "/movies/:id",
    name: "movies-detail",
    component: MovieDetail,
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfilePage,
  },
  {
    path: "/profile-edit",
    name: "profile-edit",
    component: UserProfileForm,
  },
  {
    path: "/search",
    name: "movies-searcher",
    component: MoviesSearcher,
  },
];
