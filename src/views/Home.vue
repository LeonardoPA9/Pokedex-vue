<template>
  <div>
    <pokemon-grid />
  </div>
</template>

<script>
export default {
  components: {
    PokemonGrid: () => import("@/components/Pokedex/PokeGrid.vue"),
  },
};
</script>
