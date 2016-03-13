import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Contacts from './components/Contacts';
import Tasks from './components/Tasks'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Contacts} />
    <Route path="tasks" component={Tasks} />

  </Route>

);
