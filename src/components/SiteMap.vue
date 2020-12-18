<template>
  <div class="site">
    {{ this.getRoutesXML() }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { routes } from "@/router/index";
import { RouteConfig } from "vue-router";

export default Vue.extend({
  methods: {
    // Gets all the routes of the App.
    getRoutesList(routes: Array<RouteConfig>, pre: string) {
      return routes.reduce((array: Array<string>, route) => {
        // Push the path in the array of paths
        const path = `${pre}${route.path}`;
        array.push(path);

        return array;
      }, []);
    },
    // Converting the routes to XML
    getRoutesXML() {
      const list = this.getRoutesList(routes, "http://localhost:8080/#/")
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
