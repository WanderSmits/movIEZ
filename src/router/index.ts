import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Random from "../views/Random.vue";
import MovieDetails from "../views/MovieDetails.vue";
import SiteMap from "@/components/SiteMap.vue";

Vue.use(VueRouter);

// All the routes in the application
export const routes: Array<RouteConfig> = [
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
  {
    path: "/sitemap.xml",
    name: "SiteMap",
    component: SiteMap,
  },
];

const router = new VueRouter({
  routes,
});

// Gets all the routes of the App.
export function getRoutesList(routes: Array<RouteConfig>, pre: string) {
  return routes.reduce((array: Array<string>, route) => {
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

export default router;
