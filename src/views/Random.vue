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

    <!-- The RandomMovies component-->
    <div class="random-movie">
      <random-movies :movieObject="movieObject" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RandomMovies from "@/components/RandomMovies.vue";

export default Vue.extend({
  name: "Random",
  components: { RandomMovies },

  data() {
    return {
      // Empty object so page is empty on load
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
  mounted() {
    // Dispatch on load, so you do not have to click twice first load
    this.handleClick();
  },
});
</script>

<style scoped>
.random-page {
  height: 87vh;
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
  width: 60vh;
  position: relative;
  left: 14vh;
  bottom: 5vh;
  text-align: center;
}

.explanation p {
  width: 100%;
  height: auto;
}

.random-button {
  text-align: center;
  grid-area: 4 / 1 / 4 / 3;
  position: relative;
  left: 34vh;
  width: 20vh;
  height: 8vh;
}

.random-button > button {
  /* have a seethrough button with red borders  */
  border-color: rgb(184, 15, 15);
  background: rgb(20, 20, 20);
  border-radius: 0.5vh;
  color: white;
  padding: 3vh 6vh;
  outline: none;
  width: 100%;
  height: auto;
}

.random-button > button:hover {
  /* slowly transition the red color on hover */
  transition-duration: 0.7s;
  background: rgb(184, 15, 15);
  color: white;
  transform: scale(1.05);
  cursor: pointer;
}

.random-movie {
  grid-area: 1 / 4 / 6 / 6;
}
</style>
