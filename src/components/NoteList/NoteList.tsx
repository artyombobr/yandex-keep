import * as React from 'react';
import setBackground from '../../helpers/setBackground';
import NoteFooter from '../NoteFooter/NoteFooter';
import List from '../List/List';

function NoteList(props: any) {
  const { colors, note } = props;
  return (
    <div className="note__checklist">
      <div className="note__main" style={colors && setBackground(colors, note)}>
        {note.title && <h2 className="note__title">{note.title}</h2>}
        {note.text && <div className="note__text">{note.text}</div>}
        <div className="checklist">
          <List items={note.items} />
        </div>
      </div>
      {/* <NoteFooter data={data} note={note}/> */}
    </div>
  );
}

export default NoteList;
