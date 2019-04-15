import React from 'react';
import { connect } from 'react-redux';
import {NotesEntity, NotesProps} from '../../shared';
import Note from '../Note/Note';
import './Notes.scss';

function Notes(props: any) {
  const {notes, colors} = props;
  return (
    <section className='notes'>
      <div className='notes__inner'>
        {notes.map((note: NotesEntity) => <Note key={note.created} note={note} colors={colors} />)}
      </div>
    </section>
  );
}

const mapStateToProps=(state: any)=>{
  return {
    notes: state.notes,
    colors: state.colors
  };
};

export default connect(mapStateToProps)(Notes);
