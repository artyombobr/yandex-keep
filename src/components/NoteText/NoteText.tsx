import * as React from 'react';
import NoteFooter from '../NoteFooter/NoteFooter';
import setBackground from '../../helpers/setBackground';

function NoteText( props: any) {
  const {colors, note} = props;
  return (
    <div className='note__main' style={colors && setBackground(colors, note)}>
      {note.title && <h2 className='note__title'>{note.title}</h2>}
      {note.text && <div className='note__text'>{note.text}</div>}
      <NoteFooter note={note}/>
    </div>
  )
}

export default NoteText;
