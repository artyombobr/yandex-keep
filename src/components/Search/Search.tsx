import React from 'react';
import './Search.scss';

const Search = (props: { className: string; }) => (
  <form className={`${props.className} search`}>
    <input className='search__input' type='text' placeholder='Поиск' />
    <span className='search__span' />
    <button className='search__button' type='button'>Найти</button>
  </form>
);

export default Search;
