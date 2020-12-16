import { MovieResult } from "@/models/Movies";

// The initial state
export const state = {
  movieList: Array<MovieResult>(),
  randomMovie: {},
  movieTrailer: "",
};

// Not really sure why this is needed, but I got it from https://dev.to/3vilarthas/vuex-typescript-m4j.
// I think it takes all state types and puts it into one type State
export type State = typeof state;
