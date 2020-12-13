import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { movies } from "./modules/movies/";

Vue.use(Vuex, axios);
// Create new store with all the modules
export default new Vuex.Store({
  modules: {
    movies,
  },
});
