<template>
  <div id="movies-page">
    <Navbar />
    <v-carousel
      cycle
      progress="primary"
      class="movies-carrousel"
      hide-delimiter-background
      show-arrows="hover"
      height="400"
      cover
    >
      <v-carousel-item
        v-for="(movie, i) in popularMovies"
        :key="i"
        :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
        cover
      />
    </v-carousel>
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

import getPopularMovies, {
  getLatestMovies,
} from "../../helpers/getMoviesOptions";

export default defineComponent({
  components: { MovieSection, Navbar },
  setup() {
    const popularMovies = ref();
    const latestMovies = ref();

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
    };
  },
});
</script>

<style scoped>
#movies-page {
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.movies-carrousel {
  margin-top: 4em;
}

/* #movies-page
  color: white
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center */
</style>
