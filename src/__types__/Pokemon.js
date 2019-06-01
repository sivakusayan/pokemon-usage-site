/** 
 * @typedef {Object} Pokemon
 * A JSON object of pokemon data.
 * @property {id} id 
 * ID of the Pokemon
 * @property {String} name
 * Name of the pokemon
 * @property {Array<Stat>} stats
 * Array of pokemon states
 * @property {Array<Type>} types
 * Array of the pokemon's type
 * @property {{ front_default: string, front_shiny: string }} sprites
 * URL links to the pokemon sprite
 */

 /** 
 * @typedef {Object} Stat
 * Contains stat data for a pokemon
 * @property {Number} base_stat 
 * Base value of the stat
 * @property {{ name: string, url: string }} stat
 * Name and URL of the stat in question
 */

 /** 
 * @typedef {Object} Type
 * Contains stat data for a pokemon
 * @property {Number} slot
 * Slot the type is taking up
 * @property {{ name: string, url: string }} type
 * Name and URL of the type in question
 */