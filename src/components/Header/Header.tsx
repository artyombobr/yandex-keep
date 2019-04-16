import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import './Header.scss';
import { toggleModal } from '../../actions';

const Header = (props: any) => {
  const { isVisibleModal, dispatch } = props;
  return (
    <header className="header">
      <Logo className="header__logo" color="#000" />
      <input className="header__checkbox" type="checkbox" id="toggle" />
      <label className="header__hamburger" htmlFor="toggle">
        <span className="navicon" />
      </label>
      <div className="header__right right">
        <div className="right__menu menu">
          <NavLink
            exact
            to="/"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            {'Активные'}
          </NavLink>
          <NavLink
            to="/archive"
            className="menu__link"
            activeClassName="menu__link_active"
          >
            {'Архив'}
          </NavLink>
          <button
            type="button"
            className="menu__button"
            onClick={() => dispatch(toggleModal(!isVisibleModal))}
          >
            {'Добавить'}
          </button>
        </div>
        <Search className="right__search" />
      </div>
    </header>
  );
};

const stateToProps = (state: any) => {
  return {
    isVisibleModal: state.isVisibleModal,
  };
};

export default connect(stateToProps)(Header);
