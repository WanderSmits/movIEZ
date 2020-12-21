<template>
  <div>
    <div class="category-action">
      <router-link
        :to="{ name: 'CategoryList', params: { id: this.genre.id } }"
      >
        <img
          @click="fetchCategory"
          :src="require(`@/assets/images/${genre.img}`)"
          :alt="genre.name"
        />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Genres",
  props: ["genre"],

  methods: {
    fetchCategory() {
      this.$store.dispatch(`movies/fetchMovieCategory`, this.genre.id);
    },
  },
});
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  padding: 1vh;
}

img:hover {
  transform: scale(1.01);
}
</style>
