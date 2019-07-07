import React from 'react';

import Loader from '../utils/Loader';
import LimitedList from '../utils/LimitedList';
import TableItem from './TableItem';

import fetchUsage from '../../helpers/fetchUsage';

class UsageTable extends React.Component {
  state = {
    isLoading: true,
    table: [],
  }

  componentDidMount = () => {
    fetchUsage(2, 2018, 'gen7ou').then(data => {
      const rows = data.data.rows;
      this.setState({
        isLoading: false,
        table: rows,
      })
    })
  }

  render = () => {
    const { isLoading, table } = this.state;
    return (
      <div>
        {isLoading && <Loader />}
        {!isLoading && (
          <LimitedList>
            {table.map(item => <p>{item}</p>)}
          </LimitedList>
        )}
      </div>
    )
  }
}

export default UsageTable;