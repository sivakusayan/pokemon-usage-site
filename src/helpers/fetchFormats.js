/**
 * @fileoverview Wrapper around fetchFormats function from
 * smogon-usage-fetch for ease of use.
 */

import { fetchFormats } from 'smogon-usage-fetch';
import pad from '../utils/pad';

import '../__types__/Format.js';

/**
 * Returns the formats associated with
 * the given parameters.
 * 
 * @param {number} month 
 * @param {number} year 
 * 
 * @return {Promise<Array<Format>>}
 * A promise resolving to a list of formats
 */
export default (month, year) => {
  return fetchFormats({ 
    year: year,
    // Library wants us to pass month as string format 'MM'
    month: pad(month, 2),
  })
  .then((formatTable) => {
    const formats = formatTable.full;
    // Match formats of the form gen#tier
    const regexFilter = /^gen\d(ubers|ou|uu|nu|ru)$/g;
    const filteredFormats = formats.filter(format => format.name.match(regexFilter));
    return filteredFormats;
  })
};
