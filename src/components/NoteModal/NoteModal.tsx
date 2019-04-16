import React, { useState } from 'react';
import './NoteModal.scss';
import { connect } from 'react-redux';
import { fetchAddNote } from '../../actions';
import ColorPicker from './ColorPicker/ColorPicker';
import TagsPicker from './TagsPicker/TagsPicker';

import { ReactComponent as Check } from './svg/check.svg';
import { ReactComponent as Picture } from './svg/picture.svg';
import { NotesEntity } from '../../shared';

const NoteModal = (props: any) => {
  const { colors, tags, dispatch } = props;
  const [isToggleColor, setToggleColor] = useState(false);
  const [isToggleTag, setToggleTag] = useState(false);

  const [dataNote, setData] = useState<NotesEntity[] | any>({
    type: '',
    title: '',
    text: '',
    tags: [],
    items: [{ text: '' }],
    color: { color: '#fff', id: 0 },
    reminder: 0,
  });

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

  console.log(dataNote);

  return (
    <div className="modal" style={{ backgroundColor: dataNote.color.color }}>
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
          <div className="modal__type" title="Добавить список">
            <Check
              onClick={() => {
                setData({ ...dataNote, type: 'list' });
              }}
            />
          </div>
        )}
        {!dataNote.type && (
          <div className="modal__type" title="Добавить картинку">
            <Picture />
          </div>
        )}
      </div>
      {dataNote.type && (
        <div className="modal__toolbar">
          <input
            type="datetime-local"
            onChange={e => {
              setData({ ...dataNote, reminder: Date.parse(e.target.value) });
            }}
          />
          <button type="button" onClick={() => setToggleColor(!isToggleColor)}>
            {'Цвета'}
          </button>
          <button type="button" onClick={() => setToggleTag(!isToggleTag)}>
            {'Метки'}
          </button>
          {isToggleColor && (
            <ColorPicker
              colors={colors}
              dataNote={dataNote}
              setData={setData}
            />
          )}
          {isToggleTag && (
            <TagsPicker
              dataNote={dataNote}
              handleTagClick={handleTagClick}
              tags={tags}
            />
          )}
          <button
            type="button"
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
            }}
          >
            {'Сохранить'}
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tags: state.tags,
    colors: state.colors,
  };
};

export default connect(mapStateToProps)(NoteModal);
