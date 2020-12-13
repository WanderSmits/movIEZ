<template>
  <div class="random">
    <div class="movie-title">
      <h1>{{ movieObject.title }}</h1>
    </div>
    <div class="movie-image">
      <!-- Whenever there is not image object show an empty div -->
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
</template>

<script lang="ts">
import Vue from "vue";
import { MOVIE_POSTER_URL } from "@/config";

export default Vue.extend({
  name: "RandomMovies",
  props: ["movieObject"],

  data() {
    return {
      // Url taken from the config file
      movieUrl: MOVIE_POSTER_URL,
    };
  },
});
</script>

<style scoped>
.random {
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
  height: 37vh;
  width: 37vh;
  top: 10vh;
}

.movie-image > img {
  width: 100%;
  height: auto;
  border-radius: 2vh;
}

.movie-description {
  grid-area: 6 / 4 / 6 / 6;
}

.movie-description p {
  width: 100%;
  height: auto;
}
</style>
