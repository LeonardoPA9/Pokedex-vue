<template>
  <div class="fields">
    <input
      v-model.trim="search"
      @keydown.enter="clickHandler"
      type="text"
      class="text-input"
      id="text-input"
      placeholder="Search Pokemon"
    />
    <poke-button text="Search" :onCall="clickHandler" />
  </div>
</template>

<script>
export default {
  data: () => ({
    search: "",
  }),
  components: {
    PokeButton: () => import("@/components/UI/PokeButtonConfirm.vue"),
  },
  methods: {
    clickHandler() {
      if (!this.search || this.search === this.$route.params.searchValue)
        return;
      this.$store.commit("matchList", this.search);
      this.$router.push({
        path: `/search/${this.search}`,
        params: { searchValue: this.search },
      });
    },
  },
};
</script>

<style scoped>
.fields {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.fields button {
  height: 5vh;
}

.text-input {
  font-family: "Press Start 2P", cursive;
  padding: 20px 10px;
  margin: 20px;
  border: none;
  border-radius: 2px;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  background: #cfc1b6;
  transition: all 0.2s ease-in;
  width: 90%;
  text-align: center;
}

.text-input:hover,
.text-input:focus {
  border: none;
  outline: none;
  box-shadow: 0 0 0 5px black;
}

.text-input::after {
  content: "Only A-Z are accepted";
}

@media (max-width: 600px) {
  .fields {
    display: flex;
    flex-flow: row wrap;
  }

  .fields button {
    width: 100%;
  }
}
</style>
