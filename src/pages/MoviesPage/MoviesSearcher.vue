<template>
  <Navbar />
  <div id="movies-searcher-page">
    <v-text-field
      class="input-searcher"
      label="Search here..."
      variant="outlined"
      v-model="searchTerm"
    />
    <div class="movies-container">
      <v-card
        v-for="(movie, index) in moviesFiltered"
        :key="index"
        class="movie-card mx-auto"
        max-width="400"
      >
        <v-img
          class="align-end text-white"
          height="200"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          :alt="`${movie.title}-poster`"
          cover
        >
          <v-card-title>{{ movie.title }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
          <span>{{ movie.vote_average }}</span> <span>🌟🌟🌟🌟🌟</span>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            color="orange"
            variant="tonal"
            @click="setNewFavoriteMovie(movie)"
          >
            Add to favorites</v-btn
          >

          <v-btn color="orange" variant="tonal"> See more</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import MovieSection from "../../components/movies/MovieSection.vue";
import Navbar from "../../components/Navbar.vue";
import { useMovies } from "../../composables/useMovies";

import getPopularMovies from "../../helpers/getMoviesOptions";
import router from "../../router";
import { useMoviesStore } from "../../store/moviesStore";

export default defineComponent({
  components: { MovieSection, Navbar },
  setup() {
    const allMovies = ref();
    const moviesFiltered = ref();
    const debounceTimeout = ref();
    const searcherValue = ref("");

    const setPopularMovies = async () => {
      allMovies.value = await getPopularMovies();
      moviesFiltered.value = allMovies.value;
    };

    onMounted(() => {
      setPopularMovies();
      router.replace(router.currentRoute.value.fullPath);
    });

    const { setNewFavoriteMovie } = useMovies();

    watch(searcherValue, (value) => {
      moviesFiltered.value = allMovies.value.filter((movie: any) => {
        return movie.title.toLowerCase().includes(value.toLowerCase());
      });
    });

    return {
      // ? Variables
      allMovies,
      moviesFiltered,
      searcherValue,

      // ? Computeds
      searchTerm: computed({
        get() {
          return searcherValue.value;
        },
        set(val: string) {
          if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

          debounceTimeout.value = setTimeout(() => {
            searcherValue.value = val;
          }, 500);
        },
      }),

      // ? Methods
      setNewFavoriteMovie,
    };
  },
});
</script>

<style lang="sass" scoped>
#movies-searcher-page
  padding: 0em 2em
  padding-top: 6em
  height: 100vh
  .input-searcher
    width: 80%
  .movies-container
    padding: 0.75em
    display: flex
    flex-wrap: wrap
    overflow: auto
    max-height: 550px
    transition: 300ms ease all
    .movie-card
      margin-bottom: 20px
      background: rgb(12, 12, 12)
      color: #fff
      .v-card-title
        color: orange
        font-weight: 700
      .v-img__img
        opacity: 0.5 !important
</style>
