<template>
  <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
  >
    <div :key="movieObject" class="random">
      <div class="movie-title">
        <h1>
          {{ movieObject.title }}
        </h1>
      </div>

      <div class="movie-image">
        <!-- Whenever there is an image, show image. If not show an empty div -->
        <img
          v-if="movieObject.poster_path"
          :src="`${movieUrl}${movieObject.poster_path}`"
        />
        <div v-else></div>
      </div>
      <div class="movie-description">
        <p>{{ movieObject.overview }}</p>
      </div>
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
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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
  height: 33vh;
  width: 33vh;
  top: 10vh;
}

.movie-image > img {
  width: 100%;
  height: auto;
  border-radius: 2vh;
}

.movie-description {
  grid-area: 5 / 4 / 6 / 6;
  width: 90%;
}

.movie-description p {
  width: 100%;
  height: auto;
}
</style>
