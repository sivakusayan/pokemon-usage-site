import axios from 'axios';
import POKEAPI_URL from '../__contants__/POKEAPI_URL';

import '../__types__/Pokemon.js';

/**
 * Fetches the pokemon data object. Returns null if the pokemon
 * cannot be found.
 * 
 * @param {string} pokemonName
 * 
 * @return {Promise<Pokemon>} 
 * A promise resolving to a Pokemon object
 */
export default (pokemonName) => {
  // API needs lowercased name to work
  const name = pokemonName.trim().toLowerCase();
  
  return axios.get(`${POKEAPI_URL}/${name}`)
  .then(res => res.data)
};
