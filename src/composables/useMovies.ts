import { useMoviesStore } from "../store/moviesStore";
import { movie } from "../interfaces/movies";
import router from "../router/index";
// import Toastify from "toastify-js";

export const useMovies = () => {
  const moviesStore = useMoviesStore();
  const {
    userFullName,
    favoritesList,
    recentlyWatched,
    setActiveMovie,
    activeMovie,
  } = moviesStore;

  const setNewFavoriteMovie = (movie: movie) => {
    console.log(favoritesList);
    // Toastify({
    //   text: "This is a toast",
    //   className: "info",
    //   style: {
    //     background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   },
    // }).showToast();
    const exist = favoritesList.some((e) => e.id === movie.id);
    console.log(exist);
    if (!exist) moviesStore.addFavoriteMovie(movie);
  };

  const navigateToMovie = (movie: movie) => {
    setActiveMovie(movie);
    router.push(`/movies/${movie.id}`);
  };

  return {
    // ? Propperties
    userFullName,
    favoritesList,
    recentlyWatched,
    activeMovie,

    // ? Methods
    setNewFavoriteMovie,
    navigateToMovie,
  };
};
