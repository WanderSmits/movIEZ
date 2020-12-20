import { GetterTree } from "vuex";
import { State } from "./state";
import { MovieResult } from "@/models/Movies";

export type Getters = {
  movieList(state: State, payload: Array<MovieResult>): void;
};

export const getters: GetterTree<State, State> & Getters = {
  movieList: (state) => {
    return state.movieList;
  },
  randomMovie: (state) => {
    return state.randomMovie;
  },
  movieTrailer: (state) => {
    return state.movieTrailer;
  },
};
