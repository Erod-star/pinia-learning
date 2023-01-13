import { computed } from "vue";
import { storeToRefs } from "pinia";

import { usePokemonStore } from "../store/pokemonStore";
import getPokemonOptions from "../helpers/getPokemonOptions";

export const usePokemons = () => {
  const pokemonStore = usePokemonStore();
  const { pokemonArr, pokemon, showPokemon, showAnswer, message } =
    storeToRefs(pokemonStore);

  const mixPokemonArray = async () => {
    pokemonStore.loadPokemons(await getPokemonOptions());

    const randomInt = Math.floor(Math.random() * 4);
    pokemonStore.setHiddenPokemon(pokemonArr.value[randomInt]);
  };

  const checkAnswer = (selectedId: number) => {
    if (!pokemon.value) return;

    if (selectedId === pokemon.value.id) {
      pokemonStore.showPokemonAndAnswer(`Corrrect, ${pokemon.value.name}`);
    } else {
      pokemonStore.showPokemonAndAnswer(`Oops, that was ${pokemon.value.name}`);
    }
  };

  const newGame = () => {
    pokemonStore.clearState();
    mixPokemonArray();
  };

  return {
    // ? Properties
    message,
    pokemon,
    pokemonArr,
    showAnswer,
    showPokemon,

    // ? Computed
    pokemonPicture: computed(
      () =>
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.value?.id}.svg`
    ),

    // ? Methods
    checkAnswer,
    mixPokemonArray,
    newGame,
  };
};
