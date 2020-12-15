<template>
  <footer class="site-footer">
    <!-- Blank line in footer -->
    <hr />

    <div class="footer-sitemap">
      <div
        class="footer-homepage"
        xlink:type="simple"
        xlink:href="http://localhost:8080/#/"
      >
        <router-link :to="{ name: 'Home' }">
          <h5>Home</h5>
        </router-link>
      </div>
      <div
        class="footer-category"
        xlink:type="simple"
        xlink:href="http://localhost:8080/#/categories"
      >
        <router-link :to="{ name: 'Categories' }">
          <h5>Categories</h5>
        </router-link>
      </div>
      <div
        class="footer-random"
        xlink:type="simple"
        xlink:href="http://localhost:8080/#/random"
      >
        <router-link :to="{ name: 'Random' }">
          <h5>Random</h5>
        </router-link>
      </div>

      <p class="footer-copy">
        Copyright &copy; 2020
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  padding: 5vh 0 2vh;
  font-size: 15px;
  color: white;
}

.footer-sitemap {
  display: grid;
  grid-template-columns: 12fr repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.footer-sitemap a {
  text-decoration: none;
  color: #fff;
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
  border-top-color: #bbb;
  opacity: 0.5;
}

.footer-copy {
  color: rgb(211, 44, 44);
  font-size: 12px;
  letter-spacing: 2px;
  margin-top: 5px;
}

@media (max-width: 991px) {
  .site-footer {
    margin-bottom: 30px;
    padding-bottom: 0;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text {
    text-align: center;
  }
}
</style>
