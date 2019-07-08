import React from 'react';
import { shallow } from 'enzyme';

import { UnwrappedUsageTable } from '../index';
import Table from './Table';
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
  it('displays the table while isLoading is false', () => {
    wrapper.setState({ isLoading: false });

    expect(wrapper.find(Table).exists()).toBeTruthy();
  });
  it('hides the table while isLoading is true', () => {
    wrapper.setState({ isLoading: true });

    expect(wrapper.find(Table).exists()).toBeFalsy();
  });
})
