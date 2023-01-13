<script setup lang="ts">
import PokemonPage from "./pages/PokemonPage/PokemonPage.vue";
import MoviesPage from "./pages/MoviesPage/MoviesPage.vue";
import UserProfile from "./pages/MoviesPage/UserProfile.vue";
import HomePage from "./pages/HomePage.vue";
</script>
<template>
  <!-- <PokemonPage /> -->
  <!-- <UserProfile /> -->
  <!-- <MoviesPage /> -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(230, 230, 230);
  background: #111;
  height: 1005;
}
</style>
