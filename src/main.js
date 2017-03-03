import React from "react";
import { render } from "react-dom";
import { Router, BrowserHistory, Route } from 'react-router';


import './main.css';
import NoteList from './components/NoteList/NoteList';

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
