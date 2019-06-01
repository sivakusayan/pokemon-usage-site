import axios from 'axios';
import POKEAPI_URL from '../__contants__/POKEAPI_URL';

const fetchPokemon = (pokemonName) => {
  // API needs lowercased name to work
  const name = pokemonName.toLowerCase();
  
  return axios.get(`${POKEAPI_URL}/${name}`)
  .then(res => res.data)
  // If fails, just return a null object.
  // We expect to handle a null return by
  // displaying MissingNo to the user.
  .catch(() => null);
};

export default fetchPokemon;