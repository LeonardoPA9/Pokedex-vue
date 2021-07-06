<template>
  <h1>Sorry, view not found :(</h1>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({name:'Home'})
    }, 5000);
  }
}
</script>
