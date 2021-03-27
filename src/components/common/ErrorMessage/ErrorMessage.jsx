import React from 'react';
import { PropTypes } from 'prop-types';
import Style from './ErrorMessage.module.css';

const ErrorMessage = ({ error, onClick }) => (
  <div
    className={Style.root}
    data-type="close"
    tabIndex="0"
    role="button"
    onClick={onClick}
    onKeyDown={
      (e) => {
        if (e.keyCode === 13) {
          onClick();
        }
      }
    }
  >
    <div className={Style.container}>
      <span
        data-type="close"
        role="button"
        tabIndex="0"
        className={Style.close}
        onClick={onClick}
        onKeyDown={
          (e) => {
            if (e.keyCode === 13) {
              onClick();
            }
          }
        }
      >
        {' '}
      </span>
      <h1 className={Style.title}>
        Ошибка
        {
          error.param !== ''
            ? ` ${error.status} в ${error.param}!`
            : ` ${error.status}!`
        }
      </h1>
      <p className={Style.description}>{error.message}</p>
    </div>
  </div>
);

ErrorMessage.defaultProps = {
  error: {},
  onClick: () => true,
};

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string,
    param: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default ErrorMessage;
