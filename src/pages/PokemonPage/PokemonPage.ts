import { defineComponent } from "vue";

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
    // const pokemonStore = usePokemonStore();
    // const { pokemonArr, pokemon, showPokemon, showAnswer, message } =
    //   storeToRefs(pokemonStore);

    // const mixPokemonArray = async () => {
    //   pokemonStore.loadPokemons(await getPokemonOptions());

    //   const randomInt = Math.floor(Math.random() * 4);
    //   pokemonStore.setHiddenPokemon(pokemonArr.value[randomInt]);
    // };

    // const checkAnswer = (selectedId: number) => {
    //   if (!pokemon.value) return;

    //   if (selectedId === pokemon.value.id) {
    //     pokemonStore.showPokemonAndAnswer(`Corrrect, ${pokemon.value.name}`);
    //   } else {
    //     pokemonStore.showPokemonAndAnswer(
    //       `Oops, that was ${pokemon.value.name}`
    //     );
    //   }
    // };

    // const newGame = () => {
    //   pokemonStore.clearState();
    //   mixPokemonArray();
    // };

    const {
      pokemonArr,
      pokemon,
      showPokemon,
      showAnswer,
      message,
      checkAnswer,
      mixPokemonArray,
      newGame,
    } = usePokemons();

    mixPokemonArray();

    return {
      //! Properties
      pokemonArr,
      pokemon,
      showPokemon,
      showAnswer,
      message,

      //! Methods
      mixPokemonArray,
      checkAnswer,
      newGame,
    };
  },
});
