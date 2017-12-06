import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import eventsReducer from '../reducers/events';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default () => {
  // Store creation
  const store = createStoreWithMiddleware(
    combineReducers({
      events: eventsReducer,
      filters: filtersReducer,
      auth: authReducer
    })
  );

  return store;
}
