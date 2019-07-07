import React from 'react';
import { shallow } from 'enzyme';

import UsageTable from '../index';
import Loader from '../../utils/Loader';

describe('initialization', () => {
  it('initializes isLoading to true', () => {
    const wrapper = shallow(<UsageTable />);
    expect(wrapper.state('isLoading')).toBeTruthy();
  });
  it('initializes table to the empty array', () => {
    const wrapper = shallow(<UsageTable />);
    expect(wrapper.state('table')).toEqual([]);
  });
});

describe('behaviour', () => {
  it('displays the loader while isLoading is true', () => {
    const wrapper = shallow(<UsageTable />);
    wrapper.setState({ isLoading: true });

    expect(wrapper.find(<Loader />).exists()).toBeTruthy();
  });
  it('hides the loader while isLoading is false', () => {
    const wrapper = shallow(<UsageTable />);
    wrapper.setState({ isLoading: false });

    expect(wrapper.find(<Loader />).exists()).toBeFalsy();
  });
})
