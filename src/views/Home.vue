<template>
  <div class="home">
    <div class="select-div">
      <div class="select-sort">
        Sort by:
        <select v-model="sortBy" @change="onChangeSort()">
          <option>Title</option>
          <option>Rating</option>
        </select>
      </div>
      <div class="select-genre">
        Show:
        <select v-model="selected" @change="onChangeCategory()">
          <option>Favorites</option>
          <option>Top Rated</option>
          <option>Trending</option>
        </select>
      </div>
    </div>

    <!-- Transition on loading the Cards -->
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
    >
      <!-- The MovieCards Component -->

      <div class="movie-cards" :key="movieList.id">
        <movie-cards
          v-for="movie in movieList"
          :movie="movie"
          :key="movie.id"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MovieCards from "@/components/MovieCards.vue";
import { mapGetters } from "vuex";
import { MovieResult } from "@/models/Movies";

export default Vue.extend({
  name: "Home",
  components: {
    MovieCards,
  },

  data() {
    return {
      // Set Default select button as Favorites
      selected: "Favorites",
      // Set Default sort-by empty
      sortBy: "",
    };
  },

  props: {
    movie: {
      // Setting its type to a function that returns an instance of the MovieResult interface
      type: Array as () => MovieResult[],
    },
  },

  methods: {
    onChangeCategory() {
      // Removes white space from selected
      const select: string = this.selected.replace(/ /g, "");

      // Fetches the movie based on the select button
      this.$store.dispatch(`movies/fetch${select}`);
    },

    onChangeSort() {
      // If the select buttons says Title, sort by title, else sort by ratings
      if (this.sortBy === "Title") {
        this.$store.getters["movies/movieList"].sort(
          (firstMovie: MovieResult, secondMovie: MovieResult) =>
            // TS gave an error about Because of the possibly of an undefined value, Workaround by checking if both titles are not undefined
            firstMovie.title && secondMovie.title
              ? // Sort Alphabetically
                firstMovie.title.localeCompare(secondMovie.title)
              : ""
        );
      } else {
        this.$store.getters["movies/movieList"].sort(
          (firstMovie: MovieResult, secondMovie: MovieResult) =>
            // TS gave an error about Because of the possibly of an undefined value, Workaround by checking if both titles are not undefined
            firstMovie.vote_average && secondMovie.vote_average
              ? // Check if the vote_average is bigger than the vote_average before that and put it in a sorted array
                secondMovie.vote_average - firstMovie.vote_average
              : ""
        );
      }
    },
  },

  mounted() {
    // On load of the page, Dispatch action fetchFavorites.
    this.$store.dispatch("movies/fetchFavorites");
  },

  computed: {
    // Get the state of the page on load
    ...mapGetters("movies/", ["movieList"]),
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}

.movie-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35vh, 1fr));
  align-items: stretch;
  padding-right: 1vh;
  padding-left: 1vh;
  padding-bottom: 3vh;
}

.select-div {
  padding: 3vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 2fr repeat(3, 1fr);
  grid-template-rows: 4fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.select-genre {
  text-align: center;
  grid-area: 1 / 5 / 2 / 6;
}

.select-sort {
  text-align: center;
  grid-area: 1 / 6 / 2 / 7;
}

select {
  border-radius: 1 2px 4px 4px;
  color: white;
  width: 12vh;
  background: rgba(0, 0, 0, 0.2);
  /* gets rid of the orange outline the button by default has */
  outline: none;
}

option {
  background: rgb(10, 0, 0);
  color: #f8f8f8;
}

select:hover {
  cursor: pointer;
}
</style>
