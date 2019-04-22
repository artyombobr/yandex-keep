import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });
});
