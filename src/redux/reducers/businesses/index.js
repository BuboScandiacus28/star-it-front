import { businessAPI } from '../../../api/api';
import pathConvector from '../../../common/pathConvector';
import { changeLoaded, errorTh } from '../common';

const initialState = {
  businesses: [],
  selectedBusiness: {
    id: null,
    name: null,
    path: null,
  },
  pageNumber: 0,
  countPages: 1,
};

// Actions level

const SET_BUSINESSES = 'star_it/business/SET-BUSINESSES';
const SET_SELECTED_BUSINESS = 'star_it/business/SET-SELECTED-BUSINESS';
const SET_PAGE_NUMBER = 'star_it/business/SET_PAGE-NUMBER';

export const setBusinesses = (businesses, countPages) => ({
  type: SET_BUSINESSES,
  data: {
    businesses,
    countPages,
  },
});

export const setSelectedBusiness = ({ id, name, path }) => ({
  type: SET_SELECTED_BUSINESS,
  data: {
    id,
    name,
    path,
  },
});

export const setPageNumber = (pageNumber) => ({
  type: SET_PAGE_NUMBER,
  data: {
    pageNumber,
  },
});

// Thunks level

export const getBusinessesTh = (pageNumber) => async (dispatch) => {
  dispatch(changeLoaded(true));
  const data = await businessAPI.getAll(pageNumber);
  const businesses = data.businesses.map((item) => ({
    ...item,
    path: pathConvector(item.path),
  }));
  if (data.status === 200) {
    dispatch(setBusinesses(businesses, data.countPages));
  } else {
    errorTh(data);
  }
  dispatch(changeLoaded(false));
};

export const searchBusinessesTh = (pageNumber, value) => async (dispatch) => {
  dispatch(changeLoaded(true));
  const data = await businessAPI.search(pageNumber, value);
  const businesses = data.businesses.map((item) => ({
    ...item,
    path: pathConvector(item.path),
  }));
  if (data.status === 200) {
    dispatch(setBusinesses(businesses, data.countPages));
  } else {
    errorTh(data);
  }
  dispatch(changeLoaded(false));
};

export const getBusinessTh = (id) => async (dispatch) => {
  dispatch(changeLoaded(true));
  const data = await businessAPI.get(id);
  if (data.status === 200) {
    dispatch(setSelectedBusiness({
      ...data.business,
      path: pathConvector(data.business.path),
    }));
  } else {
    errorTh(data);
  }
  dispatch(changeLoaded(false));
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESSES:
      return {
        ...state,
        ...action.data,
      };
    case SET_SELECTED_BUSINESS:
      return {
        ...state,
        ...action.data,
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export default authReducer;
