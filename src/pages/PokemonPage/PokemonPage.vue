<template>
  <div id="pokemon-page">
    <v-dialog class="game-over-modal" v-model="dialog" width="auto">
      <v-card class="game-over-modal__card" color="#111">
        <v-card-title class="game-over-modal__title">Game over!</v-card-title>
        <v-card-text class="game-over-modal__text"
          >Your score: {{ score }}
        </v-card-text>
        <v-card-actions>
          <button class="btn btn-outline-warning w-100" @click="onModalClose">
            Start again!
          </button>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="return-to-menu">
      <router-link
        class="mb-3 mt-3 btn btn-warning"
        to="/"
        @click="clearPokemonState"
      >
        Return to Menu </router-link
      >&nbsp;
      <div class="highest-score">Highest score: {{ highScore }}</div>
    </div>

    <div class="player-status">
      <div class="player-lifes">
        <img
          v-for="i in playerLifes"
          :key="i"
          src="../../assets/heart.svg"
          alt="user life"
        />
      </div>
      <div class="player-score">
        <p>{{ firstName }}'s score: {{ score }}</p>
      </div>
    </div>

    <h1 class="loading-pokemon" v-if="!pokemon">Please wait...</h1>

    <div class="pokemon-quiz-container" v-else>
      <h1>Who is this Pokemon?</h1>

      <PokemonPicture class="mt-5" />

      <PokemonOptions
        v-if="!showAnswer"
        class="mt-5"
        :pokemons="pokemonArr"
        @selection-pokemon="checkAnswer"
      />

      <div class="answer-box" v-else>
        <h2 class="fade-in">{{ message }}</h2>
        <div class="d-flex justify-content-center">
          <button class="btn btn-outline-warning" @click="clearPokemonState">
            Restart game
          </button>
          <button class="continue-btn btn btn-outline-warning" @click="newGame">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from "../../composables/usePokemons";

import PokemonOptions from "../../components/PokemonOptions.vue";
import PokemonPicture from "../../components/PokemonPicture.vue";
import { ref, watch } from "vue";
import { useUser } from "../../composables/useUser";

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
  playerLifes,
  score,
  clearPokemonState,
  highScore,
} = usePokemons();

const { firstName } = useUser();

mixPokemonArray();

const dialog = ref(false);

watch(playerLifes, (value) => {
  if (value <= 0) dialog.value = true;
});

const onModalClose = () => {
  dialog.value = false;
  clearPokemonState();
};
</script>

<style lang="sass" scoped>
.game-over-modal
  &__card
    border-radius: 20px
    padding: 5px 15px
  &__title, &__text
    color: white
#pokemon-page
  min-height: 100vh
  height: 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  height: 100%
  .return-to-menu
    position: fixed
    top: 15px
    left: 25px
    .highest-score
      font-size: 20px
  .player-status
    position: fixed
    top: 15px
    right: 25px
    .player-lifes
      display: flex
      align-items: center
      justify-content: flex-end
      img
        height: 45px
        width: 45px
    .player-score
      margin-top: 5px
      padding-right: 10px
      display: flex
      justify-content: flex-end
      p
        font-size: 20px
        margin-bottom: 0px
  .pokemon-quiz-container
    .answer-box
      margin-top: 20px
      button
        margin-top: 10px
      .continue-btn
        margin-left: 25px
</style>
