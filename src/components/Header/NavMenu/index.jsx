import React from 'react';
import NavMenuItem from './NavMenuItem';
import Style from './NavMenu.module.css';

const Navbar = () => (
  <nav className={Style.root}>
    <ul className={Style.list}>
      <li className={Style['list-item']}>
        <NavMenuItem
          route="/home"
          text="Главная"
        />
      </li>
      <li className={Style['list-item']}>
        <NavMenuItem
          route="/business"
          text="Бизнесы"
        />
      </li>
      <li className={Style['list-item']}>
        <NavMenuItem
          route="/account"
          text="Личный кабинет"
        />
      </li>
    </ul>
  </nav>
);

export default Navbar;
