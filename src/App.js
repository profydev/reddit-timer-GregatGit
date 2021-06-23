import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Home from './Pages/Home';
import Search from './Pages/Search';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>App Placeholder</div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
