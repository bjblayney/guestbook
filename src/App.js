// src/App.js
import React from 'react';
import VisitorCounter from './components/VisitorCounter';
import Guestbook from './components/Guestbook';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to the 80s Retro Site</h1>
      </header>
      <VisitorCounter />
      <Guestbook />
      {/* Add more components as needed */}
    </div>
  );
}

export default App;
