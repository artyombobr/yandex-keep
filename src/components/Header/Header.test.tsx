import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Header isVisibleModal={false} dispatch={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
