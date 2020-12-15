<template>
  <div class="parent">
    <div class="movie-poster">
      <img :src="`${movieBackground}${background}`" alt="movieTitle" />
    </div>
    <div class="movie-title">
      <!-- Because some of the movies given don't have a title but they do have a movie name -->
      <h1>
        {{ movieTitle ? movieTitle : movieName }}
      </h1>
    </div>
    <div class="movie-description">
      <p>{{ description }}</p>
    </div>
    <div class="movie-trailer">
      <iframe
        width="100%"
        height="100%"
        :src="`${youtubeUrl}${movieTrailer}?autoplay=1`"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { YOUTUBE_URL, MOVIE_BACKGROUND_URL } from "@/config";

export default Vue.extend({
  data() {
    return {
      // Url's given from @/config
      youtubeUrl: YOUTUBE_URL,
      movieBackground: MOVIE_BACKGROUND_URL,
      movieTitle: this.$route.query.title,
      movieName: this.$route.query.name,
      background: this.$route.query.background,
      description: this.$route.query.description,
      movieId: this.$route.params.id,
      movieUrl: "",
    };
  },
  // Fetch trailer on load
  mounted() {
    this.$store.dispatch("movies/fetchTrailer", this.movieId);
  },

  computed: {
    // Get trailer state
    ...mapState("movies/", ["movieTrailer"]),
  },
});
</script>

<style scoped>
.parent {
  height: 87vh;
  display: grid;
  grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr repeat(3, 1fr) 0.5fr;
  grid-template-rows: 0.5fr repeat(10, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 10px;
}

.movie-title {
  grid-area: 2 / 4 / 3 / 7;
  text-align: center;
}
.movie-poster {
  grid-area: 4 / 2 / 9 / 5;
  height: 45vh;
}

.movie-poster > img {
  border-radius: 3vh;
  width: 100%;
  height: auto;
}

.movie-trailer {
  grid-area: 4 / 6 / 8 / 9;
}

.movie-trailer > iframe {
  border-radius: 3vh;
}
.movie-description {
  grid-area: 7 / 6 / 9 / 9;
  position: relative;
  top: 15vh;
  height: 10vh;
}

.movie-description p {
  width: 100%;
  height: auto;
}
</style>
