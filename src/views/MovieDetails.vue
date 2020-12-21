<template>
  <div class="movie-details">
    <div class="movie-poster">
      <img
        :src="`${movieBackground}${movie.backdrop_path}`"
        :alt="movie.movieTitle"
      />
    </div>
    <!-- Because some of the movies given don't have a title but they do have a movie name -->
    <h1 class="movie-title">
      {{ movie.title ? movie.title : movie.name }}
    </h1>
    <div class="movie-description">
      <p>{{ movie.overview }}</p>
    </div>
    <div class="movie-trailer">
      <iframe
        class="movie-trailer"
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
import { mapGetters } from "vuex";
import { YOUTUBE_URL, MOVIE_BACKGROUND_URL } from "@/api";

export default Vue.extend({
  data() {
    return {
      // Url's given from api.ts
      youtubeUrl: YOUTUBE_URL,
      movieBackground: MOVIE_BACKGROUND_URL,
      movie: this.$route.query.movie,
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
    // Get trailer
    ...mapGetters("movies/", ["movieTrailer"]),
  },
});
</script>

<style scoped>
.movie-details {
  height: 87vh;
  display: grid;
  padding: 2vh;
  grid-template-columns: repeat(2, 1fr) 0.1fr repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-row-gap: 10px;
  overflow: hidden;
  position: relative;
  bottom: 7vh;
}
.movie-title {
  grid-area: 1 / 2 / 2 / 5;
  padding-top: 7vh;
  text-align: center;
}
.movie-poster {
  grid-area: 3 / 1 / 6 / 3;
  height: 45vh;
}
.movie-poster > img {
  border-radius: 3vh;
  height: auto;
  width: 100%;
}
.movie-trailer {
  /* when it collapse show the trailer over the p element */
  grid-area: 3 / 4 / 5 / 6;
  height: 30vh;
}
.movie-trailer > iframe {
  border-radius: 3vh;
  width: 100%;
}
.movie-description {
  grid-area: 5 / 4 / 7 / 6;
}
.movie-description p {
  position: relative;
  top: 10vh;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 800px) {
  .movie-details {
    height: 150vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr repeat(3, 1fr);
  }
  .movie-title {
    grid-area: 1 / 1 / 2 / 2;
  }
  .movie-poster {
    grid-area: 2 / 1 / 3 / 2;
  }
  .movie-trailer {
    grid-area: 3 / 1 / 4 / 2;
    width: 100%;
  }
  .movie-description {
    grid-area: 4 / 1 / 5 / 2;
  }
}
</style>
