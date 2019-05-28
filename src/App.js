import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/Menu'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu />
        <Profile />
      </header>
    </div>
  );
}

export default App;
