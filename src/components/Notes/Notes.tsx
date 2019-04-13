import React from 'react';
import {NotesEntity, NotesProps} from '../../shared';
import Note from '../Note/Note';
import './Notes.scss';

function Notes(props: NotesProps) {
  const { data, notes } = props;
  const noteList = notes.map((note: NotesEntity) => <Note key={note.created} note={note} data={data} />);
  return (
    <section className='notes'>
      <div className='notes__inner'>
        {noteList}
      </div>
    </section>
  );
}

export default Notes;
