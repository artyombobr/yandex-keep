import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './Header.scss';

const Header = () => (
  <header className="header">
    <Logo className="header__logo" color="#000" />
    <input className="header__checkbox" type="checkbox" id="toggle" />
    <label className="header__hamburger" htmlFor="toggle">
      <span className="navicon" />
    </label>
    <div className="header__right right">
      <div className="right__menu menu">
        <Link to="/">
          <button className="menu__link" type="button">
            {'Активные'}
          </button>
        </Link>
        <Link to="/archive">
          <button className="menu__link menu__link_gray" type="button">
            {'Архив'}
          </button>
        </Link>
        <button type="button" className="menu__button">
          {'Добавить'}
        </button>
      </div>
      <Search className="right__search" />
    </div>
  </header>
);

export default Header;
