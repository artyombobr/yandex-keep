import React from 'react';
import { shallow } from 'enzyme';
import Attachments from './Attachments';

describe('Attachments', () => {
  const attachments = [
    { type: 'link', url: 'https://yandex.ru' },
    {
      type: 'image',
      url:
        'https://avatars.mds.yandex.net/get-pdb/1816426/93eab951-b130-4cf9-98d6-01e250be5530/orig',
    },
  ];
  it('renders correctly', () => {
    const component = shallow(<Attachments attachments={attachments} />);
    expect(component).toMatchSnapshot();
  });
});
