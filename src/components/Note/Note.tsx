import React, { useState } from 'react';
import './Note.scss';
import Reminder from '../Reminder/Reminder';
import Attachments from '../Attachments/Attachments';
import NoteText from '../NoteText/NoteText';
import NoteList from '../NoteList/NoteList';
import NoteImage from '../NoteImage/NoteImage';

function Note(props: any) {
  const { note, colors } = props;
  const { type, attachments, reminder, size } = note;
  const [isEdit, setEdit] = useState(false);
  const [data, setData] = useState({});
  const NoteType: { [key: string]: any } = {
    text: (
      <NoteText
        isEdit={isEdit}
        setEdit={setEdit}
        data={data}
        setData={setData}
        note={note}
        colors={colors}
      />
    ),
    list: (
      <NoteList
        isEdit={isEdit}
        setEdit={setEdit}
        data={data}
        setData={setData}
        note={note}
        colors={colors}
      />
    ),
    image: <NoteImage note={note} colors={colors} />,
  };

  return (
    <div className={'note ' + size}>
      <div className="note__reminder">
        {reminder > 0 && <Reminder isEdit={isEdit} reminder={reminder} />}
        <div className="note__attachment">
          {NoteType[type]}
          {attachments && <Attachments attachments={attachments} />}
        </div>
      </div>
    </div>
  );
}

export default Note;
