<template>
  <div id="home-page">
    <h1>Home page!!</h1>
    <div class="button-apps-container">
      <h3>Select an app!</h3>
      <button class="btn btn-primary mr-3 movies-app-button" type="button">
        Movies app
      </button>
      <button class="btn btn-primary" type="button">Pokemon Game</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#home-page {
  color: black;
}
#home-page .button-apps-container > .movies-app-button {
  margin-right: 10px;
}
</style>
