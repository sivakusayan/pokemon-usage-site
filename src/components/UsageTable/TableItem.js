import React from 'react';

import toKebabCase from '../../utils/toKebabCase';

const TableItem = ({ item }) => {
  const rank = item[0];
  let pokemonName = item[1];
  const percentUsage = item[2];
  const rawUsage = item[3];

  // Comply with naming standards in Pikasprite
  if (pokemonName === 'NidoranM') pokemonName = 'nidoran-m';
  if (pokemonName === 'NidoranF') pokemonName = 'nidoran-f';

  return (
    <li>
      <span className={`pkspr-pokemon-${toKebabCase(pokemonName)}`}></span>
      <p>Rank: {rank}</p>
      <p>Name: {pokemonName}</p>
      <p>Usage Rate: {percentUsage}</p>
      <p>Raw Usage: {rawUsage}</p>
    </li>
  )
};

export default TableItem;