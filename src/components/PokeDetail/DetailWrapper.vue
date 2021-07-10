<template>
  <div>
    <div class="container" v-if="downloaded">
      <div class="primary-info">
        <div class="primary-info_photo">
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        </div>
        <div class="primary-info_stats">
          <span>Name: {{ pokemon.name }}</span>
          <span v-for="(stat, idx) in pokemon.stats" :key="idx"
            >{{ stat.stat.name }}: {{ stat.base_stat }}</span
          >
        </div>
      </div>
      <div class="secondary-info">
        <p>
          <span class="attr">{{ pokemon.name }}</span> is a
          <span class="attr">{{ pokemon.types[0].type.name }}</span> type
          Pokemon.
        </p>
        <p>
          It has appeared in over
          <span class="attr">{{ pokemon.game_indices.length }}</span> games!,
          including Pokemon {{ pokemon.game_indices[0].version.name }}.
        </p>
        <p>
          Its order in the Pokedex is
          <span class="attr">{{ pokemon.order }}</span>
        </p>
        <p>
          <span class="attr">{{ pokemon.name }}'s</span> main ability is
          <span class="attr">{{ pokemon.abilities[0].ability.name }}</span>
        </p>
        <div class="secondary-info_footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
export default {
  data: () => ({
    pokemon: {},
    downloaded: false,
  }),
  async mounted() {
    const res = await api.getUniquePokemon(this.$route.params.pokemon);
    this.pokemon = res.data;
    this.downloaded = true;
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  font-family: "Press Start 2P", cursive;
  width: 70%;
  background-color: rgb(201, 181, 140);
  border: 1px solid red;
  min-height: 70vh;
  margin: 10px auto;
  padding: 3em;
  border: none;
  border-radius: 15px;
  background-color: wheat;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.primary-info {
  min-height: 60vh;
  max-width: 30%;
  padding: auto;
  border: 10px solid #b3d0f5;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.primary-info_photo {
  background: #2bc0e4;
  background: -webkit-linear-gradient(to top, #eaecc6, #2bc0e4);
  background: linear-gradient(to top, #eaecc6, #2bc0e4);
  height: 35vh;
  display: flex;
  justify-content: center;
  align-content: center;
}

.primary-info_photo img {
  min-height: 30vh;
}

.primary-info_stats {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.secondary-info {
  padding: 2em;
  border-radius: 10px;
  margin-left: 10%;
  min-height: 50vh;
  width: 60%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

span {
  margin-top: 1vh;
}

@media (max-width: 1024px) {
  .primary-info {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-flow: column wrap;
  }

  .secondary-info {
    display: none;
  }
}

@media (min-width: 320px) {
  .container {
    width: 75%;
    padding: 1em;
  }

  .primary-info_photo img {
    min-height: 10vh;
  }
}
</style>
