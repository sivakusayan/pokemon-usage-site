import fetchUsage from './fetchUsage';
import getLatestValidTime from '../utils/getLatestValidTime';

import DEFAULT_TABLE from '../__constants__/DEFAULT_TABLE';
import '../__types__/UsageTable.js';

/**
 * Scans for the data associated with a specific pokemon.
 */
const scanUsageTable = (usageTable, pokemonName) => {
  const rows = usageTable.data.rows;
  return rows.filter(usage => usage[1].toLowerCase() === pokemonName.toLowerCase())[0];
};

/**
 * Fetches the most recent usage stats for a pokemon
 * in Ubers, OU, UU, and NU.
 * 
 * @param {string} pokemonName
 * @return {{ubers: Usage, ou: Usage, uu: Usage, nu: Usage}}
 */
export default (pokemonName) => {
  const { month, year } = getLatestValidTime();

  const ubersStats = fetchUsage(month, year, DEFAULT_TABLE)
  .then(table => scanUsageTable(table, pokemonName));

  const ouStats = fetchUsage(month, year, DEFAULT_TABLE)
  .then(table => scanUsageTable(table, pokemonName));

  const uuStats = fetchUsage(month, year, DEFAULT_TABLE)
  .then(table => scanUsageTable(table, pokemonName));

  const nuStats = fetchUsage(month, year, DEFAULT_TABLE)
  .then(table => scanUsageTable(table, pokemonName)); 

  const promises = [ubersStats, ouStats, uuStats, nuStats];

  return Promise.all(promises).then(res => ({
    ubers: res[0],
    ou: res[1],
    uu: res[2],
    nu: res[3],
  }));
}