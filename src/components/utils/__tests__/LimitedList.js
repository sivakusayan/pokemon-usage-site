import React from 'react';
import { shallow } from 'enzyme';
import LimitedList from '../LimitedList';

let children;

beforeAll(() => {
  const list = ['apple', 'fruit', 'banana', 'strawberry', 'pear'];
  children = list.map(word => <li>{word}</li>);
})

it('renders no more list items than the limit', () => {
  const limit = 3;
  const wrapper = shallow(<LimitedList children={children} limit={limit} />);

  expect(wrapper.find('ul.limited-list__list').children.length).toBeLessThanOrEqual(limit);
});
it('increment button doesn\'t show when there are limit is greater than or equal to children length', () => {
  const limit = 5;
  const wrapper = shallow(<LimitedList children={children} limit={limit} />);

  expect(wrapper.find('button.limited-list__increment').exists()).toBeFalsy();
});
it('increment button does show when there are more child nodes than the limit', () => {
  const limit = 3;
  const wrapper = shallow(<LimitedList children={children} limit={limit} />);

  expect(wrapper.find('button.limited-list__increment').exists()).toBeTruthy();
});
it('increases the limit when the increment button is clicked', () => {
  const limit = 3;
  const increment = 5;
  const wrapper = shallow(<LimitedList children={children} limit={limit} increment={increment} />);

  wrapper.find('button.limited-list__increment').simulate('click');
  
  expect(wrapper.state('limit')).toEqual(limit + increment);
});
