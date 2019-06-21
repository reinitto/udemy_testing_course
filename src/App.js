import React from 'react';
import logo from './logo.svg';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

function App() {
  return (
    <div className='App'>
      <Congrats />
      <GuessedWords />
    </div>
  );
}

export default App;
