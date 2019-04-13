import * as React from "react";
import moment from 'moment';
import 'moment/locale/ru';
import Tags from '../Tags/Tags';

import {ReactComponent as Check} from "../Note/svg/check.svg";
import {ReactComponent as Edit} from "../Note/svg/edit.svg";


function NoteFooter(props: any) {
  const {data, note} = props;
  return (
    <div className='note__footer'>
    {note.tags && <Tags data={data} note={note}/>}
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

export default NoteFooter;
