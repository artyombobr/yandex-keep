import React from 'react';
import { NotesEntity } from '../../shared';
import Note from '../Note/Note';
import './Notes.scss';

function Notes(props: any) {
  const { notes, colors } = props;
  return (
    <section className="notes">
      <div className="notes__inner">
        {notes &&
          notes.map((note: NotesEntity) => (
            <Note key={note.created} note={note} colors={colors} />
          ))}
      </div>
    </section>
  );
}

export default Notes;
