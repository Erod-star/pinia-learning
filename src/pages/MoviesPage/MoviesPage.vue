<template>
  <div id="movies-page">
    <nav>Navbar</nav>
    <!-- Create as component -->
    <div class="movies-section">
      <h3>Popular</h3>
      <div>
        <h5>Tittle</h5>
        <span>Realse date</span>
        <div class="d-flex">
          <img src="IMAGE" alt="${movie}-poster" />
          <p>overview</p>
        </div>
        <span>generes</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import getPopularMovies from "../../helpers/getMoviesOptions";

onMounted(() => {
  getPopularMovies();
});
</script>

<style scoped>
#movies-page {
  color: black;
}
</style>
