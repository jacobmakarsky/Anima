import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.png';
import './App.css';

import Menu from './pages/Menu.js'
import Game from './pages/Game.js'
import Settings from './pages/Settings.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Menu />
            </div>
          )}/>
          <Route exact={true} path='/Game' render={() => (
            <div className="App">
              <Game />
            </div>
          )}/>
          <Route exact={true} path='/Settings' render={() => (
            <div className="App">
              <Settings />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
