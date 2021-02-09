import React from 'react';
import Main from './Main';
import Page2 from './Page2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Page2" >
          <Page2 />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
