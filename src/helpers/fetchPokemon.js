import axios from 'axios';
import POKEAPI_URL from '../__contants__/POKEAPI_URL';

/**
 * Fetches the pokemon data object. Returns null if the pokemon
 * cannot be found.
 * 
 * @param {string} pokemonName
 * 
 * @return {Promise<Pokemon> | Promise<Null>} Pokemon promise
 */
const fetchPokemon = (pokemonName) => {
  // API needs lowercased name to work
  const name = pokemonName.trim().toLowerCase();
  
  return axios.get(`${POKEAPI_URL}/${name}`)
  .then(res => res.data)
  // If fails, just return a null object.
  // We expect to handle a null return by
  // displaying MissingNo to the user.
  .catch(() => null);
};

export default fetchPokemon;