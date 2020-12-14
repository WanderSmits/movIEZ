<template>
  <div class="random-page">
    <div class="movie-title">
      <h1>What to watch tonight?!</h1>
    </div>
    <div class="explanation">
      <p>
        We have all been there... You come home from a long day at work and you
        want to watch a movie, but you are not sure which one. Instead of
        scrolling on netflix for hours, just take the plunge and watch the movie
        that is being randomized for you!
      </p>
    </div>
    <div class="random-button">
      <button @click="handleClick">Randomizer</button>
    </div>
    <div class="random-movie">
      <random-movies :movieObject="movieObject" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import RandomMovies from "@/components/RandomMovies.vue";

export default Vue.extend({
  name: "Random",
  components: { RandomMovies },

  data() {
    return {
      // Setting the movieObject to an empty object, so nothing is being shown on load
      movieObject: {},
    };
  },

  methods: {
    handleClick() {
      // Fetches random Movie
      this.$store.dispatch(`movies/fetchRandomMovie`);
      // Populate data into the movieObject
      this.movieObject = this.$store.state.movies.randomMovie;
    },
  },
});
</script>

<style scoped>
.random-page {
  height: 82vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.2fr repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.movie-title {
  grid-area: 2 / 1 / 6 / 3;
  text-align: center;
}

.explanation {
  grid-area: 3 / 1 / 3 / 3;
  position: relative;
  bottom: 5vh;
  text-align: center;
}

.random-button {
  text-align: center;
  grid-area: 4 / 1 / 4 / 3;
}

.random-button > button {
  border-radius: 1rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 20vh;
  height: 8vh;
  outline: none;
}

.random-button > button:hover {
  cursor: pointer;
  transform: scale(1.03);
}

.random-movie {
  grid-area: 1 / 4 / 6 / 6;
}
</style>
