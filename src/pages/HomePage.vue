<template>
  <div id="home-page">
    <h1>Welcome to the home page</h1>
    <div class="button-apps-container">
      <h3 class="mt-5">Select an app!</h3>
      <router-link class="mt-3 btn btn-warning add-favorites" to="/movies">
        Movies app </router-link
      >&nbsp;
      <router-link class="mt-3 btn btn-warning add-favorites" to="/pokemonGame">
        Pokemon game </router-link
      >&nbsp;
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
}
#home-page .button-apps-container > .movies-app-button {
  margin-right: 10px;
}
</style>
