import React, { useState } from 'react';
import setBackground from '../../helpers/setBackground';
import NoteFooter from '../NoteFooter/NoteFooter';
import List from '../List/List';

function NoteList(props: any) {
  const { colors, note } = props;
  const checked = note.items.filter(
    (item: { checked: boolean }) => item.checked
  );
  const notChecked = note.items.filter(
    (item: { checked: boolean }) => !item.checked
  );
  return (
    <div className="note__checklist">
      <div
        className="note__main note__main_list"
        style={colors && setBackground(colors, note)}
      >
        {note.title && <h2 className="note__title">{note.title}</h2>}
        {note.text && <div className="note__text">{note.text}</div>}
        <div className="checklist">
          <div className="note__list">
            <List items={notChecked} checked={false} />
          </div>
        </div>
      </div>
      <div className="checklist">
        <List items={checked} checked />
      </div>
      <NoteFooter note={note} />
    </div>
  );
}

export default NoteList;
