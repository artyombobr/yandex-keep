import React from 'react';
import { connect } from 'react-redux';
import {NotesEntity, NotesProps} from '../../shared';
import * as actionCreators from '../../actions';
import Note from '../Note/Note';
import './Notes.scss';


function Notes(props: any) {
  console.log(props);
  return (
    <section className='notes'>
      <div className='notes__inner'>
        {/*<div onClick={props.fetchAllNotes}>HELLO</div>*/}
        {props.notes.map((note: NotesEntity) => <Note key={note.created} data={note} />)}
      </div>
    </section>
  );
}

const mapStateToProps=(state: any)=>{
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, actionCreators)(Notes);
