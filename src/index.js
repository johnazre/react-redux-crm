import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './store';
import routes from './routes';

const finalCreateStore = applyMiddleware(
  logger()
)(createStore)

ReactDOM.render(
  <Provider store={finalCreateStore(rootReducer)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.reactReduxCRM'));
