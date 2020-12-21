<template>
  <div class="category-page">
    <h1>Categories</h1>
    <div class="categories">
      <genres v-for="genre in genreList" :genre="genre" :key="genre.id" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Genres from "../components/Genres.vue";
import genreList from "../genres/genreList.json";

export default Vue.extend({
  name: "Categories",
  components: {
    Genres,
  },

  data() {
    return {
      genreList: genreList.genres,
    };
  },
});
</script>

<style scoped>
.category-page {
  height: 87vh;
  /* hides scrollbar */
  overflow: hidden;
}

.categories {
  position: relative;
  top: 30vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40vh, 1fr));
}

h1 {
  text-align: center;
  position: relative;
  top: 5vh;
}

@media screen and (max-height: 400px) {
  .category-page {
    padding: 1vh;
    overflow: auto;
  }
  .categories {
    display: table;
  }
}

@media screen and (max-width: 1100px) {
  .category-page {
    padding: 1vh;
    overflow: auto;
  }

  .categories {
    display: table;
  }
}
</style>
