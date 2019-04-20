import React from 'react';
import { shallow } from 'enzyme';
import Reminder from './Reminder';

describe('Reminder', () => {
  it('correct render', () => {
    const component = shallow(<Reminder />);
    expect(component).toMatchSnapshot();
  });
});
