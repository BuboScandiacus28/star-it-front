import React from 'react';
import { Link } from 'react-router-dom';
import Style from './Logo.module.css';

const Logo = () => (
  <Link to="/" className={Style.root}>
    <p className={Style.text}>
      Star IT
    </p>
    <div className={Style['star-container']}>
      <span className={Style.star}>
        &#9734;
      </span>
    </div>
  </Link>
);

export default Logo;
