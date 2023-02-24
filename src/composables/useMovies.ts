import { useMoviesStore } from "../store/moviesStore";
import { movie } from "../interfaces/movies";

export const useMovies = () => {
  const moviesStore = useMoviesStore();
  const { userFullName, favoritesList, recentlyWatched } = moviesStore;

  const setNewFavoriteMovie = (movie: movie) => {
    console.log(favoritesList);
    const exist = favoritesList.some((e) => e.id === movie.id);
    console.log(exist);
    if (!exist) moviesStore.addFavoriteMovie(movie);
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
