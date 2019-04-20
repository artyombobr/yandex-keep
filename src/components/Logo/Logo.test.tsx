import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
  it('should match snapshot', () => {
    const component = shallow(<Logo className="header__logo" color="black" />);
    expect(component).toMatchSnapshot();
  });
});
