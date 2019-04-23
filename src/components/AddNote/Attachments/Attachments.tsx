import React from 'react';
import './Attachments.scss';

const Attachments = (props: any) => {
  const { dataNote, setData } = props;
  return (
    <div className="attachments">
      {dataNote.attachments.map((attachment: any, index: number) => (
        <input key={index.toString()} type="text" />
      ))}
      <button
        type="button"
        className="modal__button"
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
