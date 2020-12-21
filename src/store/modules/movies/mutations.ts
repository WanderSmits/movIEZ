import { MutationTypes } from "./mutation-types";
import { MutationTree } from "vuex";
import { State } from "./state";
import { MovieResult, MovieTrailer } from "@/models/Movies";

// The expected types of all the mutations
export type Mutations<S = State> = {
  [MutationTypes.SET_FAVORITES](state: S, payload: Array<MovieResult>): void;
  [MutationTypes.SET_TRENDING](state: S, payload: Array<MovieResult>): void;
  [MutationTypes.SET_TOP_RATED](state: S, payload: Array<MovieResult>): void;
  [MutationTypes.SET_TRAILER](state: S, payload: Array<MovieTrailer>): void;
  [MutationTypes.SET_RANDOM](state: S, payload: Array<MovieResult>): void;
  [MutationTypes.SET_CATEGORY](state: S, payload: Array<MovieResult>): void;
};

// Favorite Mutation
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_FAVORITES](state, payload) {
    state.movieList = payload;
  },

  // Trending mutation
  [MutationTypes.SET_TRENDING](state, payload) {
    //Only return the first ten elements of the array
    const reducedMovies = payload.slice(0, 10);

    state.movieList = reducedMovies;
  },

  // Top rated Mutation
  [MutationTypes.SET_TOP_RATED](state, payload) {
    //Only return the first ten elements of the array
    const reducedMovies = payload.slice(0, 10);

    state.movieList = reducedMovies;
  },

  // Trailer mutation
  [MutationTypes.SET_TRAILER](state, payload) {
    //Get only the data from the array of video.type = "Trailer"
    const trailers = payload.filter((video) => {
      return (video.type = "Trailer");
    });

    //map over all the trailers
    const videoKeys = trailers.map((trailer) => {
      return trailer.key;
    });

    // Getting one videoKey out of the videoKeys array by getting the last item, using pop().
    // Because there is a possibility there is no videoKey I gave it an 'or'-statement of an empty string
    const videoKey: string = videoKeys.pop() || "";

    state.movieTrailer = videoKey;
  },

  // Random mutation
  [MutationTypes.SET_RANDOM](state, payload) {
    //pick one movie out the array of movies
    const movie: MovieResult =
      payload[Math.floor(Math.random() * payload.length)];

    state.randomMovie = movie;
  },

  [MutationTypes.SET_CATEGORY](state, payload) {
    state.movieList = payload;
  },
};
