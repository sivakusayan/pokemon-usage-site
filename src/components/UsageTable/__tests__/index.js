import React from 'react';
import { shallow } from 'enzyme';
import UsageTable from '../index';

it('renders without crashing', () => {
  shallow(<UsageTable />);
});
