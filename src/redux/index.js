import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './reducers/auth';
import commonReducer from './reducers/common';
import businessReducer from './reducers/businesses';

const reducers = combineReducers({
  auth: authReducer,
  common: commonReducer,
  business: businessReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
