import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setError } from '../../../redux/reducers/common';
import ErrorMessage from './ErrorMessage';

const ErrorMessageContainer = ({ isError, error, setErrorFunc }) => {
  const onClick = (e) => {
    if (e.target.getAttribute('data-type') === 'close') {
      setErrorFunc(false, 0, '', '');
    }
  };

  if (isError) {
    return (
      <ErrorMessage error={error} onClick={onClick} />
    );
  }

  return (
    <></>
  );
};

ErrorMessageContainer.defaultProps = {
  error: {},
  isError: false,
  setErrorFunc: () => true,
};

ErrorMessageContainer.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number,
    message: PropTypes.string,
    param: PropTypes.string,
  }),
  isError: PropTypes.bool,
  setErrorFunc: PropTypes.func,
};

const mapStateToProps = (state) => ({
  error: state.common.error,
  isError: state.common.isError,
});

export default connect(mapStateToProps, {
  setErrorFunc: setError,
})(ErrorMessageContainer);
