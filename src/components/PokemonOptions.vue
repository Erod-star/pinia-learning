<template>
  <div class="options-container">
    <button
      class="btn btn-outline-light pokemon-option"
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="checkAnswer(pokemon.id)"
    >
      {{ pokemon.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from "../composables/usePokemons";

const { pokemonArr: pokemons, checkAnswer } = usePokemons();
</script>

<style lang="sass" scoped>
.options-container
  display: flex
  justify-content: center
  flex-direction: column
  .pokemon-option
    margin-bottom: 15px
</style>
