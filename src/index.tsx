import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import reducers from './reducers';
import { fetchAllNotes} from "./actions";

import * as serviceWorker from './serviceWorker';

const store = createStore(reducers, applyMiddleware(thunk));

store.dispatch(fetchAllNotes());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
