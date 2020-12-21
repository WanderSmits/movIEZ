import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { Mutations } from "./mutations";
import { MutationTypes } from "./mutation-types";
import { ActionTypes } from "./action-types";
import axios from "axios";
import { MovieResult } from "@/models/Movies";
import { FETCH_URL } from "@/api";

const API_KEY = process.env.VUE_APP_API_KEY;

// AugmentedActionContext handles the type of the commit
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

// The types of all the actions
export interface Actions {
  [ActionTypes.GET_FAVORITES](
    { commit }: AugmentedActionContext,
    payload: Array<MovieResult>
  ): void;
  [ActionTypes.GET_TRENDING](
    { commit }: AugmentedActionContext,
    payload: Array<MovieResult>
  ): void;
  [ActionTypes.GET_TOP_RATED](
    { commit }: AugmentedActionContext,
    payload: Array<MovieResult>
  ): void;
  [ActionTypes.GET_TRAILER](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
  [ActionTypes.GET_RANDOM](
    { commit }: AugmentedActionContext,
    payload: Array<MovieResult>
  ): void;
  [ActionTypes.GET_CATEGORY](
    { commit }: AugmentedActionContext,
    payload: Array<MovieResult>
  ): void;
}

// All the actions itself, fetching data
export const actions: ActionTree<State, State> & Actions = {
  // fetchFavorites
  async [ActionTypes.GET_FAVORITES]({ commit }) {
    await axios
      .get(`${FETCH_URL}list/7067876?api_key=${API_KEY}&language=en-US`)
      .then((data) => {
        const favorites: Array<MovieResult> = data.data.items;
        commit(MutationTypes.SET_FAVORITES, favorites);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // fetchTrending
  async [ActionTypes.GET_TRENDING]({ commit }) {
    await axios
      .get(`${FETCH_URL}trending/all/day?api_key=${API_KEY}`)
      .then((data) => {
        const trending: Array<MovieResult> = data.data.results;
        commit(MutationTypes.SET_TRENDING, trending);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // fetchTopRated
  async [ActionTypes.GET_TOP_RATED]({ commit }) {
    await axios
      .get(
        `${FETCH_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((data) => {
        const topRated: Array<MovieResult> = data.data.results;
        commit(MutationTypes.SET_TOP_RATED, topRated);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // fetchTrailer
  async [ActionTypes.GET_TRAILER]({ commit }, movieId) {
    await axios
      .get(
        `${FETCH_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((data) => {
        const trailer = data.data.results;
        commit(MutationTypes.SET_TRAILER, trailer);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  // fetchRandomMovie
  async [ActionTypes.GET_RANDOM]({ commit }) {
    // Fetch a different page every load, up to 500 pages
    const randomPage = Math.floor(Math.random() * 500);
    axios
      .get(
        `${FETCH_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}&release_date.gte=0.0`
      )
      .then((data) => {
        // Returns a results array of twenty movies
        const random = data.data.results;
        commit(MutationTypes.SET_RANDOM, random);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async [ActionTypes.GET_CATEGORY]({ commit }, id) {
    const genreId = id;
    await axios
      .get(
        `${FETCH_URL}discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
      )
      .then((data) => {
        const genre: Array<MovieResult> = data.data.results;
        commit(MutationTypes.SET_CATEGORY, genre);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
