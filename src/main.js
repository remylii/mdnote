import React from "react";
import { render } from "react-dom";
import { Router, Route, BrowserHistory } from 'react-router';

import App from './pages/App/App';
import Dashboard from './pages/Dashboard/Dashboard';
import Note from './pages/Note/Note';
import NoteEdit from './pages/Dashboard/NoteEdit/NoteEdit';
import Starred from './pages/Starred/Starred';

render(
  <Router history={BrowserHistory}>
    <Route component={App}>
      <Route path="/" component={Dashboard}>
        <Route
          path="notes/:id/edit"
          component={NoteEdit} />
        <Route path="notes/:id" component={Note} />
        <Route path="starred" component={Starred} />
      </Route>
    </Route>
  </Router>
  , document.getElementById("app")
);
