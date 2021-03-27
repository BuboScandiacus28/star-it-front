const initialState = {
  isLoaded: false,
  error: {
    status: 0,
    param: '',
    message: '',
  },
  isError: false,
};

// Actions level

const CHANGE_LOADED = 'star_it/common/CHANGE-LOADED';
const SET_ERROR = 'star_it/common/SET-ERROR';

export const changeLoaded = (isLoaded) => ({
  type: CHANGE_LOADED,
  data: {
    isLoaded,
  },
});

export const setError = (isError, status, message, param) => ({
  type: SET_ERROR,
  data: {
    error: {
      status,
      param,
      message,
    },
    isError,
  },
});

// Thunks level

export const errorTh = (error) => (dispatch) => {
  const errorObj = {
    message: error.message,
    status: error.status,
  };
  if (error.param) {
    errorObj.param = error.param;
  } else {
    errorObj.param = '';
  }
  dispatch(setError(true, errorObj.status, errorObj.message, errorObj.param));
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOADED:
      return {
        ...state,
        ...action.data,
      };
    case SET_ERROR:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default commonReducer;
