import { defineStore } from "pinia";
import { Pokemon } from "../interfaces/pokemon";

interface PokemonState {
  pokemonArr: Pokemon[];
  pokemon: Pokemon | undefined;
  showPokemon: boolean;
  showAnswer: boolean;
  message: string;
  playerLifes: number;
  score: number;
  highScore: number;
}

export const usePokemonStore = defineStore("pokemon", {
  state: (): PokemonState => ({
    pokemonArr: [],
    pokemon: undefined,
    showPokemon: false,
    showAnswer: false,
    message: "",
    playerLifes: 3,
    score: 0,
    highScore: 0,
  }),
  actions: {
    loadPokemons(pokemons: Pokemon[]) {
      this.pokemonArr = pokemons;
    },
    setHiddenPokemon(pokemon: Pokemon) {
      this.pokemon = pokemon;
    },
    showPokemonAndAnswer(message: string) {
      this.showAnswer = true;
      this.showPokemon = true;
      this.message = message;
    },
    increaseScore() {
      this.score += 1;
    },
    descreasePlayerLifes() {
      this.playerLifes -= 1;
    },
    resetGame() {
      this.pokemonArr = [];
      this.pokemon = undefined;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      if (this.score > this.highScore) this.highScore = this.score;
    },
    clearState() {
      this.pokemonArr = [];
      this.pokemon = undefined;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = "";
      this.playerLifes = 3;
      this.score = 0;
    },
  },
});
