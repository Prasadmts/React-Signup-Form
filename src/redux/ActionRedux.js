import { setLoggedIn } from './auth';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const saveUserData = (userData) => ({
  type: SAVE_USER_DATA,
  payload: userData,
});


export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const setLogged = (loggedIn) => ({
  type: SET_LOGGED_IN,
  payload: loggedIn,
});