import React from 'react';

import toKebabCase from '../../utils/toKebabCase';

const TableItem = ({ item, key }) => {
  const rank = item[0];
  const pokemonName = item[1];
  const percentUsage = item[2];
  const rawUsage = item[3];

  return (
    <li key={toKebabCase(pokemonName)}>
      <span className={`pkspr-pokemon-${toKebabCase(pokemonName)}`}></span>
      <p>Rank: {rank}</p>
      <p>Name: {pokemonName}</p>
      <p>Usage Rate: {percentUsage}</p>
      <p>Raw Usage: {rawUsage}</p>
    </li>
  )
};

export default TableItem;