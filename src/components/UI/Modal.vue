<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <Pokedex v-if="pokemon" :obj="pokemon" />
          <div class="modal-footer">
            <div name="footer">
              <div class="button-row">
                <button
                  type="text"
                  class="button poke-button_denny"
                  @click="$emit('modalHandler', { bool: false })"
                >
                  CLOSE
                </button>
                <poke-button :onCall="detailView" text="SEE MORE" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
    },
  },
  methods: {
    detailView() {
      const pokemon = this.pokemon.pokemon.name;
      this.$router.push({ path: `/detail/${pokemon}`, params: { pokemon } });
    },
  },
  components: {
    PokeButton: () => import("@/components/UI/PokeButtonConfirm.vue"),
    Pokedex: () => import("@/components/Pokedex/Pokedex.vue"),
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  border-radius: 10px;
  background-color: #f2f2f2;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  color: rgb(86, 86, 94);
}

.button-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.button {
  margin: 10px 10px;
  padding: 1em;
  border-radius: 5px;
}

.button:hover {
  cursor: pointer;
}

.poke-button_denny {
  border: 1px solid;
  background-color: none;
}

@media (max-width: 600px) {
  .modal-container {
    width: 400px;
  }
}
</style>
