import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List', () => {
  const items = [{ text: 'Оливочки', checked: false }];
  it('renders correctly', () => {
    const component = shallow(<List items={items} dispatch={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
