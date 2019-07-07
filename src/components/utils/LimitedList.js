import React from 'react';
import PropTypes from 'prop-types';

class LimitedList extends React.Component {
  state = {
    limit: this.props.limit,
    increment: this.props.increment,
  }

  increment = () => {
    this.setState((prevState) => ({
      limit: prevState.limit + prevState.increment 
    }));
  }

  render = () => {
    const { children } = this.props;
    const { limit } = this.state;
    return (
      <div className='limited-list'>
        <ul className='limited-list__list'>
          {children.slice(0, limit)}
        </ul>
        {children.length > limit && (
          <button 
            onClick={this.increment} 
            className='limited-list__increment'
          >
            Show More
          </button>
        )}
      </div>
    )
  }
}

LimitedList.propTypes = {
  limit: PropTypes.number,
  increment: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.node),
}

LimitedList.defaultProps  = {
  limit: 10,
  increment: 10,
  children: [],
}

export default LimitedList;