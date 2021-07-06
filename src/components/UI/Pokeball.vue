<template>
  <div @click="goHome" class="pokeball">
    <div class="pokeball__button"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      if (this.$route.path === "/") return;
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.pokeball {
  cursor: pointer;
  position: relative;
  width: 70px;
  height: 70px;
  background: #fff;
  border: 5px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: fall 0.25s ease-in-out,
    shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;
}
.pokeball::before,
.pokeball::after {
  content: "";
  position: absolute;
}
.pokeball::before {
  background: red;
  width: 100%;
  height: 50%;
}
.pokeball::after {
  top: calc(50%);
  width: 100%;
  height: 7px;
  background: #000;
}
.pokeball__button {
  position: absolute;
  top: calc(50% - 8%);
  left: calc(50% - 11%);
  width: 15px;
  height: 15px;
  background: #7f8c8d;
  border: 5px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 0.2em black;
  -webkit-animation: blink 0.5s alternate 7;
  animation: blink 0.5s alternate 7;
}
/* Animation */
@keyframes blink {
  from {
    background: #eee;
  }
  to {
    background: #e74c3c;
  }
}
@keyframes shake {
  0 {
    transform: translate(0, 0) rotate(0);
  }
  20% {
    transform: translate(-10px, 0) rotate(-20deg);
  }
  30% {
    transform: translate(10px, 0) rotate(20deg);
  }
  50% {
    transform: translate(-10px, 0) rotate(-10deg);
  }
  60% {
    transform: translate(10px, 0) rotate(10deg);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
}
@keyframes fall {
  0% {
    top: -200px;
  }
  60% {
    top: 0;
  }
  80% {
    top: -20px;
  }
  100% {
    top: 0;
  }
}
</style>
