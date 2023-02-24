<template>
  <nav id="navbar" class="d-flex">
    <router-link to="/"> Return to Menu </router-link>
    <router-link to="/movies"> All movies </router-link>
    <router-link to="/search"> Search a movie </router-link>
    <router-link to="/profile"> My profile </router-link>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
#navbar
  width: 100%
  display: flex
  height: 5em
  background: #000
  align-items: center
  justify-content: space-between
  padding: 0px 20px
  position: fixed
  top: 0px
  z-index: 99
  a
    color: white
    text-decoration: none
    transition: 300ms all ease
    &:hover
      color: darken(#fff, 30)
</style>
