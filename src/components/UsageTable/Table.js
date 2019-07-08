import React from 'react';
import TableItem from './TableItem';
import LimitedList from '../utils/LimitedList';

const Table = ({ table }) => (
  <LimitedList>
    {/* item[1] is pokemon name */}
    {table.map(item => <TableItem key={item[1]} item={item}></TableItem>)}
  </LimitedList>
);

export default Table;