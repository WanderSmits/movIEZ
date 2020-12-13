import { MovieResult } from "@/models/Movies";

// The initial state
export const state = {
  movieList: Array<MovieResult>(),
  randomMovie: {},
  movieTrailer: "",
};

// Not really sure why this is needed, but I got it from https://dev.to/3vilarthas/vuex-typescript-m4j. It is being used in actions and mutations
export type State = typeof state;
