<template>
  <div>
    <search />
    <div class="poke-grid">
      <poke-card
        @modalHandler="modalHandler"
        v-for="info in pokeList"
        :key="info.id"
        :info="info"
      />
    </div>
    <div v-if="!pokeList.length">
      <h1>No results found... Try typing 'em all</h1>
    </div>
    <Modal
      @modalHandler="modalHandler"
      :pokemon="chosenPokemon"
      v-if="showModal"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    pokeList: JSON.parse(localStorage.getItem("pokeList")),
    chosenPokemon: {},
    showModal: false,
  }),

  components: {
    PokeCard: () => import("@/components/Pokedex/PokemonCard.vue"),
    Search: () => import("@/components/Pokedex/SearchComponent.vue"),
    Modal: () => import("@/components/UI/Modal.vue"),
  },

  methods: {
    modalHandler(val) {
      Object.assign(this.chosenPokemon, val);
      this.showModal = val.bool;
    },
  },

  computed: {
    ...mapState(["filteredList"]),
  },

  watch: {
    filteredList(newPokeList) {
      this.pokeList = newPokeList;
      localStorage.setItem("pokeList", JSON.stringify(newPokeList));
    },
  },
};
</script>

<style scoped>
.poke-grid {
  display: flex;
  flex-flow: row wrap;
}
.button-row {
  display: flex;
  min-height: 10vh;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  font-family: "Press Start 2P", cursive;
}
</style>
