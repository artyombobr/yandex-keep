import * as React from 'react';
import Reminder from '../Reminder/Reminder';
import Attachments from '../Attachments/Attachments';
import NoteText from '../NoteText/NoteText';
import NoteList from '../NoteList/NoteList';
import {DataEntity, ItemsEntity, NotesEntity} from '../../shared';
import './Note.scss';
import NoteImage from "../NoteImage/NoteImage";


function Note(props: { data: any }) {
  const {data } = props;
  const { type, title, text, attachments, color, items, tags, reminder, created, size } = props.data;

  // const NoteType: { [key: string]: any } = {
  //   ['text']: <NoteText data={data} note={note} />,
  //   ['list']: <NoteList data={data} note={note}/>,
  //   ['image']: <NoteImage data={data} note={note}/>
  // };

   return (
    <div className={'note ' + size}>
      <div className='note__reminder'>
        {reminder && <Reminder reminder={reminder} />}
        <div className='note__attachment'>
          {/*{NoteType[type]}*/}
          {attachments && <Attachments attachments={attachments} />}
        </div>
      </div>
    </div>
  );
}

export default Note;
