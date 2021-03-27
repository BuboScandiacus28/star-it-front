import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Style from './SignForm.module.css';

const SignForm = ({
  isLogin, formik, blur, focus,
}) => (
  <div className={Style.root}>
    <div className={Style['root-container']}>
      <form className={Style.form} onSubmit={formik.handleSubmit}>
        <div className={Style['redirect-container']}>
          {
            !isLogin
              ? (
                <>
                  <NavLink className={`${Style['redirect-btn']} ${Style['redirect-btn_reverce-theme']}`} to="/signin">Sign in</NavLink>
                  <h3 className={Style['choose-btn']}>Sign up</h3>
                </>
              )
              : (
                <>
                  <h3 className={Style['choose-btn']}>Sign in</h3>
                  <NavLink className={Style['redirect-btn']} to="/signup">Sign up</NavLink>
                </>
              )
          }
        </div>
        {
          !isLogin
          && (
            <div className={Style['input-container']}>
              <span className={Style['input-placeholder']}>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className={Style.input}
                onBlur={blur}
                onFocus={focus}
              />
            </div>

          )
        }
        <div className={Style['input-container']}>
          <span className={Style['input-placeholder']}>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={Style.input}
            onBlur={blur}
            onFocus={focus}
          />
        </div>
        <div className={Style['input-container']}>
          <span className={Style['input-placeholder']}>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className={Style.input}
            onBlur={blur}
            onFocus={focus}
          />
        </div>
        <button type="submit" className={Style.submit}>
          {
            isLogin
              ? 'Sign in'
              : 'Sign up'
          }
        </button>
      </form>
    </div>
  </div>
);

SignForm.defaultProps = {
  isLogin: false,
  formik: {},
  blur: () => true,
  focus: () => true,
};

SignForm.propTypes = {
  isLogin: PropTypes.bool,
  formik: PropTypes.shape({
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    values: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  }),
  blur: PropTypes.func,
  focus: PropTypes.func,
};

export default SignForm;
