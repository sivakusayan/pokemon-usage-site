import React from 'react';
import { shallow } from 'enzyme';
import LimitedList from '../LimitedList';

it('renders no more list items than the limit', () => {
  const list = ['apple', 'fruit', 'banana', 'strawberry', 'pear'];
  const limit = 3;
  const wrapper = shallow(<LimitedList list={list} limit={limit} />);

  expect(wrapper.find('ul.limited-list__list').children.length).toBeLessThanOrEqual(limit);
});
it('increment button doesn\'t show when there are less child nodes than the limit', () => {
  const list = ['apple', 'fruit', 'banana', 'strawberry', 'pear'];
  const limit = 8;
  const wrapper = shallow(<LimitedList list={list} limit={limit} />);

  expect(wrapper.find('button.limited-list__increment').exists()).toBeFalsy();
});
it('increment button does show when there are more child nodes than the limit', () => {
  const list = ['apple', 'fruit', 'banana', 'strawberry', 'pear'];
  const limit = 3;
  const wrapper = shallow(<LimitedList list={list} limit={limit} />);

  expect(wrapper.find('button.limited-list__increment').exists()).toBeTruthy();
});
it('increases the limit when the increment button is clicked', () => {
  const limit = 5;
  const increment = 5;
  const wrapper = shallow(<LimitedList limit={limit} increment={increment} />);

  wrapper.find('button.limited-list__increment').simulate('click');
  
  expect(wrapper.state('limit')).toBeEqual(limit + increment);
});
