/**
 * @fileoverview Wrapper around fetchUsage function from
 * smogon-usage-fetch for ease of use.
 */

import { fetchUsage } from 'smogon-usage-fetch';
import pad from '../utils/pad';

import CORS_PROXY from '../__constants__/CORS_PROXY';

import '../__types__/UsageTable.js';

/**
 * Returns the usage statistics associated with
 * the given parameters.
 * 
 * @param {number} month 
 * @param {number} year 
 * @param {string} format 
 * @param {number} rank
 * 
 * @return {Promise<UsageTable>}
 * A promise resolving to a UsageTable object
 */
export default (month, year, format, rank = '0') => {
  return fetchUsage({ 
    year: year,
    // Library wants us to pass month as string format 'MM'
    month: pad(month, 2),
  }, { 
    name: format,
    rank,
  },
    CORS_PROXY
  )
};
