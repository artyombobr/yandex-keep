import * as React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { connect } from 'react-redux';
import Tags from '../Tags/Tags';
import { fetchNoteToArchive } from '../../actions';

import { ReactComponent as Check } from '../Note/svg/check.svg';
import { ReactComponent as Edit } from '../Note/svg/edit.svg';

function NoteFooter(props: any) {
  const { note, tags, dispatch } = props;
  return (
    <div className="note__footer">
      {tags && <Tags note={note} tags={tags} />}
      <div className="note__info">
        {!note.archive && (
          <div className="icons">
            <button
              className="icons__item"
              type="button"
              onClick={() => dispatch(fetchNoteToArchive(note.id))}
            >
              <Check />
            </button>
            <button className="icons__item" type="button">
              <Edit />
            </button>
          </div>
        )}
        {moment(note.created).fromNow()}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    tags: state.tags,
  };
};

export default connect(mapStateToProps)(NoteFooter);
