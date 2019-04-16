import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import reducers from './reducers';
import { fetchAllNotes, fetchAllColors, fetchAllTags } from './actions';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(fetchAllNotes());
store.dispatch(fetchAllColors());
store.dispatch(fetchAllTags());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
