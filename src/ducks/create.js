import { createStore, combineReducers } from 'redux';

import currentUsageTableReducer from './modules/currentUsageTable';

export default () => {
  const store = createStore(
    combineReducers({
      currentUsageTable: currentUsageTableReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
