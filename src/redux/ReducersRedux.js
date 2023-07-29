import { LOGIN_SUCCESS, LOGIN_FAILURE, SAVE_USER_DATA, SET_LOGGED_IN } from './ActionRedux';

const initialState = {
  user: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, user: null, error: action.payload };
    case SAVE_USER_DATA:
      return { ...state, user: action.payload };
    case SET_LOGGED_IN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default rootReducer;