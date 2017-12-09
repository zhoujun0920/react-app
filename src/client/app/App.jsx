import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Navigator from './components/layout/Navigator.jsx';
import HomePage from './pages/HomePage.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => (
  <div>
    <Navigator></Navigator>
    <Switch>
      <Route exact path="/" name="home" component={HomePage}></Route>
      <Route path="/calculator" name="calculator" component={CalculatorPage}></Route>
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
