import showService from "./showService";

export const showModule = {
  state: {},
  getters: {},
  actions: {
    getShows: (): Promise<void> => showService.getShows(),
  },
  mutations: {},
  namespaced: true,
};
