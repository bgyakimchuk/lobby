import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Lobby from './pages/Lobby';
import MainMenu from './pages/MainMenu';
import './App.css';

const App = () => (
  <div className='App'>
    <Router basename='/'>
      <Switch>
        <Route path='/lobby'>
          <Lobby />
        </Route>
        <Route path='/'>
          <MainMenu />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
