import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './ReducersRedux';
const storeRedux = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default storeRedux;