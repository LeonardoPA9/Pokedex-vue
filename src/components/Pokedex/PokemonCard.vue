<template>
  <card class="card">
    <div @click="modalHandler" class="card-content" v-if="hasDownloaded">
      <div class="card-img">
        <img :src="cardInfo.sprites.front_default" :alt="cardInfo.name" />
      </div>
      <div class="card-name">
        <!-- <poke-button label='Show' :onCall='onDecrement' /> -->
        <span>#{{ cardInfo.order }} {{ cardInfo.name }}</span>
        <!-- <poke-button label='Show' :onCall='onIncrement' /> -->
      </div>
    </div>
  </card>
</template>

<script>
import api from "@/api/api";
import Card from "@/components/UI/Card";
export default {
  props: {
    info: {
      type: Object,
      require: true,
    },
  },
  components: {
    Card,
  },
  data: () => ({
    photoIndex: 2,
    cardInfo: {},
    hasDownloaded: false,
  }),

  methods: {
    async getPokemon() {
      const res = await api.getUniquePokemon(this.info.name);
      Object.assign(this.cardInfo, res.data);
      this.hasDownloaded = true;
    },

    modalHandler() {
      this.$emit("modalHandler", { pokemon: this.cardInfo, bool: true });
    },
    onIncrement() {
      if (!this.dynamicPicture[this.photoIndex + 1]) return;
      this.photoIndex += 1;
    },
    onDecrement() {
      if (this.photoIndex === 0) return;
      this.photoIndex -= 1;
    },
  },

  computed: {
    dynamicPicture() {
      let hasPictures = [];
      const keys = Object.keys(this.cardInfo.sprites);
      for (const iterator of keys) {
        if (this.cardInfo.sprites[iterator] !== null) {
          hasPictures.push(iterator);
        }
      }
      // Hey! if you replace src by this in img src cardInfo.sprites[dynamicPicture[photoIndex]] you will be able to see dynamic pictures,
      // but as some API URLS are broken even after checking that values are not null
      // I decided just to show the front side of each pokemon, also, u may discomment the on increment and on decrement buttons.
      return hasPictures;
    },
  },
  mounted() {
    console.log("info", this.info);
    this.getPokemon();
  },
};
</script>

<style scoped>
.card {
  font-family: "Press Start 2P", cursive;
}

.card:hover {
  cursor: pointer;
}

.card-img {
  background-color: #98cb99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card-img img {
  height: 150px;
}

.card-types {
  min-height: 20px;
}

.card-actions span {
  text-transform: capitalize;
}

.card-types {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.card-name span {
  text-transform: capitalize;
}
</style>
