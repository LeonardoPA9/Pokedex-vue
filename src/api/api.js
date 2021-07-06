import axios from "axios";

const baseURL = process.env.VUE_APP_POKEMON;

const instance = axios.create({
  baseURL,
});

export default {
  getUniquePokemon: (value) => instance.get(`pokemon/${value}`),
  getPaginationPokemon: (paginator) =>
    instance.get(
      `pokemon/?offset=${paginator.offset}&limit=${paginator.limit}`
    ),
};
