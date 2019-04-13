import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './Header.scss';

const Header = () => (
  <header className='header'>
    <Logo className='header__logo' color='#000' />
    <input className='header__checkbox' type='checkbox' id='toggle' />
    <label className='header__hamburger' htmlFor='toggle'>
      <span className='navicon' />
    </label>
    <div className='header__right right'>
      <div className='right__menu menu'>
        <a className='menu__link' href='/'>Активные</a>
        <a className='menu__link menu__link_gray' href='/'>Архив</a>
        <button type='button' className='menu__button'>Добавить</button>
      </div>
      <Search className='right__search' />
    </div>
  </header>
);

export default Header;
