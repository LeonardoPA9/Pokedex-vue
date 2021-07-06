import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokeList: [],
    filteredList: [],
  },
  mutations: {
    addToList(state, pokemon) {
      state.pokeList.push(pokemon);
    },
    matchList(state, pokemon) {
      const int = parseInt(pokemon, 10);
      let filter;
      if (int) {
        filter = state.pokeList.filter(
          (poke) => poke.id === int || poke.order === int
        );
      } else {
        filter = state.pokeList.filter((poke) => poke.name.includes(pokemon));
      }
      state.filteredList = filter;
    },
  },
  actions: {
    getMultiplePokemon({ commit }) {
      let promises = [];
      const MAX = 899; // max num of iterations that returns a pokemon... for better performance PLEASE USE ONLY 1ST GEN around (150)
      for (let index = 1; index < MAX; index++) {
        promises.push(
          axios
            .get(`${process.env.VUE_APP_POKEMON}pokemon/${index}`)
            .then((res) => {
              commit("addToList", res.data);
            })
        );
      }
      Promise.all(promises);
    },
  },
  modules: {},
});
