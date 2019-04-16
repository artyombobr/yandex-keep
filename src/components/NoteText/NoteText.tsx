import React from 'react';
import NoteFooter from '../NoteFooter/NoteFooter';
import setBackground from '../../helpers/setBackground';

function NoteText(props: any) {
  const { colors, note, isEdit, setEdit, data, setData } = props;
  return (
    <div className="note__main" style={colors && setBackground(colors, note)}>
      {isEdit ? (
        <input
          className="note__title"
          type="text"
          defaultValue={note.title}
          onChange={e => {
            setData({ ...data, title: e.target.value });
            console.log(data);
          }}
        />
      ) : (
        note.title && <h2 className="note__title">{note.title}</h2>
      )}
      {isEdit ? (
        <input
          className="note__text"
          type="text"
          defaultValue={note.text}
          onChange={e => {
            setData({ ...data, text: e.target.value });
            console.log(data);
          }}
        />
      ) : (
        note.text && <div className="note__text">{note.text}</div>
      )}
      <NoteFooter note={note} data={data} isEdit={isEdit} setEdit={setEdit} />
    </div>
  );
}

export default NoteText;
