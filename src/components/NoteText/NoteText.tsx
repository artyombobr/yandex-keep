import * as React from 'react';
import NoteFooter from '../NoteFooter/NoteFooter';
import setBackground from '../../helpers/setBackground';

function NoteText( props: any) {
  const {data, note} = props;
  return (
    <div className='note__main' style={setBackground(data, note)}>
      {note.title && <h2 className='note__title'>{note.title}</h2>}
      {note.text && <div className='note__text'>{note.text}</div>}
      <NoteFooter data={data} note={note}/>

    </div>
  )
}

export default NoteText;
