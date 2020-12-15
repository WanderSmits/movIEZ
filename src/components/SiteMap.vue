<template>
  <div class="site">
    {{ this.getRoutesXML() }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getRoutesList, routes } from "@/router/index";

export default Vue.extend({
  methods: {
    getRoutesXML() {
      const list = getRoutesList(routes, "http://localhost:8080/#/")
        .map((route) => `<url><loc>${route}</loc></url>`)
        .join("\r\n");
      return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
    },
  },
});
</script>

<style scoped>
* {
  height: 87vh;
}

.site {
  position: relative;
  top: 5vh;
}
</style>
