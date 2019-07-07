import React from 'react';

const TableItem = (item) => {
  const rank = item[0];
  const pokemonName = item[1];
  const percentUsage = item[2];
  const rawUsage = item[3];

  return (
    <li>
      <p>Rank: {rank}</p>
      <p>Name: {pokemonName}</p>
      <p>Usage Rate: {percentUsage}</p>
      <p>Raw Usage: {rawUsage}</p>
    </li>
  )
};

export default TableItem;