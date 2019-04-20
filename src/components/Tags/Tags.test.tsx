import React from 'react';
import { shallow } from 'enzyme';
import Tags from './Tags';

describe('Tags', () => {
  it('correct render', () => {
    const component = shallow(<Tags />);
    expect(component).toMatchSnapshot();
  });
});
