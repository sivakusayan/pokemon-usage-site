import { fetchUsage } from 'smogon-usage-fetch';

import '../__types__/UsageTable.js';

/**
 * Pads the given number with leading 0s until the desired
 * length is reached.
 * 
 * @param {Number} num
 *  The number to pad 
 * @param {*} size 
 *  The size to pad to
 */
const pad = (num, size) => {
  let paddedString = num.toString();
  while (paddedString.length < size) paddedString = '0' + paddedString;
  return paddedString;
}

/**
 * Returns the usage statistics associated with
 * the given parameters.
 * 
 * @param {number} month 
 * @param {number} year 
 * @param {string} format 
 * 
 * @return {Promise<UsageTable>}
 * A promise resolving to a UsageTable object
 */
const fetchStats = (month, year, format) => {
  return fetchUsage({ 
    year: year, 
    month: pad(month, 2),
  }, { 
    name: format, 
  })
};

export default fetchStats;