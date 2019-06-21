import React from 'react';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

const guessedWords = [
  {
    guessedWord: 'train',
    letterMatchCount: 3
  },
  {
    guessedWord: 'agile',
    letterMatchCount: 1
  },
  {
    guessedWord: 'party',
    letterMatchCount: 5
  }
];

function App() {
  return (
    <div className='container'>
      <h1>Guess that word!</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
