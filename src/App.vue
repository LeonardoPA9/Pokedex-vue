<template>
  <div>
    <header>
      <Pokeball />
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Pokeball from "./components/UI/Pokeball.vue";

export default {
  components: {
    Pokeball,
  },
  async mounted() {
    await this.$store.dispatch("getMultiplePokemon");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

body {
  background: #00b09b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #00b09b,
    #96c93d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #00b09b,
    #96c93d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c94428;
  height: 10vh;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.container {
  margin: auto;
  margin-top: 5%;
  width: 90%;
}
</style>
