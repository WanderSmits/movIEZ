<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
  >
    <div :key="movieObject.id" class="random">
      <h1 class="movie-title">
        {{ movieObject.title }}
      </h1>
      <div class="movie-image">
        <!-- Whenever there is an image, show image. If not show an empty div -->
        <img
          v-if="movieObject.poster_path"
          :src="`${movieUrl}${movieObject.poster_path}`"
          :alt="movieObject.title"
        />
        <div v-else></div>
      </div>
      <p class="movie-description">{{ movieObject.overview }}</p>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { MOVIE_POSTER_URL, MOVIE_BACKGROUND_SMALL } from "@/api";

export default Vue.extend({
  name: "RandomMovies",
  props: ["movieObject"],

  data() {
    return {
      // Url taken from the config file
      movieUrl: MOVIE_POSTER_URL,
      backgroundUrl: MOVIE_BACKGROUND_SMALL,
    };
  },
});
</script>

<style scoped>
.random {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.2fr repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  overflow: hidden;
}
.movie-title {
  position: relative;
  top: 7vh;
  text-align: center;
  grid-area: 1 / 2 / 2 / 5;
}
.movie-title h1 {
  width: 100%;
  height: auto;
}
.movie-image {
  grid-area: 2 / 1 / 6 / 3;
  position: relative;
  top: 10vh;
}
.movie-image > img {
  width: 80%;
  height: auto;
  border-radius: 2vh;
}
.movie-description {
  grid-area: 5 / 4 / 6 / 6;
}
.movie-description > p {
  width: 80%;
  height: auto;
}

@media screen and (max-width: 600px) {
  .random {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr repeat(2, 1fr);
    grid-row-gap: 12vh;
  }

  .movie-title {
    grid-area: 1 / 1 / 2 / 2;
  }
  .movie-image {
    grid-area: 2 / 1 / 3 / 2;
  }

  .movie-image > img {
    width: 100%;
    height: auto;
  }
  .movie-description {
    grid-area: 3 / 1 / 4 / 2;
  }
}
</style>
