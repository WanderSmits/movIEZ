import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Random from "../views/Random.vue";
import MovieDetails from "../views/MovieDetails.vue";
import { RouteTypes } from "@/models/Movies";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/random",
    name: "Random",
    component: Random,
  },
  {
    path: "/details/:id",
    name: "MovieDetails",
    component: MovieDetails,
  },
];

const router = new VueRouter({
  routes,
});

console.log("routes:", routes);

function getRoutesList(routes: any, pre: any) {
  return routes.reduce((array: any, route: any) => {
    const path = `${pre}${route.path}`;

    if (route.path !== "*") {
      array.push(path);
    }

    if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

    return array;
  }, []);
}

// console.log(getRoutesList(router.options.routes, "http://localhost:8080/#/"));
console.log(getRoutesList);

// function getRoutesXML() {
//   const list = getRoutesList(router.options.routes, 'http://localhost:8080/#/')
//     .map(route => `<url><loc>${route}</loc></url>`)
//     .join('\r\n');
//   return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
//     ${list}
//   </urlset>`;
// }

export default router;
