<template>
  <div id="movies-page">
    <Navbar />

    <div v-if="popularMovies" class="special-movie">
      <div class="special-movie__highlight">
        <p>Checkout the newest popular film...</p>
        <span>{{ popularMovies[0].title }}</span>
        <p class="only-on-teathers">Only in teaters!</p>
        <button
          class="btn btn-outline-warning"
          @click="navigateToMovie(popularMovies[0])"
        >
          See more...
        </button>
      </div>
      <v-img
        :width="500"
        aspect-ratio="16/9"
        cover
        :src="`https://image.tmdb.org/t/p/w500${popularMovies[0].backdrop_path}`"
      />
    </div>

    <MovieSection
      class="mb-5"
      :movies="popularMovies"
      sectionTitle="Populars"
    />
    <MovieSection
      class="mb-5"
      :movies="latestMovies"
      sectionTitle="Top rated"
    />
    <MovieSection
      class="mb-5"
      :movies="popularMovies"
      sectionTitle="Now Playing"
    />
    <MovieSection
      class="mb-5"
      :movies="popularMovies"
      sectionTitle="Upcoming"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import MovieSection from "../../components/movies/MovieSection.vue";
import Navbar from "../../components/Navbar.vue";
import { useMovies } from "../../composables/useMovies";

import getPopularMovies, {
  getLatestMovies,
} from "../../helpers/getMoviesOptions";

export default defineComponent({
  components: { MovieSection, Navbar },
  setup() {
    const popularMovies = ref();
    const latestMovies = ref();
    // const specialMoviePath = ref()

    const { navigateToMovie } = useMovies();

    const setMovies = async () => {
      popularMovies.value = await getPopularMovies();
      latestMovies.value = await getLatestMovies();
    };

    onMounted(() => {
      setMovies();
    });

    return {
      popularMovies,
      latestMovies,
      navigateToMovie,
    };
  },
});
</script>

<style lang="sass" scoped>
#movies-page
  color: white
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 5em
  justify-content: center
  .special-movie
    display: flex
    justify-content: center
    align-items: center
    padding: 2em 7em
    .v-img
      border-radius: 15px
    &__highlight
      margin-right: 5em
      p
        margin-bottom: 0px
        font-size: 20px
        margin-bottom: 15px
      span
        font-size: 35px
        font-weight: bold
        font-style: italic
      .only-on-teathers
        margin-bottom: 20px
        margin-top: 15px
</style>
