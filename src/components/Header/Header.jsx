import React from 'react';
import { PropTypes } from 'prop-types';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Style from './Header.module.css';

const Header = ({
  onClick,
}) => (
  <header className={Style.root}>
    <div className={Style.container}>
      <div className={Style['left-col']}>
        <Logo />
      </div>
      <div className={Style['right-col']}>
        <NavMenu />
        <button type="button" onClick={onClick} className={Style.btn}>
          Выход
        </button>
      </div>
    </div>
  </header>
);

Header.defaultProps = {
  onClick: () => true,
};

Header.propTypes = {
  onClick: PropTypes.func,
};

export default Header;
