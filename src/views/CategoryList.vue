<template>
  <div class="category">
    <div class="category-sort">
      <div class="sort-text">
        <p>
          Sort by:
        </p>
      </div>
      <div class="sort-options">
        <select v-model="sortBy" @change="onChangeSort()">
          <option>Title</option>
          <option>Rating</option>
        </select>
      </div>
    </div>
    <div class="movie-cards">
      <movie-cards v-for="movie in movieList" :movie="movie" :key="movie.id" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import MovieCards from "@/components/MovieCards.vue";
import { MovieResult } from "@/models/Movies";

export default Vue.extend({
  components: {
    MovieCards,
  },

  data() {
    return {
      sortBy: "",
    };
  },

  methods: {
    something() {
      const hans = this.$store.getters;

      console.log(hans);
    },

    onChangeSort() {
      // If the select buttons says Title, sort by title, else sort by ratings
      if (this.sortBy === "Title") {
        this.$store.state.movies.movieList.sort(
          (firstMovie: MovieResult, secondMovie: MovieResult) =>
            // TS gave an error about Because of the possibly of an undefined value, Workaround by checking if both titles are not undefined
            firstMovie.title && secondMovie.title
              ? // Sort Alphabetically
                firstMovie.title.localeCompare(secondMovie.title)
              : ""
        );
      } else {
        this.$store.state.movies.movieList.sort(
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

  computed: {
    // Get the getter of the page on load
    ...mapGetters("movies/", ["movieList"]),
  },
});
</script>

<style scoped>
.category-sort {
  display: grid;
  grid-template-columns: 3fr repeat(2, 0.2fr) 1fr;
  grid-template-rows: 1fr;
  padding: 2vh;
}

.sort-text {
  grid-area: 1 / 2 / 2 / 3;
}

.sort-options {
  grid-area: 1 / 3 / 2 / 4;
}
</style>
