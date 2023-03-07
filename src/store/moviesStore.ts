import { defineStore } from "pinia";

import { movie } from "../interfaces/movies";

interface MoviesState {
  userFullName: string;
  favoritesList: movie[];
  recentlyWatched: movie[];
  activeMovie: movie | null;
}

export const useMoviesStore = defineStore("movies", {
  state: (): MoviesState => {
    return {
      // all these properties will have their type inferred automatically
      userFullName: "Edson Rodriguez",
      favoritesList: [],
      recentlyWatched: [],
      activeMovie: null,
    };
  },
  actions: {
    addFavoriteMovie(movie: movie) {
      // this.favoritesList = [...this.favoritesList, movie];
      this.favoritesList = [...this.favoritesList, movie];
    },
    resetState() {
      this.userFullName = "Edson Rodriguez";
      this.favoritesList = [];
      this.recentlyWatched = [];
    },
    setActiveMovie(movie: movie) {
      this.activeMovie = movie;
    },
  },
  getters: {
    currentFavoirtes: (state) => state.favoritesList,
    currentActiveMovie: (state) => state.activeMovie,
  },
});
