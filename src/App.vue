<template>
  <div id="app">
    <div id="nav">
      <nav-bar />
    </div>
    <div class="main">
      <router-view />
    </div>
    <div class="footer"><foot /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./components/NavBar.vue";
import Foot from "./components/Footer.vue";

export default Vue.extend({
  components: {
    NavBar,
    Foot,
  },
});
</script>

<style>
* {
  /* Makes sure there is no blank spaces between the nav and the homepage */
  margin: 0 !important;
}
#app {
  font-family: "Raleway", sans-serif;
  position: relative;
  top: 6vh;
  background: rgba(0, 0, 0, 0.92);
  color: white;
}
</style>
