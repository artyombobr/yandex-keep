import React from 'react';
import setBackground from '../../helpers/setBackground';
import NoteFooter from '../NoteFooter/NoteFooter';
import List from '../List/List';
import './NoteList.scss';

function NoteList(props: any) {
  const { colors, note, isEdit, setEdit, data, setData } = props;
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
        {note.text && <div className="note__text">{note.text}</div>}
        <div className="checklist">
          <div className="note__list">
            <List items={notChecked} />
          </div>
        </div>
      </div>
      <div className="checklist">
        <List items={checked} />
      </div>
      <NoteFooter note={note} data={data} isEdit={isEdit} setEdit={setEdit} />
    </div>
  );
}

export default NoteList;
