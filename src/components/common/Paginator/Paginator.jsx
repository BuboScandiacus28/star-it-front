import React from 'react';
import { PropTypes } from 'prop-types';
import Style from './Paginator.module.css';

const Paginator = ({ pages }) => (
  <div className={Style.usersNav}>
    {pages}
  </div>
);

Paginator.defaultProps = {
  pages: [],
};

Paginator.propTypes = {
  pages: PropTypes.instanceOf(Array),
};

export default Paginator;
