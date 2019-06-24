import '../__types__/Pokemon.js';

/**
 * Parses pokemon stats from the PokeAPI to get texts on 
 * a pokemon's abilities.
 * 
 * @param {Array<{base_stat: number, stat: { name: string, url: string}}>} statsArray
 *  The stats object coming from the PokeAPI
 * @returns {Stats}
 */
export default statsArray => statsArray.reduce((acc, stat) => {
  const name = stat.stat.name;
  const newAcc = {...acc};
  newAcc[name] = stat.base_stat;

  return newAcc;
}, {});