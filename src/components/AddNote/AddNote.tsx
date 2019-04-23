import React, { useState } from 'react';
import './AddNote.scss';
import { connect } from 'react-redux';
import { fetchAddNote, toggleModal } from '../../actions';
import ColorPicker from './ColorPicker/ColorPicker';
import TagsPicker from './TagsPicker/TagsPicker';

import { ReactComponent as Check } from './svg/check.svg';
import { ReactComponent as Picture } from './svg/picture.svg';
import { NotesEntity } from '../../shared';
import Attachments from './Attachments/Attachments';

const AddNote = (props: any) => {
  const { colors, tags, dispatch, isVisibleModal } = props;
  const [activeTool, setActiveTool] = useState();
  const [dataNote, setData] = useState<NotesEntity[] | any>({
    type: '',
    tags: [],
    items: [{ text: '' }],
    color: { color: '#fff', id: undefined },
    attachments: [],
    reminder: 0,
  });
  console.log(dataNote);
  const handleTagClick = (id: number) => {
    if (dataNote.tags.indexOf(id) === -1) {
      const newTags = dataNote.tags;
      newTags.push(id);
      setData({ ...dataNote, tags: newTags });
    } else {
      setData({
        ...dataNote,
        tags: dataNote.tags.filter((tag: any) => tag !== id),
      });
    }
  };

  return (
    <div className="modal">
      <div
        className="modal__inner"
        style={{ backgroundColor: dataNote.color.color }}
      >
        {dataNote.type && (
          <input
            className="modal__title"
            onChange={e => {
              setData({ ...dataNote, title: e.target.value });
            }}
            placeholder="Введите заголовок"
          />
        )}
        <div className="modal__type">
          <textarea
            rows={dataNote.type && 5}
            className="modal__type_text"
            placeholder={
              dataNote.type === 'list' ? 'Введите список' : 'Заметка...'
            }
            onChange={e => {
              dataNote.type === 'text' &&
                setData({ ...dataNote, text: e.target.value });
              if (dataNote.type === 'list') {
                const newItems = dataNote.items;
                const arrayItems = e.target.value.split('\n');
                (dataNote.items.length = arrayItems.length) &&
                  (newItems[newItems.length - 1] = {
                    text: arrayItems[arrayItems.length - 1],
                  });
                dataNote.items.length < arrayItems.length &&
                  newItems.push({ text: arrayItems[arrayItems.length - 1] });
                setData({
                  ...dataNote,
                  items: newItems,
                });
              }
            }}
            onClick={() => {
              !dataNote.type && setData({ ...dataNote, type: 'text' });
            }}
          />
          {!dataNote.type && (
            <div className="modal__type_list" title="Добавить список">
              <Check
                onClick={() => {
                  setData({ ...dataNote, type: 'list' });
                }}
              />
            </div>
          )}
          {!dataNote.type && (
            <label className="modal__type_image" title="Добавить картинку">
              <Picture />
              <input hidden type="file" />
            </label>
          )}
        </div>
        {dataNote.type && (
          <div className="modal__toolbar">
            <button
              className="modal__button"
              type="button"
              onClick={() => setActiveTool('reminder')}
            >
              {'Напоминание'}
            </button>
            <button
              className="modal__button"
              type="button"
              onClick={() => setActiveTool('colors')}
            >
              {'Цвета'}
            </button>
            <button
              className="modal__button"
              type="button"
              onClick={() => setActiveTool('tags')}
            >
              {'Метки'}
            </button>
            <button
              className="modal__button"
              type="button"
              onClick={() => setActiveTool('attachments')}
            >
              {'Приложения'}
            </button>
            {activeTool == 'colors' && (
              <ColorPicker
                colors={colors}
                dataNote={dataNote}
                setData={setData}
              />
            )}
            {activeTool == 'tags' && (
              <TagsPicker
                dataNote={dataNote}
                handleTagClick={handleTagClick}
                tags={tags}
              />
            )}
            {activeTool == 'attachments' && (
              <Attachments dataNote={dataNote} setData={setData} />
            )}
            {activeTool == 'reminder' && (
              <input
                className="modal__date"
                type="datetime-local"
                defaultValue={new Date().toISOString().substr(0, 16)}
                onChange={e => {
                  setData({
                    ...dataNote,
                    reminder: Date.parse(e.target.value),
                  });
                }}
              />
            )}
          </div>
        )}
        {dataNote.type && (
          <div className="modal__action">
            <button
              type="button"
              className="modal__button"
              onClick={() => dispatch(toggleModal(!isVisibleModal))}
            >
              {'Закрыть'}
            </button>
            <button
              type="button"
              className="modal__button"
              onClick={() => {
                dispatch(
                  fetchAddNote({
                    type: dataNote.type,
                    title: dataNote.title,
                    text: dataNote.text,
                    tags: dataNote.tags,
                    items: dataNote.items,
                    color: dataNote.color.id,
                    reminder: dataNote.reminder,
                  })
                );
                dispatch(toggleModal(!isVisibleModal));
              }}
            >
              {'Сохранить'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tags: state.tags,
    colors: state.colors,
    isVisibleModal: state.isVisibleModal,
  };
};

export default connect(mapStateToProps)(AddNote);
