<template>
  <Navbar />
  <div id="profile">
    <section class="profile-container">
      <div class="profile-container__user-photo">
        <img src="../../assets/user_temp.jfif" alt="" />
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
            <h4>{{ movie.title }}</h4>
            <div class="favorite-movies__item__actions py-2">
              <button class="btn btn-warning add-favorites">Remove</button>
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
    const { favoritesList } = useMovies();
    return {
      favoritesList,
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
#profile .favorite-movies {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0em 0.75em;
  max-width: 55em;
  overflow: hidden;
  overflow-x: auto;
}

.favorite-movies__container {
  display: flex;
  justify-content: flex-start;
}
.favorite-movies__container h2 {
  margin-bottom: 100px;
}
#profile .favorite-movies .favorite-movies__item {
  display: flex;
  flex-direction: column;
  margin-right: 1.75em;
}
.favorite-movies__item h4 {
  text-align: left;
}
.favorite-movies__item__actions {
  display: flex;
  flex-direction: row-reverse;
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
</style>
