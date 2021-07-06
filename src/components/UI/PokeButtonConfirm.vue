<template>
  <button @click="onCall" :disabled="disabled">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Send",
    },
    onCall: {
      type: Function,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px 10px;
  padding: 1em;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    #16a085 0%,
    #f4d03f 51%,
    #16a085 100%
  );
}
button {
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  display: block;
}

button:disabled {
  border: 1px solid #999999;
  background-image: none;
  background-color: #cccccc;
  color: #666666;
}

button:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
