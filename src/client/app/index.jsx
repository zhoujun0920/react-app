import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute, hashHistory, Switch } from "react-router-dom";

import App from './App.jsx';

const app = document.getElementById('app');

render((
    <Router>
      <App />
    </Router>
  ), app);
