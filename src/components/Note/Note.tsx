import * as React from 'react';
import './Note.scss';
import Reminder from '../Reminder/Reminder';
import Attachments from '../Attachments/Attachments';
import NoteText from '../NoteText/NoteText';
import NoteList from '../NoteList/NoteList';
import NoteImage from "../NoteImage/NoteImage";
import {DataEntity, ItemsEntity, NotesEntity} from '../../shared';



function Note(props: any) {
  const { note, colors } = props;
  const { type, title, text, attachments, color, items, tags, reminder, created, size } = note;

  const NoteType: { [key: string]: any } = {
    ['text']: <NoteText note={note} colors={colors}/>,
    ['list']: <NoteList note={note} colors={colors}/>,
    ['image']: <NoteImage />
  };

   return (
    <div className={'note ' + size}>
      <div className='note__reminder'>
        {reminder && <Reminder reminder={reminder} />}
        <div className='note__attachment'>
          {NoteType[type]}
          {attachments && <Attachments attachments={attachments} />}
        </div>
      </div>
    </div>
  );
}

export default Note;
