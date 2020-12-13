<template>
  <div class="movie-card">
    <router-link
      :to="{
        name: 'MovieDetails',
        params: { id: movie.id },
        query: {
          title: movie.title,
          background: movie.backdrop_path,
          description: movie.overview,
          name: movie.name,
        },
      }"
    >
      <div class="movie-image">
        <img :src="`${background}${movie.poster_path}`" />
      </div>
      <div class="movie-details">
        <!-- Some of the movie titles in the API are under movie.name -->
        <p>{{ movie.title ? movie.title : movie.name }}</p>
        <div class="movie-rating">
          <p>{{ `${movie.vote_average}/10` }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { MOVIE_BACKGROUND_SMALL } from "@/config";

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
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #0f03013b;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
}

.movie-card:hover {
  /* On hover scale out the card so it is visually clear which button you're hovering over */
  transform: scale(1.02);
}

.movie-image {
  width: 100%;
  height: auto;
  position: relative;
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
  position: relative;
  top: 1px;
  padding: 30px 10px;
}
.movie-details > h3 {
  color: #f8f8f8;
  font-weight: 600;
  font-size: 18px;
  margin: 0px 0 15px 0;
}

a {
  text-decoration: none;
}
.movie-details > p {
  color: #f8f8f8;
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
}

.movie-rating {
  color: #f8f8f8;
  position: relative;
  float: right;
}

/* */
@media screen and (max-width: 600px) {
  .movie-card {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
