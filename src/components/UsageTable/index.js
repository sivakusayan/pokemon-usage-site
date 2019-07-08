import React from 'react';
import { connect } from 'react-redux';

import Loader from '../utils/Loader';
import LimitedList from '../utils/LimitedList';
import TableItem from './TableItem';

import fetchUsage from '../../helpers/fetchUsage';

// Export for testing
export class UnwrappedUsageTable extends React.Component {
  state = {
    isLoading: true,
    table: [],
  }

  fetchTable = () => {
    const { month, year, format } = this.props.table;
    
    fetchUsage(month, year, format).then(data => {
      const rows = data.data.rows;
      this.setState({
        isLoading: false,
        table: rows,
      })
    })
  }

  componentDidMount = () => this.fetchTable()
  componentDidUpdate = () => this.fetchTable()

  render = () => {
    const { isLoading, table } = this.state;
    return (
      <div>
        {isLoading && <Loader />}
        {!isLoading && (
          <LimitedList>
            {/* item[1] is pokemon name */}
            {table.map(item => <TableItem key={item[1]} item={item}></TableItem>)}
          </LimitedList>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  table: state.currentUsageTable,
});

// Wraps the unwrapped component for consumption
export default connect(mapStateToProps)(UnwrappedUsageTable);