import React from 'react';
import './Note.scss';
import Reminder from '../Reminder/Reminder';
import Attachments from '../Attachments/Attachments';
import NoteText from '../NoteText/NoteText';
import NoteList from '../NoteList/NoteList';
import NoteImage from '../NoteImage/NoteImage';

export const Note = (props: any) => {
  const { note, colors } = props;
  const { type, attachments, reminder, size } = note;
  const noteType: { [key: string]: any } = {
    text: <NoteText note={note} colors={colors} />,
    list: <NoteList note={note} colors={colors} />,
    image: <NoteImage note={note} colors={colors} />,
  };

  return (
    <div className={'note ' + size}>
      <div className="note__reminder">
        {reminder && reminder > 0 && <Reminder reminder={reminder} />}
        <div className="note__attachment">
          {noteType[type]}
          {attachments && <Attachments attachments={attachments} />}
        </div>
      </div>
    </div>
  );
};

export default Note;
