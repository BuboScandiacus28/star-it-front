import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { signinTh, signupTh } from '../../../redux/reducers/auth';
import { setBlurEvent, setFocusEvent } from '../../../common/eventList';
import SignForm from './SignForm';

const SignFormContainer = ({
  isLogin, isAuth, signin, signup,
  blur, focus,
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
    },
    onSubmit: (values) => (
      isLogin
        ? signin(values.email, values.password)
        : signup(values.name, values.email, values.password)
    ),
  });

  if (isAuth) {
    return (
      <Redirect to="/home" />
    );
  }

  return (
    <SignForm
      isLogin={isLogin}
      formik={formik}
      blur={blur}
      focus={focus}
    />
  );
};

SignFormContainer.defaultProps = {
  isLogin: false,
  isAuth: false,
  signin: () => true,
  signup: () => true,
  blur: () => true,
  focus: () => true,
};

SignFormContainer.propTypes = {
  isLogin: PropTypes.bool,
  isAuth: PropTypes.bool,
  signin: PropTypes.func,
  signup: PropTypes.func,
  blur: PropTypes.func,
  focus: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
  signin: signinTh,
  signup: signupTh,
  blur: setBlurEvent,
  focus: setFocusEvent,
})(SignFormContainer);
