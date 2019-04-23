import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { connect } from 'react-redux';
import Tags from '../Tags/Tags';
import { fetchNoteToArchive, fetchEditNote } from '../../actions';
import { TagsEntity } from '../../../server/src/shared';
import './NoteFooter.scss';

import { ReactComponent as Check } from '../Note/svg/check.svg';
import { ReactComponent as Edit } from '../Note/svg/edit.svg';

interface IState {
  tags: TagsEntity[];
}

export const NoteFooter = (props: any) => {
  const { note, tags, dispatch, setEdit, isEdit, data } = props;
  return (
    <div className="note__footer">
      {tags && <Tags note={note} tags={tags} />}
      <div className="note__info">
        {!note.archive && (
          <div className="icons">
            {!isEdit ? (
              <>
                <button
                  className="icons__item"
                  type="button"
                  onClick={() => dispatch(fetchNoteToArchive(note.id))}
                >
                  <Check />
                </button>
                <button
                  className="icons__item"
                  type="button"
                  onClick={() => setEdit(!isEdit)}
                >
                  <Edit />
                </button>
              </>
            ) : (
              <button
                className="modal__button"
                type="button"
                onClick={() => {
                  dispatch(fetchEditNote(note.id, data));
                  setEdit(false);
                }}
              >
                {'Сохранить'}
              </button>
            )}
          </div>
        )}
        {moment(note.created).fromNow()}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    tags: state.tags,
  };
};

export default connect(mapStateToProps)(NoteFooter);
