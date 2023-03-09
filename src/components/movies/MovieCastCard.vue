<template>
  <v-card class="cast-card mx-auto" max-width="344">
    <v-img :src="image" height="200px" cover />
    <v-card-title class="cast-card__character"> {{ character }} </v-card-title>
    <v-card-subtitle class="cast-card__actor"> {{ actor }} </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    image: { type: String, default: "" },
    character: { type: String, default: "" },
    actor: { type: String, default: "" },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped>
.cast-card
  background: black
  width: 140px
  color: white
  &__character
    font-size: 14px
  &__actor
    font-size: 12px
    padding: 0.5rem 1rem
</style>
