/**
 * Parses pokemon types from the PokeAPI.
 * 
 * @param {Array<{slot: number, type: { name: string, url: string}}>} typesArray
 *  The types array coming from the PokeAPI
 * @returns {Array<string>}
 */
export default (typesArray) => {
  const types = typesArray.sort((a, b) => a.slot - b.slot);
  return types.map(type => type.type.name);
}