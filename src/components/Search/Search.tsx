import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import './Search.scss';
import { connect } from 'react-redux';
import { setVisibleNotes } from '../../actions';

const options = {
  threshold: 0.2,
  minMatchCharLength: 1,
  keys: ['title', 'text', 'attachments.url'],
};

const Search = (props: any) => {
  const { className, allNotes, dispatch } = props;
  const [text, setText] = useState('');
  useEffect(() => {
    const fuse = new Fuse(allNotes, options);
    const result = fuse.search(text);
    if (result.length || text.length) {
      dispatch(setVisibleNotes(result));
    } else {
      dispatch(setVisibleNotes(allNotes));
    }
  }, [allNotes, text]);
  return (
    <form className={`${className} search`}>
      <input
        className="search__input"
        type="text"
        value={text}
        placeholder="Поиск"
        onChange={e => setText(e.target.value)}
      />
      <span className="search__span" onClick={() => setText('')} />
      <button className="search__button" type="button">
        {'Найти'}
      </button>
    </form>
  );
};

const stateToProps = (state: any) => {
  return {
    allNotes: state.allNotes,
  };
};

export default connect(stateToProps)(Search);
