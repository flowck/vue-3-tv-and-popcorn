import { showModule } from "./show";
import { createStore } from "vuex";

export interface RootState {
  id: string;
}

const state: RootState = {
  id: "",
};

export enum MODULES {
  SHOW_MODULE = "showModule",
}

export default createStore({
  state,
  mutations: {},
  actions: {
    initApp: ({ dispatch }) => {
      dispatch("showModule/getShows");
    },
  },
  modules: { showModule },
});
