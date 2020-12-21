<template>
  <div id="app">
    <div id="nav">
      <nav-bar />
    </div>
    <div class="main">
      <!-- Transitions between the pages -->
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
      >
        <router-view />
      </transition>
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
#app {
  position: relative;
  top: 6vh;
  background: rgba(0, 0, 0, 0.92);
}
</style>
