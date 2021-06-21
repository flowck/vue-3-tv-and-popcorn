import { showModule } from "./show";
import { createStore } from "vuex";

interface RootState {
  id: string;
}

const state: RootState = {
  id: "",
};

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
