<template>
  <Navbar />
  <div id="profile">
    <section class="profile-container">
      <div class="profile-container__user-photo">
        <img src="../../assets/user_temp.jfif" alt="user" />
      </div>
      <div class="profile-container__user-info">
        <h3>Edson Rodriguez</h3>
        <p><strong>Email:</strong> erodstardev@gmail.com</p>
        <p><strong>Password:</strong> *************</p>
        <p><strong>Cellphone:</strong> 3121135597</p>
        <button class="btn btn-warning edit-profile-btn">Edit my info</button>
      </div>
    </section>

    <div class="movies-container">
      <h2 class="movies-container__title">Watch later</h2>

      <h2 class="movies-container__title">Favorite movies</h2>
      <div class="favorite-movies">
        <div v-if="favoritesList.length == 0">
          Ups! Seems that you don't have any movie added yet
        </div>
        <div v-else class="favorite-movies__container">
          <div
            class="favorite-movies__item"
            v-for="movie in favoritesList"
            :key="movie"
          >
            <img
              :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
              alt="moive poster"
            />
            <h5 class="movie-favorite-title">{{ movie.title }}</h5>
            <div class="favorite-movies__item__actions py-2">
              <button class="btn btn-warning add-favorites">Remove</button>
              <v-btn
                color="orange"
                variant="tonal"
                @click="navigateToMovie(movie)"
              >
                See more
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "../../components/Navbar.vue";
import MovieSection from "../../components/movies/MovieSection.vue";
import { useMovies } from "../../composables/useMovies";

export default defineComponent({
  components: { MovieSection, Navbar },
  props: {
    user: { type: Object, default: () => {} },
  },
  setup() {
    const { favoritesList, navigateToMovie } = useMovies();
    return {
      favoritesList,
      navigateToMovie,
    };
  },
});
</script>

<style scoped>
#profile {
  min-height: calc(100vh - 80px);
  display: flex;
  margin-top: 5em;
}
</style>

<style lang="sass" scoped>
.profile-container
  width: 35%
  padding: 1.5em 4em
  display: flex
  align-items: center
  flex-direction: column
  &__user-photo
    img
      height: 320px
      width: 245px
      border-radius: 50%
  &__user-info
    margin-top: 30px
    display: flex
    flex-direction: column
    align-items: flex-start
    h3
      font-size: 26px !important
    .edit-profile-btn
      width: 100%
.favorite-movies
  .favorite-movies__item
    width: 250px
    overflow: hidden
    white-space: nowrap
    .movie-favorite-title
      text-overflow: ellipsis
    &__actions
      display: flex
      justify-content: space-between
    img
      width: 100%
      height: 350px
      margin-bottom: 0.35em
.movies-container
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  padding: 0em 0.75em
  width: 100%
  .movies-container__title
    margin-bottom: 1em
  .favorite-movies
    &__container
      display: flex
      flex-wrap: wrap
      justify-content: center
    &__item
      margin-right: 35px
      margin-bottom: 25px
</style>
