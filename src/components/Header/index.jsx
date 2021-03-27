import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setAuthUserData } from '../../redux/reducers/auth';
import Header from './Header';

const HeaderContainer = ({
  setUserData,
}) => {
  const onClick = () => {
    setUserData(null, null, null, false, null);
    localStorage.removeItem('star_it_access_token');
    localStorage.removeItem('star_it_refresh_token');
  };

  return (
    <Header onClick={onClick} />
  );
};

HeaderContainer.defaultProps = {
  setUserData: () => true,
};

HeaderContainer.propTypes = {
  setUserData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  setUserData: setAuthUserData,
})(HeaderContainer);
