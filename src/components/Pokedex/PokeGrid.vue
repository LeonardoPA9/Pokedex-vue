<template>
  <div>
    <search />
    <div v-if="hasDownloaded" class="poke-grid">
      <poke-card
        @modalHandler="modalHandler"
        v-for="info in pokeInfo.results"
        :key="info.name"
        :info="info"
      />
    </div>
    <Modal
      @modalHandler="modalHandler"
      :pokemon="chosenPokemon"
      v-if="showModal"
    />
    <div class="button-row">
      <poke-button
        :disabled="paginator.offset === 0"
        :onCall="stepBack"
        text="Back"
      />
      <poke-button
        :disabled="paginator.offset === 1104"
        :onCall="giveStep"
        text="MORE"
      />
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
const STEP = 16;

export default {
  data: () => ({
    pokeInfo: {},
    hasDownloaded: false,
    chosenPokemon: {},
    showModal: false,
    paginator: {
      offset: 0,
      limit: 16,
    },
  }),

  components: {
    PokeCard: () => import("@/components/Pokedex/PokemonCard.vue"),
    Search: () => import("@/components/Pokedex/SearchComponent.vue"),
    PokeButton: () => import("@/components/UI/PokeButtonConfirm.vue"),
    Modal: () => import("@/components/UI/Modal.vue"),
  },

  methods: {
    async getPokemon() {
      const res = await api.getPaginationPokemon(this.paginator);
      this.pokeInfo = res.data;
      this.hasDownloaded = true;
    },

    giveStep() {
      this.paginator.offset += STEP;
      this.goToPagination(this.paginator);
    },

    stepBack() {
      if (this.paginator.offset === 0) return;
      this.paginator.offset -= STEP;
      this.goToPagination(this.paginator);
    },

    goToPagination(paginator) {
      this.$router.push({
        name: "Pagination",
        query: { offset: paginator.offset, limit: paginator.limit },
      });
      this.getPokemon();
    },

    modalHandler(val) {
      Object.assign(this.chosenPokemon, val);
      this.showModal = val.bool;
    },
  },

  mounted() {
    const {
      query: { limit, offset },
    } = this.$route;

    if (this.$route.name === "Pagination") {
      this.paginator.limit = parseInt(limit, 10);
      this.paginator.offset = parseInt(offset, 10);
    } else {
      this.paginator.limit = STEP;
      this.paginator.offset = 0;
    }
    this.getPokemon();
  },

  watch: {
    showModal(bool) {
      if (!bool) {
        Object.assign(this.showModal, {});
      }
    },
    $route(val) {
      if (val.name === "Home") {
        this.paginator.offset = 0;
        this.getPokemon();
      }
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
</style>
