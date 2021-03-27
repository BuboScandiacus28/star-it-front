import React, { useEffect } from 'react';
import './App.css';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { checkAuthTh } from './redux/reducers/auth';
import Preloader from './components/common/Preloader';
import ErrorMessage from './components/common/ErrorMessage';
import Header from './components/Header';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Dashboard from './components/pages/Dashboard';
import SignForm from './components/pages/SignForm';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import BusinessesList from './components/pages/BusinessesList';

const App = ({
  isAuth, isLoaded, isInitialized,
  checkAuth,
}) => {
  useEffect(() => {
    if (!isInitialized && localStorage.getItem('star_it_token')) {
      checkAuth();
    }
  }, []);

  if (!isAuth && isInitialized) {
    return (
      <>
        <Preloader isLoader={isLoaded || !isInitialized} />
        <ErrorMessage />
        <Switch>
          <Route path="/signin" render={() => <SignForm isLogin />} />
          <Route path="/signup" render={() => <SignForm />} />
          <Redirect to="/signin" />
        </Switch>
      </>
    );
  }

  return (
    <>
      <Preloader isLoader={isLoaded || !isInitialized} />
      <Header />
      <ErrorMessage />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/consulting" component={Consulting} />
        <Route path="/businesses" component={BusinessesList} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

App.defaultProps = {
  isAuth: false,
  isLoaded: false,
  isInitialized: false,
  checkAuth: () => true,
};

App.propTypes = {
  isAuth: PropTypes.bool,
  isLoaded: PropTypes.bool,
  isInitialized: PropTypes.bool,
  checkAuth: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isLoaded: state.common.isLoaded,
  isInitialized: state.auth.isInitialized,
});

export default compose(
  connect(mapStateToProps, {
    checkAuth: checkAuthTh,
  }),
)(App);
