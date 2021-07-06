<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  margin: 10px auto;
  padding: 0.7em;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 225px;
  background-color: wheat;
  transition: 0.5s ease-in-out;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

@media (min-width: 600px) {
  .card:hover {
    transform: scale(1.1);
    background-color: rgb(201, 181, 140);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>
