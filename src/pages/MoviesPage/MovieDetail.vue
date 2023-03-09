<template>
  <Navbar />
  <div id="movie-detail">
    <div v-if="!movie && !cast" class="loader-wrapper">
      <v-progress-circular indeterminate color="amber" :size="100" />
    </div>
    <div v-else class="movie-information">
      <div class="movie-poster">
        <img
          :src="`https://image.tmdb.org/t/p/w400${movie.poster_path}`"
          :alt="movie.title"
        />
      </div>

      <div class="movie-description">
        <h2 class="movie-description__title">{{ movie.title }}</h2>
        <div class="movie-description__genres">
          <span class="badge text-bg-warning">Genres</span>
          <p
            class="badge text-bg-light"
            v-for="genre in movie.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </p>
        </div>

        <div class="movie-description__vote-avarage">
          <div class="movie-description__vote-avarage__rating--percentage">
            {{ (Math.round(movie.vote_average * 100) / 100).toFixed(1) }}
          </div>
          <p class="movie-description__vote-avarage__rating--label">
            Vote avarage
          </p>
        </div>

        <div class="movie-description__overview">
          <quote class="movie-description__overview--tagline">
            "{{ movie.tagline }}"
          </quote>
          <p class="movie-description__overview--content">
            {{ movie.overview }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="cast" class="movie-cast">
      <h2>Casting</h2>
      <div class="movie-cast__list">
        <MovieCastCard
          v-for="actor in cast"
          :key="actor.id"
          :image="`https://image.tmdb.org/t/p/w500${actor.profile_path}`"
          :character="actor.character"
          :actor="actor.name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Navbar from "../../components/Navbar.vue";
import MovieCastCard from "../../components/movies/MovieCastCard.vue";
import getPopularMovies, { getMovie } from "../../helpers/getMoviesOptions";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { Navbar, MovieCastCard },
  props: {
    movie: { type: Object, default: () => {} },
  },
  setup() {
    const relatedMovies = ref();
    const movie = ref();
    const cast = ref();

    const route = useRoute().params;

    const setMovies = async () => {
      relatedMovies.value = await getPopularMovies();
      const { movieInfo, movieCast } = await getMovie(route.id);
      movieCast.length = 7;
      movie.value = movieInfo;
      cast.value = movieCast;
    };

    onMounted(() => {
      setMovies();
    });

    return {
      // ? Computed
      // voteAvarage: computed(() => {
      //   movie.vote_average
      //   return '10'
      // }),
      movie,
      cast,
    };
  },
});
</script>

<style lang="sass" scoped>
#movie-detail
  margin-top: 80px
  height: calc(100% - 80px)
  padding: 1.5em 4em
  .loader-wrapper
    display: flex
    justify-content: center
    align-items: center
    height: calc(100vh - 80px)
  .movie-information
    display: flex
    margin-bottom: 2em
    .movie-poster
      width: 30%
      display: flex
      flex-direction: column
      text-align: left
      img
        border-radius: 10px
        width: 350px
      .movie-poster__streaming
        height: 30px
        background: white
    .movie-description
      padding: 3.5em 1.2em
      padding-left: 2.5em
      text-align: left
      &__title
        font-weight: bold
        font-size:  48px
      &__genres
        display: flex
        align-items: center
        padding: 15px 0px
        .text-bg-warning
          margin-right: 10px
        .text-bg-light
          margin-right: 10px
      &__vote-avarage
        display: flex
        align-items: center
        font-weight: bold
        &__rating--percentage
          display: flex
          justify-content: center
          align-items: center
          width: 50px
          height: 50px
          border-radius: 100%
          background: black
          border: 5px solid #ffc107
        &__rating--label
          margin-left: 10px
          font-size: 20px
      &__overview
        padding: 1em 0em
        &--tagline
          margin-bottom: 0
          font-size: 1.1em
          font-weight: 400
          opacity: 0.7
          font-style: italic
        &--content
          padding-top: 10px
  .movie-cast
    display: flex
    flex-direction: column
    overflow: hidden
    mmin-width: 80%
    margin-bottom: 25px
    h2
      margin-bottom: 25px
    &__list
      display: flex
</style>
