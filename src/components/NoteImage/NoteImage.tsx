import * as React from 'react';
import NoteFooter from '../NoteFooter/NoteFooter';
import setBackground from '../../helpers/setBackground';

function NoteImage(props: any) {
  const { note, colors, isEdit, setEdit } = props;
  return (
    <div
      className="note__main note__main_image"
      style={colors && setBackground(colors, note)}
    >
      <div className="note__image">
        <picture>
          <source
            media="(max-width: 320px)"
            srcSet="https://via.placeholder.com/320"
          />
          <source
            media="(max-width: 465px)"
            srcSet="https://via.placeholder.com/465"
          />
          <source
            media="(max-width: 650px)"
            srcSet="https://via.placeholder.com/650"
          />
          <img src="https://via.placeholder.com/1020" alt="Изображение" />
        </picture>
      </div>
      <NoteFooter note={note} isEdit={isEdit} setEdit={setEdit} />
    </div>
  );
}

export default NoteImage;
