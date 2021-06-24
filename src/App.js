import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Home from './Pages/Home';
import Search from './Pages/Search';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route>404 - Not found</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
