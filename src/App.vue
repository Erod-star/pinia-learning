<template>
  <router-view />
</template>

<script setup lang="ts"></script>

<style>
body {
  background: #111;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(230, 230, 230);
  height: 1005;
}

::-webkit-scrollbar {
  width: 0.25em;
}

::-webkit-scrollbar-track {
  background: #111;
  border-radius: 100vh;
  margin-block: 0.5em;
}

::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 100vh;
}
::-webkit-scrollbar-thumb:hover {
  background: gray;
  cursor: pointer;
}
p {
  margin-bottom: 0px;
}
</style>
