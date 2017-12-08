import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute, hashHistory, Switch } from "react-router-dom";

import LayoutPage from './pages/LayoutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx';

const app = document.getElementById('app');

render((
    <Router>
      <Switch>
        <Route path="/" component={LayoutPage}>
            <Route component={HomePage}></Route>
        </Route>
        <Route path="calculator" name="calculator" component={CalculatorPage}></Route>
      </Switch>

    </Router>
  ), app);
