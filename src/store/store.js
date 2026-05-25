import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { themeReducer } from './reducers/themeReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));