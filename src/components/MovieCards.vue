<template>
  <div class="movie-card">
    <router-link
      :to="{
        name: 'MovieDetails',
        params: { id: movie.id },
        query: {
          movie: movie,
        },
      }"
    >
      <div class="movie-image">
        <img :src="`${background}${movie.poster_path}`" :alt="movie.title" />
      </div>
      <div class="movie-details">
        <!-- Some of the movie titles in the API are under movie.name -->
        <p>{{ movie.title ? movie.title : movie.name }}</p>
        <div class="movie-rating">
          <p>
            <!-- If movie has a rating show it, else show nothing-->
            {{ movie.vote_average !== 0 ? `${movie.vote_average}/10` : "" }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MOVIE_BACKGROUND_SMALL } from "@/api";

export default Vue.extend({
  name: "MovieCards",
  props: ["movie"],

  data() {
    return {
      // card image Url
      background: MOVIE_BACKGROUND_SMALL,
    };
  },
});
</script>

<style scoped>
.movie-card {
  padding: 0.5rem;
  background-color: #0f03013b;
  border-radius: 5vh;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
}

.movie-card:hover {
  /* On hover scale out the card so it is visually clear which button you're hovering over */
  transform: scale(1.01);
}

.movie-image {
  width: 100%;
  height: auto;
  /* cut the image just slightly off on the right  */
  clip-path: polygon(0 0, 100% 0, 100% 97%, 0 100%);
}
.movie-image > img {
  width: 100%;
  height: auto;
  border-radius: 20px 20px 0 0;
}
.movie-details {
  width: 100%;
  padding: 30px 10px;
}

a {
  /* So there is line under text */
  text-decoration: none;
}

.movie-details > p {
  line-height: 30px;
}

.movie-rating {
  float: right;
}
</style>
