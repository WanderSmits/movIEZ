import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const movies = {
  // namespaced true because we are working with modules in the store
  namespaced: true,
  state,
  actions,
  mutations,
};
