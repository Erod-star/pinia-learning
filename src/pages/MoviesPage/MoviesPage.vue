<template>
  <div id="movies-page">
    <!-- <nav>Navbar</nav> -->
    <div class="d-flex mt-5">
      <router-link class="btn btn-warning add-favorites" to="/profile">
        Go to profile... </router-link
      >&nbsp;
      <router-link class="btn btn-warning add-favorites" to="/">
        Return to Menu </router-link
      >&nbsp;
    </div>

    <MovieSection class="mb-5" :movies="popularMovies" sectionTitle="Latests" />
    <MovieSection
      class="mb-5"
      :movies="popularMovies"
      sectionTitle="Populars"
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

import getPopularMovies from "../../helpers/getMoviesOptions";

export default defineComponent({
  components: { MovieSection },
  setup() {
    const popularMovies = ref();

    const setPopularMovies = async () => {
      popularMovies.value = await getPopularMovies();
    };

    onMounted(() => {
      setPopularMovies();
    });

    return {
      popularMovies,
    };
  },
});

// import { onMounted } from "vue";
// import getPopularMovies from "../../helpers/getMoviesOptions";

// onMounted(() => {
//   getPopularMovies();
// });
</script>

<style scoped>
#movies-page {
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
