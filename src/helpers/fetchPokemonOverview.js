import axios from 'axios';

import POKEAPI_URL from '../__constants__/POKEAPI_URL';
import parsePokemonAbilities from './parsePokemonAbilities';
import parsePokemonStats from './parsePokemonStats';

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
export default async (pokemonName) => {
  // API needs lowercased name to work
  const name = pokemonName.trim().toLowerCase();
  
  const res = await axios.get(`${POKEAPI_URL}/${name}`);
  const data = res.data;
  const stats = parsePokemonStats(data.stats);
  const abilities = await parsePokemonAbilities(data);
  
  const overview = {
    stats,
    abilities,
    sprite: data.sprites.front_default,
    id: data.id,
    name: data.name,
    types: data.types,
  }

  return overview;
};
