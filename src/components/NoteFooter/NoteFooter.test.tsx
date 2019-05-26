import React from 'react';
import { shallow } from 'enzyme';
import { NoteFooter } from './NoteFooter';

describe('NoteFooter', () => {
  const note = {
    id: 1,
    type: 'text',
    text: 'Купить чайник с Bluetooth\nВидел у Xiaomi на днях',
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
    const component = shallow(
      <NoteFooter note={note} tags={tags} dispatch={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
