import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    const component = shallow(<Logo className="header__logo" color="black" />);
    expect(component).toMatchSnapshot();
  });
});
