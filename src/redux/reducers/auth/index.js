import { authAPI } from '../../../api/api';
import { changeLoaded, errorTh } from '../common';

const initialState = {
  userId: null,
  email: null,
  name: null,
  userStatus: null,
  isAuth: false,
  isInitialized: false,
};

// Actions level

const SET_USER_DATA = 'star_it/auth/SET-USER-DATA';
const SET_INITIALIZED = 'star_it/auth/SET-INITIALIZED';

export const setAuthUserData = (userId, email, name, isAuth, userStatus) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    name,
    isAuth,
    userStatus,
  },
});

export const setInitialized = (isInitialized) => ({
  type: SET_INITIALIZED,
  data: {
    isInitialized,
  },
});

// Thunks level

export const signinTh = (email, password) => async (dispatch) => {
  dispatch(changeLoaded(true));
  const data = await authAPI.signin(email, password);
  if (data.status === 200) {
    dispatch(setAuthUserData(
      data.user.id,
      data.user.email,
      data.user.name,
      true,
      data.user.userStatus,
    ));
  } else {
    dispatch(errorTh(data));
  }
  dispatch(changeLoaded(false));
};

export const signupTh = (name, email, password) => async (dispatch) => {
  dispatch(changeLoaded(true));
  const data = await authAPI.signup(name, email, password);
  if (data.status !== 200) {
    dispatch(errorTh(data));
  }
  dispatch(changeLoaded(false));
};

export const checkAuthTh = () => async (dispatch) => {
  dispatch(changeLoaded(true));
  const data = await authAPI.me();
  if (data.status === 200) {
    dispatch(setAuthUserData(
      data.user.id,
      data.user.email,
      data.user.name,
      true,
      data.user.userStatus,
    ));
  }
  dispatch(changeLoaded(false));
  dispatch(setInitialized(true));
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_INITIALIZED:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
