/** 
 * @typedef {Object} Pokemon
 * A JSON object of pokemon data.
 * @property {id} id 
 * ID of the Pokemon
 * @property {String} name
 * Name of the pokemon
 * @property {Stats} stats
 * Object of pokemon stats
 * @property {Array<Type>} types
 * Array of the pokemon's type
 * @property {String} sprite
 * URL link to the pokemon sprite
 */

 /** 
 * @typedef {Object} Stats
 * Contains stat data for a pokemon
 * @property {Number} hp
 * @property {Number} attack
 * @property {Number} defense
 * @property {Number} special_attack
 * @property {Number} special_defense
 * @property {Number} speed
 */

 /** 
 * @typedef {Object} Type
 * Contains stat data for a pokemon
 * @property {Number} slot
 * Slot the type is taking up
 * @property {{ name: string, url: string }} type
 * Name and URL of the type in question
 */