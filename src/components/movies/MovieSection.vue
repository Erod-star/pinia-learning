<template>
  <div class="movies-section">
    <h3>{{ sectionTitle }}</h3>
    <div class="movies-section__items">
      <div class="movie-section__item" v-for="movie in movies" :key="movie">
        <div class="movie-section__item--header">
          <h5 class="text-start">{{ movie.title }}</h5>
          <div class="d-flex movie-section__item--header-raiting">
            <span>{{ movie.vote_average }}</span>
            <span>🌟🌟🌟🌟🌟</span>
          </div>
        </div>
        <div class="movie-section__item--content">
          <img
            :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
            :alt="`${movie.title}-poster`"
          />
          <div class="movie-section__item--content-description">
            <span>{{ movie.genre_ids }}</span>
            <p>{{ movie.overview }}</p>

            <div class="movie-section__item--content-description--buttons">
              <button class="btn btn-outline-warning add-favorites">
                See more...
              </button>
              <button
                class="btn btn-outline-warning"
                @click="setNewFavoriteMovie(movie)"
              >
                Add to favorites!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMovies } from "../../composables/useMovies";

export default defineComponent({
  props: {
    sectionTitle: { type: String, default: "" },
    movies: { type: Array, default: () => [] },
  },
  setup() {
    const { setNewFavoriteMovie, favoritesList } = useMovies();
    return {
      setNewFavoriteMovie,
      favoritesList,
    };
  },
});
</script>

<style scoped>
.movies-section {
  max-height: 30em;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 2em;
}

.movies-section h3 {
  font-size: 48px;
  box-shadow: 0px 9px 12px rgba(32, 32, 32, 0.2);
  font-weight: 500;
  margin-bottom: 0.75em;
}

.movies-section__items {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: auto;
  justify-content: space-between;
  padding: 0px 5px;
  border-radius: 15px;
}

.movie-section__item {
  display: flex;
  flex-direction: column;
  background: rgb(12, 12, 12);
  color: white;
  margin-bottom: 20px;
  border-radius: 15px;
  width: 550px;
  box-shadow: 0px 9px 12px rgba(32, 32, 32, 0.2);
  /* margin-right: 3.25em; */
}
.movie-section__item--header {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
  padding-top: 15px;
  padding-bottom: 7.5px;
  border-bottom: 1px solid gray;
}

.movies-section__items > .movie-section__item :nth-child(even) {
  margin-right: 0px;
}

.movie-section__item--header h5 {
  font-size: 26px;
  width: 360px;
  font-weight: 400;
}

.movie-section__item--content {
  display: flex;
}

.movie-section__item--content img {
  height: 210px;
  width: 120px;
  border-radius: 5px;
}
.movie-section__item--content-description {
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.movie-section__item--content-description span {
  margin-bottom: 10px;
}

.movie-section__item--content-description > p {
  text-align: justify;
}

.movie-section__item--content-description--buttons {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
}

.movie-section__item--content-description--buttons .add-favorites {
  margin-left: 20px;
}

.movie-section__item--content-description--buttons button {
  font-size: 14px;
}
</style>
