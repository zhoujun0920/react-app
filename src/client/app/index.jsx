import React from 'react';
import {render} from 'react-dom';
import { HashRouter as Router, Route, IndexRoute, hashHistory } from "react-router";

import LayoutPage from './pages/LayoutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx';

const app = document.getElementById('app');

render((
    <Router>
        <Route path="/" component={HomePage}>
          <IndexRoute component={HomePage}></IndexRoute>
          <Route path="calculator" name="calculator" component={CalculatorPage}></Route>
        </Route>
    </Router>
  ), app);
