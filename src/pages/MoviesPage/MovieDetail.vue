<template>
  <Navbar />
  <div id="movie-detail">
    <div class="movie-information">
      <div class="movie-poster">
        <img
          :src="`https://image.tmdb.org/t/p/w500${activeMovie.poster_path}`"
          :alt="activeMovie.title"
        />
        <!-- {{ activeMovie }} -->
        <div class="movie-poster__streaming" />
      </div>

      <div class="movie-description">
        <h2>{{ activeMovie.title }}</h2>
        <p><strong>E</strong> Action, Adventure, Mistery</p>
        <span>Vote avarage: {{ activeMovie.vote_average }}</span>

        <div class="movie-description__overview">
          <span>Vista general</span>
          <p>{{ activeMovie.overview }}</p>
        </div>

        <div class="movie-description__authors">
          <div class="movie-description__authors--item">
            <p>Craig Mazin</p>
            <span>Creador</span>
          </div>

          <div class="movie-description__authors--item">
            <p>Neil Drugman</p>
            <span>Creador</span>
          </div>
        </div>
      </div>
    </div>

    <div class="movie-cast">
      <h2>Casting</h2>
      <div class="movie-cast__list">
        <MovieCastCard
          v-for="i in 5"
          :key="i"
          :image="`https://image.tmdb.org/t/p/w500${activeMovie.poster_path}`"
        />
      </div>
    </div>
  </div>
  {{ activeMovie }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../../components/Navbar.vue";
import { useMovies } from "../../composables/useMovies";
import MovieCastCard from "../../components/movies/MovieCastCard.vue";

export default defineComponent({
  components: { Navbar, MovieCastCard },
  props: {
    movie: { type: Object, default: () => {} },
  },
  setup() {
    const { activeMovie } = useMovies();
    return {
      activeMovie,
    };
  },
});
</script>

<style lang="sass" scoped>
#movie-detail
  margin-top: 80px
  height: calc(100% - 80px)
  padding: 1.5em 4em
  .movie-information
    display: flex
    margin-bottom: 2em
    .movie-poster
      width: 30%
      display: flex
      flex-direction: column
      text-align: left
      .movie-poster__streaming
        height: 30px
        background: white
    .movie-description
      padding: 3.5em 1.2em
      text-align: left
      &__authors
        display: flex
        justify-content: space-between
        padding: 0em 1.5em
        &--item
          p
            margin-bottom: 0px
  .movie-cast
    display: flex
    flex-direction: column
    overflow: hidden
    mmin-width: 80%
    border: 1px solid white
    h2
      margin-bottom: 20px
    &__list
      display: flex
</style>
