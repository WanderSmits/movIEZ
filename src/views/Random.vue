<template>
  <div class="something">
    <div class="random-page">
      <div class="random-explanation">
        <div class="movie-title">
          <h1>What to watch tonight?!</h1>
        </div>
        <div class="explanation">
          <p>
            We have all been there... You come home from a long day at work and
            you want to watch a movie, but you are not sure which one. Instead
            of scrolling on netflix for hours, just take the plunge and watch
            the movie that is being randomized for you!
          </p>
        </div>
        <div class="random-button">
          <button @click="handleClick">Randomizer</button>
        </div>
      </div>
      <!-- The RandomMovies component-->
      <div class="random-movie">
        <random-movies :movieObject="movieObject" />
      </div>
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
      this.movieObject = this.$store.getters["movies/randomMovie"];
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.random-movie {
  height: 87vh;

  grid-area: 1 / 2 / 2 / 3;
}

.random-explanation {
  grid-area: 1 / 1 / 2 / 2;
  height: 87vh;

  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-template-rows: 0.5fr 0.7fr repeat(2, 1fr) 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.movie-title {
  grid-area: 2 / 2 / 3 / 3;
  text-align: center;
}

.explanation {
  grid-area: 3 / 2 / 4 / 3;
  text-align: center;
}

.explanation p {
  width: 100%;
  height: auto;
  position: relative;
  top: 5vh;
}

.random-button {
  grid-area: 4 / 2 / 5 / 3;
  position: relative;
  width: 100%;
  top: 5vh;
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

@media screen and (max-height: 600px) {
  .random-page {
    display: table;
    overflow: hidden;
  }

  .random-button > button {
    position: relative;
    top: 5vh;
  }
  .random-movie {
    height: 100%;
    width: auto;
  }
}

@media screen and (max-width: 600px) {
  .random-page {
    display: table;
    overflow: hidden;
  }

  .random-button > button {
    position: relative;
    top: 5vh;
  }
  .random-movie {
    height: 100vh;
    width: auto;
  }
}
</style>
