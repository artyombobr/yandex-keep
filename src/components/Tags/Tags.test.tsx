import React from 'react';
import { shallow } from 'enzyme';
import Tags from './Tags';

describe('Tags', () => {
  const note = {
    id: 1,
    type: 'text',
    text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
    color: 0,
    tags: [0],
    size: 's',
    created: 1551593220000,
  };
  const tags = [
    {
      id: 0,
      tag: 'покупки',
    },
  ];
  it('renders correctly', () => {
    const component = shallow(<Tags note={note} tags={tags} />);
    expect(component).toMatchSnapshot();
  });
});
