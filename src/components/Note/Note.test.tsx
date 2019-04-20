import React from 'react';
import { shallow } from 'enzyme';
import { Note } from './Note';
import { ColorsEntity } from '../../shared';

describe('Note', () => {
  const colors: ColorsEntity[] = [
    {
      id: 0,
      color: '#E84747',
    },
  ];
  const note = {
    type: 'text',
    title: 'Не забыть выгулять Сиба-Ину',
    color: 0,
    size: 's',
    created: 1520160803000,
  };
  it('renders correctly', () => {
    const component = shallow(<Note colors={colors} note={note} />);
    expect(component).toMatchSnapshot();
  });
});
