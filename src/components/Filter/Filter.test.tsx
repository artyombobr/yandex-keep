import React from 'react';
import { shallow } from 'enzyme';
import { Filter } from './Filter';

describe('Filter', () => {
  const colors = [
    {
      id: 0,
      color: '#3ae800',
    },
  ];
  const allNotes = [
    {
      type: 'text',
      text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
      tags: [0],
      size: 's',
      created: 1551593220000,
    },
  ];

  it('correct render', () => {
    const component = shallow(
      <Filter colors={colors} allNotes={allNotes} dispatch={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
