<template>
  <Navbar />
  <div id="movie-detail">
    <h2>{{ "Hi" }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../../components/Navbar.vue";

export default defineComponent({
  components: { Navbar },
  props: {
    movie: { type: Object, default: () => {} },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped></style>
