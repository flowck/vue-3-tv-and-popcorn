import { RootState } from "./../index";
import { Module } from "vuex";
import { Show } from "./interface";
import showService from "./showService";

interface ShowModuleState {
  shows: Show[];
}

enum MUTATIONS {
  SET_SHOWS = "SET_SHOWS",
}

export const showModule: Module<ShowModuleState, RootState> = {
  state: {
    shows: [],
  },
  getters: {
    shows: (state): Show[] => state.shows,
  },
  actions: {
    getShows: async ({ commit }): Promise<void> => {
      const shows = await showService.getShows();
      commit(MUTATIONS.SET_SHOWS, shows);
    },
  },
  mutations: {
    [MUTATIONS.SET_SHOWS]: (state, shows: Show[]): void => {
      state.shows = shows;
    },
  },
  namespaced: true,
};
