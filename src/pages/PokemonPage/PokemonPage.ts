import { defineComponent, watch } from "vue";

import { usePokemons } from "../composables/usePokemons";
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";

export default defineComponent({
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  setup: () => {
    const {
      pokemonArr,
      pokemon,
      showPokemon,
      showAnswer,
      message,
      checkAnswer,
      mixPokemonArray,
      newGame,
      playerLifes,
      score,
      clearPokemonState,
      highScore,
    } = usePokemons();

    mixPokemonArray();

    return {
      //! Properties
      pokemonArr,
      pokemon,
      showPokemon,
      showAnswer,
      message,
      playerLifes,
      score,
      highScore,

      //! Methods
      mixPokemonArray,
      checkAnswer,
      newGame,
      clearPokemonState,
    };
  },
});
