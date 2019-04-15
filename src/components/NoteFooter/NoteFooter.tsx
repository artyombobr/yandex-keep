import * as React from "react";
import moment from 'moment';
import 'moment/locale/ru';
import Tags from '../Tags/Tags';

import {ReactComponent as Check} from "../Note/svg/check.svg";
import {ReactComponent as Edit} from "../Note/svg/edit.svg";
import {connect} from "react-redux";


function NoteFooter(props: any) {
  const { note, tags} = props;
  return (
    <div className='note__footer'>
    {tags && <Tags note={note} tags={tags}/>}
    <div className='note__info'>
      <div className='icons'>
        <Check className='icons__item' />
        <Edit className='icons__item' />
      </div>
      {moment(note.created).fromNow()}
    </div>
  </div>
  )
}

const mapStateToProps=(state: any)=>{
  return {
    tags: state.tags
  };
};

export default connect(mapStateToProps)(NoteFooter);
