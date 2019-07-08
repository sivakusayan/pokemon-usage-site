import React from 'react';
import { shallow } from 'enzyme';

import { UnwrappedUsageTable } from '../index';
import LimitedList from '../../utils/LimitedList';
import Loader from '../../utils/Loader';

let wrapper;

describe('initialization', () => {
  beforeAll(() => {
    wrapper = shallow(<UnwrappedUsageTable />,  { disableLifecycleMethods: true });
  });

  it('initializes isLoading to true', () => {
    expect(wrapper.state('isLoading')).toBeTruthy();
  });
  it('initializes table to the empty array', () => {
    expect(wrapper.state('table')).toEqual([]);
  });
});

describe('behaviour', () => {
  beforeAll(() => {
    wrapper = shallow(<UnwrappedUsageTable />, { disableLifecycleMethods: true });
  });

  it('displays the loader while isLoading is true', () => {
    wrapper.setState({ isLoading: true });

    expect(wrapper.find(Loader).exists()).toBeTruthy();
  });
  it('hides the loader while isLoading is false', () => {
    wrapper.setState({ isLoading: false });

    expect(wrapper.find(Loader).exists()).toBeFalsy();
  });
  it('displays the list while isLoading is false', () => {
    wrapper.setState({ isLoading: false });

    expect(wrapper.find(LimitedList).exists()).toBeTruthy();
  });
  it('hides the loader while isLoading is true', () => {
    wrapper.setState({ isLoading: true });

    expect(wrapper.find(LimitedList).exists()).toBeFalsy();
  });
})
