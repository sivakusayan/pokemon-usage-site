import axios from 'axios';

/**
 * Parses the data coming from the PokeAPI to get texts on 
 * a pokemon's abilities. Note that we need this function as
 * the text is not included in the initial data.
 * 
 * @param {Object} data
 *  The data object coming from the PokeAPI
 * @returns {Promise<{name: string, effect: string, isHidden: boolean }>}
 */
export default (data) => {
  const abilityLinks = data.abilities.map(ability => ability.ability.url);
  const abilityIsHidden = data.abilities.map(ability => ability.is_hidden);
  const abilityArray = abilityLinks.map((url, index) => axios.get(url)
    .then(res => {
      const data = res.data;
      return {
        name: data.name,
        effect: data.effect_entries[0].short_effect,
        isHidden: abilityIsHidden[index],
      };
    })
  );
  return Promise.all(abilityArray);
};