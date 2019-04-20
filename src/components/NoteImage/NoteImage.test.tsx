import React from 'react';
import { shallow } from 'enzyme';
import NoteImage from './NoteImage';
import { ColorsEntity } from '../../shared';

describe('NoteImage', () => {
  const note = {
    id: 1,
    type: 'text',
    text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
    color: 0,
    tags: [0],
    size: 's',
    created: 1551593220000,
  };
  const colors: ColorsEntity[] = [
    {
      id: 0,
      color: '#E84747',
    },
  ];

  it('renders correctly', () => {
    const component = shallow(<NoteImage note={note} colors={colors} />);
    expect(component).toMatchSnapshot();
  });
});
