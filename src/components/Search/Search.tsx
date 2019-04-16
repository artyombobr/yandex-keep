import React from 'react';
import './Search.scss';

const Search = (props: any) => {
  const { className } = props;
  return (
    <form className={`${className} search`}>
      <input className="search__input" type="text" placeholder="Поиск" />
      <span className="search__span" />
      <button className="search__button" type="button">
        {'Найти'}
      </button>
    </form>
  );
};

export default Search;
