<template>
  <footer class="footer">
    <section>
      <router-link :to="{ name: 'SiteMap' }">
        <h5 class="footer-sitemap">
          RSS
        </h5>
      </router-link>

      <!-- Blank line in footer -->
      <hr />

      <div class="footer-pages">
        <div class="footer-homepage">
          <router-link :to="{ name: 'Home' }">
            <h5>Home</h5>
          </router-link>
        </div>
        <div class="footer-category">
          <router-link :to="{ name: 'Categories' }">
            <h5>Categories</h5>
          </router-link>
        </div>
        <div class="footer-random">
          <router-link :to="{ name: 'Random' }">
            <h5>Random</h5>
          </router-link>
        </div>

        <p class="footer-copy">
          Copyright &copy; 2020
        </p>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.footer {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  padding: 2vh 0 2vh;
}

.footer-pages {
  display: grid;
  grid-template-columns: 12fr repeat(3, 1fr);
}

.footer-pages a {
  text-decoration: none;
}

.footer-sitemap:hover {
  cursor: pointer;
}

a.router-link-exact-active h5 {
  color: rgb(231, 22, 22);
}

.footer-homepage {
  grid-area: 1 / 2 / 2 / 3;
}

.footer-category {
  grid-area: 1 / 3 / 2 / 4;
}

.footer-random {
  grid-area: 1 / 4 / 2 / 5;
}

/* add blank line to divide footer with the bottom */
.site-footer hr {
  opacity: 0.5;
}

.footer-copy {
  color: rgb(211, 44, 44);
}
</style>
