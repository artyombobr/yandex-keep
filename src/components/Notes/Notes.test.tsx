import React from 'react';
import { shallow } from 'enzyme';
import Notes from './Notes';
import { ColorsEntity } from '../../shared';

describe('Notes', () => {
  const notes = [
    {
      id: 1,
      type: 'text',
      text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
      items: [
        {
          text: 'Оливочки',
          checked: false,
        },
      ],
      color: 0,
      tags: [0],
      size: 's',
      created: 1551593220000,
    },
  ];
  const colors: ColorsEntity[] = [
    {
      id: 0,
      color: '#E84747',
    },
  ];

  it('renders correctly', () => {
    const component = shallow(<Notes notes={notes} colors={colors} />);
    expect(component).toMatchSnapshot();
  });
});
