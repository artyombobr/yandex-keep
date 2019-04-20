import React from 'react';
import { shallow } from 'enzyme';
import Reminder from './Reminder';

describe('Reminder', () => {
  it('renders correctly', () => {
    const component = shallow(<Reminder />);
    expect(component).toMatchSnapshot();
  });
});
