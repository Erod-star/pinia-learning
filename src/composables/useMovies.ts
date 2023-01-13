import { useMoviesStore } from "../store/moviesStore";
import { movie } from "../interfaces/movies";

export const useMovies = () => {
  const moviesStore = useMoviesStore();
  const { userFullName, favoritesList, recentlyWatched } = moviesStore;

  const setNewFavoriteMovie = (movie: movie) => {
    moviesStore.addFavoriteMovie(movie);
  };

  return {
    // ? Propperties
    userFullName,
    favoritesList,
    recentlyWatched,

    // ? Methods
    setNewFavoriteMovie,
  };
};
