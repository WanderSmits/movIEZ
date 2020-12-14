<template>
  <footer class="site-footer">
    <div class="footer-about">
      <h6>About</h6>
      <div class="footer-sitemap">
        <xml:v-on version="1.0" encoding="UTF-8">
          <urlset
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.w3.org/TR/xhtml11/xhtml11_schema.html http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
            xmlns:v-on="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/TR/xhtml11/xhtml11_schema.html"
          >
            <router-link :to="{ name: 'Home' }">
              <url>
                <loc>http://localhost:8080/#/</loc>
                <lastmod>2020-12-14T09:48:08+00:00</lastmod>
                <priority>0.8</priority>
              </url>
            </router-link>
          </urlset>
        </xml:v-on>
      </div>
    </div>

    <hr />
    <p class="footer-copy">
      Copyright &copy; 2020
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    showXml() {
      return;
    },
  },
});
</script>

<style scoped>
.site-footer {
  position: relative;
  background: rgba(0, 0, 0, 0.9);
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.footer-about {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}

.footer-something {
  color: #fff;
  font-size: 10px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
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

.footer-sitemap {
  float: right;
}

@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
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
