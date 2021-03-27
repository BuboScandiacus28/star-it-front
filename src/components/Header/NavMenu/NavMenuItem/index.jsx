import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Style from './NavMenuItem.module.css';

const NavbarItem = ({
  route,
  text,
}) => (
  <div className={Style.root}>
    <Link to={route} className={Style.link}>
      {text}
    </Link>
  </div>
);

NavbarItem.defaultProps = {
  route: '',
  text: '',
};

NavbarItem.propTypes = {
  route: PropTypes.string,
  text: PropTypes.string,
};

export default NavbarItem;
