<template>
  <div id="pokemon-page">
    <h1 v-if="!pokemon">Please wait...</h1>

    <div v-else>
      <h1>Who is this Pokemon?</h1>

      <PokemonPicture />

      <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />

      <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">New game!</button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from "../../composables/usePokemons";

import PokemonOptions from "../../components/PokemonOptions.vue";
import PokemonPicture from "../../components/PokemonPicture.vue";

// const { pokemon, message, newGame, mixPokemonArray } = usePokemons();
const {
  pokemon,
  message,
  newGame,
  mixPokemonArray,
  showAnswer,
  checkAnswer,
  showPokemon,
  pokemonArr,
} = usePokemons();

mixPokemonArray();
</script>

<style scoped>
#pokemon-page {
  margin-top: 60px;
}
</style>
