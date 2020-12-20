<template>
  <div class="category-page">
    <h1>Categories</h1>
    <!-- Dummy text -->
    <div class="category-action">
      <router-link :to="{ name: 'CategoryList' }">
        <img
          @click="actionMovie"
          src="@/assets/images/action.png"
          alt="action"
        />
      </router-link>
    </div>

    <div class="category-comedy">
      <router-link :to="{ name: 'CategoryList' }">
        <img
          @click="comedyMovie"
          src="@/assets/images/comedy.png"
          alt="comedy"
        />
      </router-link>
    </div>
    <div class="category-horror">
      <router-link :to="{ name: 'CategoryList' }">
        <img
          @click="horrorMovie"
          src="@/assets/images/horror.png"
          alt="horror"
        />
      </router-link>
    </div>
    <div class="category-sci-fi">
      <router-link :to="{ name: 'CategoryList' }">
        <img
          @click="scifiMovie"
          src="@/assets/images/sci-fi.png"
          alt="sci-fi"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Categories",

  methods: {
    actionMovie() {
      this.$store.dispatch(`movies/fetchActionMovies`);
    },
    comedyMovie() {
      this.$store.dispatch(`movies/fetchComedyMovies`);
    },
    horrorMovie() {
      this.$store.dispatch(`movies/fetchHorrorMovies`);
    },
    scifiMovie() {
      this.$store.dispatch(`movies/fetchScifiMovies`);
    },
  },
});
</script>

<style scoped>
.category-page {
  text-align: center;
  height: 87vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 0.4fr 0.6fr 1fr 0.5fr 0.3fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /* hides scrollbar */
  overflow-x: hidden;
}

img {
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1vh;
}

img:hover {
  cursor: pointer;
  transform: scale(1.02);
}

h1 {
  position: relative;
  grid-area: 2 / 2 / 3 / 4;
}

.category-action {
  grid-area: 3 / 1 / 4 / 2;
}

.category-comedy {
  grid-area: 3 / 2 / 4 / 3;
}

.category-horror {
  grid-area: 3 / 3 / 4 / 4;
}

.category-sci-fi {
  grid-area: 3 / 4 / 4 / 5;
}

@media screen and (max-width: 700px) {
  .category-page {
    display: table;
    overflow-x: hidden;
  }
}
</style>
