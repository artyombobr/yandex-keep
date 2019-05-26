import React from 'react';
import './Attachments.scss';

const Attachments = (props: any) => {
  const { dataNote, setData } = props;
  return (
    <div className="attachments">
      {dataNote.attachments.map((attachment: any, index: number) => (
        <input
          className="attachments__input"
          placeholder="Введите ссылку"
          key={index.toString()}
          type="text"
          onChange={e => {
            const { value } = e.target;
            const { attachments } = dataNote;
            attachments[index] = { type: 'link', url: value };
            setData({ ...dataNote, attachments });
          }}
        />
      ))}
      <button
        type="button"
        className="modal__button attachments__button"
        onClick={() => {
          setData({ ...dataNote, attachments: [...dataNote.attachments, {}] });
        }}
      >
        {'Добавить'}
      </button>
    </div>
  );
};

export default Attachments;
