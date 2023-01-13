<template>
  <div id="profile">
    <p>Name:</p>
    <p>reciently watched</p>
    <!-- <div v-if="favoritesList.length > 0">
      <h2>No favorite movies founded</h2>
    </div>
    <div v-else> -->
    <MovieSection :movies="favoritesList" sectionTitle="Favorites" />
    <!-- </div> -->
    <div class="d-flex py-5">
      <router-link class="btn btn-warning add-favorites" to="/movies">
        Return to all movies </router-link
      >&nbsp;
      <router-link class="btn btn-warning add-favorites" to="/">
        Return to Menu </router-link
      >&nbsp;
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieSection from "../../components/movies/MovieSection.vue";
import { useMovies } from "../../composables/useMovies";

export default defineComponent({
  components: { MovieSection },
  props: {
    user: { type: Object, default: () => {} },
  },
  setup() {
    const { favoritesList } = useMovies();
    return {
      favoritesList,
    };
  },
});
</script>

<style scoped>
#profile {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
