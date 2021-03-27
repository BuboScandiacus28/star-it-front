import React from 'react';
import { PropTypes } from 'prop-types';
import Style from './Preloader.module.css';
import preloader from './assets/loader.gif';

const Preloader = ({ isLoader }) => {
  if (isLoader) {
    return (
      <div className={Style.loader}>
        <img className={Style.loaderInner} src={preloader} alt="Прелоадер" />
      </div>
    );
  }

  return (
    <>
    </>
  );
};

Preloader.defaultProps = {
  isLoader: false,
};

Preloader.propTypes = {
  isLoader: PropTypes.bool,
};

export default Preloader;
